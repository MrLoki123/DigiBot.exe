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
  if (message.content.startsWith(prefix + "anime")) {
  	message.channel.sendMessage('https://orig07.deviantart.net/1559/f/2011/362/a/a/berserk_wallpaper_1920_x_1080p_by_edd000-d4kkg2b.jpg');
  }
});
client.login('');