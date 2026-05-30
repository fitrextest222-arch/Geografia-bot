// ============================================================
//  KOMENDA !flagihistoria – quiz z historycznymi flagami
//  Obejmuje: III Rzeszę, ZSRR, Austro-Węgry, Japonię cesarską i inne
// ============================================================

const { EmbedBuilder } = require('discord.js');
const { HISTORICAL_FLAGS, shuffle } = require('../data/countries');
const {
  checkAnswer,
  buildHistoricalQuestionEmbed,
  buildCorrectEmbed,
  buildTimeoutEmbed,
  buildRankingEmbed,
  QUESTION_TIME,
} = require('../utils/gameManager');

const HISTORICAL_QUESTIONS = 8; // domyślna liczba pytań historycznych

module.exports = {
  name: 'flagihistoria',
  aliases: ['historia', 'historyczne', 'flagihistoryczne'],
  description: 'Quiz z historycznymi flagami (III Rzesza, ZSRR, Austro-Węgry i inne)',

  async execute(message, args, client) {
    const guildId = message.guild.id;

    if (client.activeGames.has(guildId)) {
      return message.reply('⚠️ Gra już trwa na tym serwerze! Użyj `!stop` aby ją zakończyć.');
    }

    // Parsuj liczbę pytań
    let numQuestions = HISTORICAL_QUESTIONS;
    if (args[0]) {
      const n = parseInt(args[0]);
      if (!isNaN(n) && n >= 3 && n <= HISTORICAL_FLAGS.length) numQuestions = n;
    }

    const questions = shuffle(HISTORICAL_FLAGS).slice(0, numQuestions);

    // Kategoryzuj pytania wg kategorii
    const categories = [...new Set(HISTORICAL_FLAGS.map(f => f.category))].join(', ');

    const startEmbed = new EmbedBuilder()
      .setColor(0x8B4513)
      .setTitle('📜 Quiz Historyczny – START!')
      .setDescription(
        `Gra z historycznymi flagami rozpoczyna się za **3 sekundy**!\n\n` +
        `Pytania obejmują flagi państw i organizacji historycznych.\n` +
        `*Akceptujemy polskie i angielskie nazwy!*`
      )
      .addFields(
        { name: 'Liczba pytań', value: `${questions.length}`, inline: true },
        { name: 'Czas na odpowiedź', value: `${QUESTION_TIME}s`, inline: true },
        { name: 'Kategorie', value: categories, inline: false },
      )
      .setFooter({ text: `Gra historyczna rozpoczęta przez ${message.author.username}` })
      .setTimestamp();

    await message.channel.send({ embeds: [startEmbed] });
    await sleep(3000);

    const gameState = {
      type: 'historical',
      questions,
      currentIndex: 0,
      scores: {},
      active: true,
      channelId: message.channel.id,
    };
    client.activeGames.set(guildId, gameState);

    for (let i = 0; i < questions.length; i++) {
      if (!client.activeGames.has(guildId)) break;

      const flag = questions[i];
      gameState.currentIndex = i;

      const embed = buildHistoricalQuestionEmbed(flag, i + 1, questions.length, QUESTION_TIME);
      await message.channel.send({ embeds: [embed] });

      const startTime = Date.now();
      const winner = await waitForAnswer(message.channel, flag, QUESTION_TIME * 1000, gameState);

      if (!client.activeGames.has(guildId)) break;

      if (winner) {
        const elapsed = Date.now() - startTime;
        if (!gameState.scores[winner.id]) {
          gameState.scores[winner.id] = { correct: 0, totalTime: 0, username: winner.username };
        }
        gameState.scores[winner.id].correct++;
        gameState.scores[winner.id].totalTime += elapsed;

        const correctEmbed = buildCorrectEmbed(winner, flag, elapsed, i + 1, questions.length);
        await message.channel.send({ embeds: [correctEmbed] });
      } else {
        const timeoutEmbed = buildTimeoutEmbed(flag, i + 1, questions.length);
        await message.channel.send({ embeds: [timeoutEmbed] });
      }

      if (i < questions.length - 1) {
        await sleep(2500);
      }
    }

    client.activeGames.delete(guildId);
    const rankingEmbed = buildRankingEmbed(gameState.scores, 'historical', questions.length);
    await message.channel.send({ embeds: [rankingEmbed] });
  },
};

function waitForAnswer(channel, flag, timeoutMs) {
  return new Promise((resolve) => {
    const filter = (msg) => !msg.author.bot;
    const collector = channel.createMessageCollector({ filter, time: timeoutMs });

    let resolved = false;

    collector.on('collect', (msg) => {
      if (checkAnswer(msg.content, flag)) {
        resolved = true;
        collector.stop('correct');
        resolve(msg.author);
      }
    });

    collector.on('end', () => {
      if (!resolved) resolve(null);
    });
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

