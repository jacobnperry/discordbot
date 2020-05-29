
const Discord = require('discord.js');
 const client = new Discord.Client();
 let players = ['Jacob ', 'Val', 'Chris'];
 let boardGames = ['Gloomhaven', 'Scythe',]

client.on('ready', () => {
 console.log(`${client.user.tag}! has come to life!`);
 });

client.on('message', msg => {
 if (msg.content === '!edit') {
     console.log('What would you like to edit');
     console.log('Players','Board Games','Computer Games')
 msg.reply('pong');
 }
 });

client.login('NzE1MzQ3Njc0NTY3NjcxODU5.XtA7OQ.Bz1t9oeMR2qj7Lgvxc17ZD3rlIQ');