const Discord = require('discord.js');

exports.run = (client, message) => {

   message.channel.send('Ara').then(message => {

      var fanboy = ['Başın Sıkışırsa Ara: https://media.discordapp.net/attachments/983100451522228305/1091017801164128306/image0.jpg'];

      var Goodman = fanboy[Math.floor(Math.random() * Goodman.length)];

            message.edit(`${Goodman}`);

 });

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['ara', 'goodman'],

  kategori: 'Eğlence'

};

exports.help = {

  name: 'Goodman',

  description: 'Başın sıkışırsa ara',

  usage: 'Goodman'

};