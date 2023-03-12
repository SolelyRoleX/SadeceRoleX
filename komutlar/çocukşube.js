const Discord = require('discord.js');

const client = new Discord.Client();

exports.run = (client, message) => {

   message.channel.send('Alo Polis...').then(message => {

      var eiler = ['https://media.discordapp.net/attachments/1059500015359365201/1084515732802519133/images-37.jpg'];

      var espri = çocuk[Math.floor(Math.random() * espriler.length)];

            message.edit(`${espri}`);

 });

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Şube', 'Çocuk', 'ÇocukŞube', 'yapbi-espri'],

  permLevel: 0

};

exports.help = {

  name: 'şube',

  description: 'Çocuk Şube',

  usage: 'çocuk'

};