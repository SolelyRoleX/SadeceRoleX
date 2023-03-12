const Discord = require('discord.js');

const client = new Discord.Client();

exports.run = (client, message) => {

   message.channel.send('mordekaiser..').then(message => {

      var espriler = ['https://media.discordapp.net/attachments/1004784798541283348/1084524300586991726/lv_0_20230312200957.mp4'];

      var espri = espriler[Math.floor(Math.random() * espriler.length)];

            message.edit(`${espri}`);

 });

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['morde', 'fosil', 'maxfosil'],

  permLevel: 0

};

exports.help = {

  name: 'espri',

  description: 'Espri yapar.',

  usage: 'espri'

};