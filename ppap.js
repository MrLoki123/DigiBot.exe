const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

const prefix = "<";

client.on('message', message => {
	if(message.author.bot) return; 
	
  
  if (message.content.startsWith(prefix + "ding")) {
    message.channel.sendMessage('dong'); 
	}
  if (message.content.startsWith(prefix + "cris")) {
  	message.channel.sendMessage('fuck you!');
  }
  if (message.content.startsWith(prefix + "dirk")) {
  	message.channel.sendMessage('DORK!');
  }
});
client.login('');