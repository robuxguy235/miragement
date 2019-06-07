const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTg1NzAxMzc4MjU3NzE1MjA1.XPnc6Q._oxyLoKP58tRiILECLW7t3QKJZc');
