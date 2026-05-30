// ============================================================
//  GAME MANAGER – logika gry
// ============================================================

const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const { shuffle } = require('../data/countries');

const QUESTION_TIME = 30; // sekund na odpowiedź
const QUESTIONS_PER_GAME = 10; // domyślna liczba pytań

// Normalizuje tekst do porównywania
function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // usuń znaki diakrytyczne
    .replace(/[^a-z0-9 ]/g, '')
    .trim();
}

// Sprawdza czy odpowiedź jest poprawna
function checkAnswer(userAnswer, country) {
  const normalized = normalize(userAnswer);
  return country.answers.some(ans => normalize(ans) === normalized);
}

// Buduje embed dla pytania (flaga emoji – współczesne)
function buildModernQuestionEmbed(country, questionNum, total, timeLeft) {
  const regions = {
    'Europa': '🌍',
    'Azja': '🌏',
    'Ameryka Północna': '🌎',
    'Ameryka Południowa': '🌎',
    'Oceania': '🌊',
  };
  const emoji = regions[country.region] || '🌐';

  return new EmbedBuilder()
    .setColor(0x3498db)
    .setTitle(`🚩 Pytanie ${questionNum}/${total}`)
    .setDescription(`## ${country.flag}\n\n**Jakiego kraju jest to flaga?**\n\n*Masz **${timeLeft} sekund** na odpowiedź!*`)
    .addFields({ name: 'Region', value: `${emoji} ${country.region}`, inline: true })
    .setFooter({ text: 'Wpisz odpowiedź po polsku lub angielsku!' })
    .setTimestamp();
}

// Buduje embed dla pytania (historyczne – obraz URL)
function buildHistoricalQuestionEmbed(flag, questionNum, total, timeLeft) {
  return new EmbedBuilder()
    .setColor(0x8B4513)
    .setTitle(`📜 Pytanie Historyczne ${questionNum}/${total}`)
    .setDescription(`**Jakiego państwa/organizacji jest to flaga?**\n\n*Masz **${timeLeft} sekund** na odpowiedź!*`)
    .setImage(flag.flagUrl)
    .addFields(
      { name: 'Podpowiedź', value: flag.hint, inline: true },
      { name: 'Okres', value: flag.period, inline: true }
    )
    .setFooter({ text: 'Wpisz odpowiedź! Akceptujemy polskie i angielskie nazwy.' })
    .setTimestamp();
}

// Buduje embed wyniku (trafienie)
function buildCorrectEmbed(player, country, timeMs, questionNum, total) {
  const timeStr = (timeMs / 1000).toFixed(2);
  return new EmbedBuilder()
    .setColor(0x2ecc71)
    .setTitle('✅ Odgadnięto!')
    .setDescription(`**${player.username}** odgadł(a) w **${timeStr}s**!\n\n🏳️ Odpowiedź: **${country.name || country.displayName}**`)
    .setThumbnail(player.displayAvatarURL())
    .setFooter({ text: `Pytanie ${questionNum}/${total}` });
}

// Buduje embed – nikt nie odgadł
function buildTimeoutEmbed(country, questionNum, total) {
  const displayName = country.name || country.displayName;
  const flag = country.flag || '';
  return new EmbedBuilder()
    .setColor(0xe74c3c)
    .setTitle('⏱️ Czas minął!')
    .setDescription(`Nikt nie odgadł!\n\n🏳️ Prawidłowa odpowiedź: **${flag} ${displayName}**${country.period ? `\n📅 Okres: ${country.period}` : ''}`)
    .setFooter({ text: `Pytanie ${questionNum}/${total}` });
}

// Buduje embed rankingu końcowego
function buildRankingEmbed(scores, gameType, totalQuestions) {
  const sorted = Object.entries(scores)
    .sort(([, a], [, b]) => {
      if (b.correct !== a.correct) return b.correct - a.correct;
      return a.totalTime - b.totalTime;
    });

  const medals = ['🥇', '🥈', '🥉'];
  let desc = '';

  if (sorted.length === 0) {
    desc = '*Nikt nie zdobył żadnych punktów!*';
  } else {
    sorted.forEach(([userId, data], i) => {
      const medal = medals[i] || `**${i + 1}.**`;
      const avgTime = data.correct > 0 ? (data.totalTime / data.correct / 1000).toFixed(2) : '-';
      desc += `${medal} <@${userId}> — **${data.correct}** odgadnięte`;
      if (data.correct > 0) desc += ` (śr. ${avgTime}s)`;
      desc += '\n';
    });
  }

  const typeLabel = gameType === 'historical' ? '📜 Historycznych Flag' : '🚩 Flag Krajów';
  return new EmbedBuilder()
    .setColor(0xf39c12)
    .setTitle(`🏆 Wyniki gry – ${typeLabel}`)
    .setDescription(desc)
    .addFields({ name: 'Liczba pytań', value: `${totalQuestions}`, inline: true })
    .setFooter({ text: 'Dziękujemy za grę!' })
    .setTimestamp();
}

module.exports = {
  normalize,
  checkAnswer,
  buildModernQuestionEmbed,
  buildHistoricalQuestionEmbed,
  buildCorrectEmbed,
  buildTimeoutEmbed,
  buildRankingEmbed,
  QUESTION_TIME,
  QUESTIONS_PER_GAME,
};

