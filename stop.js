// ============================================================
//  KOMENDA !stop – zatrzymuje aktywną grę
// ============================================================

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'stop',
  aliases: ['zatrzymaj', 'endgame'],
  description: 'Zatrzymuje aktywną grę quizową',

  async execute(message, args, client) {
    const guildId = message.guild.id;

    if (!client.activeGames.has(guildId)) {
      return message.reply('❌ Brak aktywnej gry na tym serwerze!');
    }

    client.activeGames.delete(guildId);

    const embed = new EmbedBuilder()
      .setColor(0xe74c3c)
      .setTitle('🛑 Gra zatrzymana')
      .setDescription(`Gra została zatrzymana przez **${message.author.username}**.`)
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });
  },
};

