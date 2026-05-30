// ============================================================
//  KOMENDA !pomoc / !help
// ============================================================

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'pomoc',
  aliases: ['help', 'komendy'],
  description: 'Pokazuje listę dostępnych komend',

  async execute(message) {
    const embed = new EmbedBuilder()
      .setColor(0x9b59b6)
      .setTitle('🏳️ FlagBot – Pomoc')
      .setDescription('Quiz z flagami krajów i historycznych państw!')
      .addFields(
        {
          name: '🚩 `!flagi [liczba] [region]`',
          value:
            'Rozpocznij quiz z flagami współczesnych krajów.\n' +
            '**Regiony:** `europa` `azja` `ameryka` `ameryka_poludniowa` `oceania`\n' +
            '**Przykłady:**\n' +
            '`!flagi` – 10 pytań, wszystkie regiony\n' +
            '`!flagi 15` – 15 pytań, wszystkie\n' +
            '`!flagi europa` – tylko Europa\n' +
            '`!flagi 20 azja` – 20 pytań z Azji',
          inline: false,
        },
        {
          name: '📜 `!flagihistoria [liczba]`',
          value:
            'Quiz z historycznymi flagami!\n' +
            'Obejmuje: III Rzeszę, ZSRR, Austro-Węgry, Cesarską Japonię, PRL i wiele więcej.\n' +
            '**Przykład:** `!flagihistoria 10`',
          inline: false,
        },
        {
          name: '🛑 `!stop`',
          value: 'Zatrzymuje aktywną grę na tym serwerze.',
          inline: false,
        },
        {
          name: '❓ `!pomoc`',
          value: 'Pokazuje tę wiadomość.',
          inline: false,
        },
        {
          name: '📊 Jak działa scoring?',
          value:
            '• Za każdą odgadniętą flagę dostajesz punkt\n' +
            '• Remisy rozstrzygane są przez **czas odgadnięcia** (szybciej = wyżej)\n' +
            '• Na końcu gry bot automatycznie wyświetla **ranking**',
          inline: false,
        },
        {
          name: '🌍 Dostępne regiony',
          value: 'Europa • Azja • Ameryka Północna • Ameryka Południowa • Oceania',
          inline: false,
        },
      )
      .addFields(
        {
          name: '🛠️ Twórca',
          value: 'Bot stworzony przez **xRealFitrex** dla serwera **Zjednoczeni Ideą**',
          inline: false,
        }
      )
      .setFooter({ text: 'Prefix: ! | Możesz używać nazw po polsku lub angielsku! | xRealFitrex × Zjednoczeni Ideą' })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });
  },
};

