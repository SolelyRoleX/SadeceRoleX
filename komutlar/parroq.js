const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send('İstiklal Marşı Yükleniyor.').then(message => {
      var espriler = ['parroqtur.'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['en-büyük-orospu', 'en-oç', 'en-orospu', 'en-göt-veren'],
  permLevel: 0
};

exports.help = {
  name: 'istiklal-marşı',
  description: 'İstiklal Marşı Atar',
  usage: 'istiklal'
};