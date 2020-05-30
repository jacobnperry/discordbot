
const Discord = require('discord.js');
const config = require('./config.json');
 const client = new Discord.Client();
 let boardGames = ['Gloomhaven', 'Scythe',];
 let max = 3;
 let min = 0;




client.on('message', message => {
if (!message.content.startsWith(config.prefix) || message.author.bot) return;

const args = message.content.slice(config.prefix.length).split(' ');
const command = args.shift().toLowerCase();

 if (command === 'edit') {
     message.channel.send(`What do you want to edit?`);
     //message.reply('What would you like to edit\n add players, Board Games, or Computer Games?');

 }
if (command === 'add') {

            message.reply(`Who would you like to add to the player list?`);

            players.push(message.content);
        }
if (command === 'gametator') {
        var number = Math.floor(Math.random() * (max - min) ) + min;
        var newGametator = players[number];
    message.reply(`This weeks's gametator is ${newGametator}`);

    }

if (command === 'players') {
    message.channel.send(`Who do you want to add?`);
}
}
)
;

client.login(config.token);