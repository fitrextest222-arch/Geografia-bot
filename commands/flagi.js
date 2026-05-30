// ============================================================
//  KOMENDA !flagi  – quiz z flagami współczesnych krajów
//  Regiony: Europa, Azja, Ameryka Północna, Ameryka Południowa, Oceania
// ============================================================

const { EmbedBuilder } = require('discord.js');
const { getAllModernCountries, getCountriesByRegion, shuffle } = require('../data/countries');
const {
  checkAnswer,
  buildModernQuestionEmbed,
  buildCorrectEmbed,
  buildTimeoutEmbed,
  buildRankingEmbed,
  QUESTION_TIME,
  QUESTIONS_PER_GAME,
} = require('../utils/gameManager');

module.exports = {
  name: 'flagi',
  aliases: ['flag', 'quiz'],
  description: 'Rozpocznij quiz z flagami krajów',

  async execute(message, args, client) {
    const guildId = message.guild.id;

    // Sprawdź czy gra już trwa
    if (client.activeGames.has(guildId)) {
      return message.reply('⚠️ Gra już trwa na tym serwerze! Użyj `!stop` aby ją zakończyć.');
    }

    // Parsuj argumenty: !flagi [liczba] [region]
    // Przykłady: !flagi, !flagi 15, !flagi europa, !flagi 20 azja
    let numQuestions = QUESTIONS_PER_GAME;
    let regionFilter = 'all';

    const regionMap = {
      'europa': 'europa',
      'azja': 'azja',
      'ameryka': 'ameryka_polnocna',
      'ameryka_polnocna': 'ameryka_polnocna',
      'ameryka_poludniowa': 'ameryka_poludniowa',
      'oceania': 'oceania',
    };

    for (const arg of args) {
      const num = parseInt(arg);
      if (!isNaN(num) && num >= 3 && num <= 50) {
        numQuestions = num;
      } else {
        const normalized = arg.toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (regionMap[normalized]) regionFilter = regionMap[normalized];
      }
    }

    // Pobierz kraje
    let pool = regionFilter === 'all'
      ? getAllModernCountries()
      : getCountriesByRegion([regionFilter]);

    if (pool.length < 3) {
      return message.reply('❌ Za mało krajów dla wybranego regionu!');
    }

    const questions = shuffle(pool).slice(0, Math.min(numQuestions, pool.length));

    // Embed startowy
    const regionNames = {
      all: 'Wszystkie regiony',
      europa: '🌍 Europa',
      azja: '🌏 Azja',
      ameryka_polnocna: '🌎 Ameryka Północna',
      ameryka_poludniowa: '🌎 Ameryka Południowa',
      oceania: '🌊 Oceania',
    };

    const startEmbed = new EmbedBuilder()
      .setColor(0x3498db)
      .setTitle('🚩 Quiz z Flag – START!')
      .setDescription(`Gra rozpoczyna się za **3 sekundy**!\n\nWpisuj nazwy krajów w odpowiedzi na pytania.\n*Akceptujemy polskie i angielskie nazwy!*`)
      .addFields(
        { name: 'Liczba pytań', value: `${questions.length}`, inline: true },
        { name: 'Region', value: regionNames[regionFilter] || regionFilter, inline: true },
        { name: 'Czas na odpowiedź', value: `${QUESTION_TIME}s`, inline: true },
      )
      .setFooter({ text: `Gra rozpoczęta przez ${message.author.username}` })
      .setTimestamp();

    await message.channel.send({ embeds: [startEmbed] });
    await sleep(3000);

    // Inicjalizuj grę
    const gameState = {
      type: 'modern',
      questions,
      currentIndex: 0,
      scores: {}, // userId -> { correct, totalTime }
      active: true,
      channelId: message.channel.id,
    };
    client.activeGames.set(guildId, gameState);

    // Pętla pytań
    for (let i = 0; i < questions.length; i++) {
      if (!client.activeGames.has(guildId)) break; // gra zatrzymana

      const country = questions[i];
      gameState.currentIndex = i;

      const embed = buildModernQuestionEmbed(country, i + 1, questions.length, QUESTION_TIME);
      await message.channel.send({ embeds: [embed] });

      const startTime = Date.now();
      const winner = await waitForAnswer(message.channel, country, QUESTION_TIME * 1000, gameState);

      if (!client.activeGames.has(guildId)) break;

      if (winner) {
        const elapsed = Date.now() - startTime;
        // Aktualizuj score
        if (!gameState.scores[winner.id]) {
          gameState.scores[winner.id] = { correct: 0, totalTime: 0, username: winner.username };
        }
        gameState.scores[winner.id].correct++;
        gameState.scores[winner.id].totalTime += elapsed;

        const correctEmbed = buildCorrectEmbed(winner, country, elapsed, i + 1, questions.length);
        await message.channel.send({ embeds: [correctEmbed] });
      } else {
        const timeoutEmbed = buildTimeoutEmbed(country, i + 1, questions.length);
        await message.channel.send({ embeds: [timeoutEmbed] });
      }

      // Pauza między pytaniami (skróć jeśli to ostatnie)
      if (i < questions.length - 1) {
        await sleep(2500);
      }
    }

    // Koniec gry – ranking
    client.activeGames.delete(guildId);
    const rankingEmbed = buildRankingEmbed(gameState.scores, 'modern', questions.length);
    await message.channel.send({ embeds: [rankingEmbed] });
  },
};

// Czeka na poprawną odpowiedź lub timeout
function waitForAnswer(channel, country, timeoutMs, gameState) {
  return new Promise((resolve) => {
    const filter = (msg) => !msg.author.bot;
    const collector = channel.createMessageCollector({ filter, time: timeoutMs });

    let resolved = false;

    collector.on('collect', (msg) => {
      if (checkAnswer(msg.content, country)) {
        resolved = true;
        collector.stop('correct');
        resolve(msg.author);
      }
    });

    collector.on('end', (_, reason) => {
      if (!resolved) resolve(null);
    });
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

