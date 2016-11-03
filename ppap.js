const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  reply = message.content.toUpperCase();
  if (reply === 'DING') {
     message.reply('DONG') 
	};
});
client.login('');