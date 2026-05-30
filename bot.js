const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

client.commands = new Collection();
client.activeGames = new Map(); // guildId -> game state

// Load commands
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  if (command.name) {
    client.commands.set(command.name, command);
    if (command.aliases) {
      command.aliases.forEach(alias => client.commands.set(alias, command));
    }
  }
}

const PREFIX = process.env.PREFIX || '!';

client.once('ready', () => {
  console.log(`✅ Bot uruchomiony jako ${client.user.tag}`);
  client.user.setActivity('!flagi | !flagihistoria | !pomoc', { type: 'PLAYING' });
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    await command.execute(message, args, client);
  } catch (err) {
    console.error(`Błąd komendy ${commandName}:`, err);
    await message.reply('❌ Wystąpił błąd podczas wykonywania komendy!');
  }
});

client.login(process.env.DISCORD_TOKEN);

