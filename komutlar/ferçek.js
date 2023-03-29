const Discord = require('discord.js');

exports.run = (client, message) => {

   message.channel.send('https://media.discordapp.net/attachments/983100451522228305/1070440059330891868/image-1.png').then(message => {

      var fanboy = ['https://media.discordapp.net/attachments/983100451522228305/1070440059330891868/image-1.png'];

      var ferçek = ferçek[Math.floor(Math.random() * ferçek.length)];

            message.edit(`${ferçek}`);

 });

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['ferçek', 'Ferçek'],

  kategori: 'Eğlence'

};

exports.help = {

  name: 'ferçek',

  description: 'Ferçek listeyi atar.',

  usage: 'ferçek'

};