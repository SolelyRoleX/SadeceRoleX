const Discord = require('discord.js');

exports.run = (client, message) => {

   message.channel.send('max aatrox ').then(message => {

      var aatrox = ['20 metrelik🤤 kılıcı⚔️ 80💪 metrelik💅 adama🐻‍❄️ saplamak😫😳 ne💣 kadar👺 zor 👣 olabilir💣ki🙉aq🙁'];

      var espri = aatrox[Math.floor(Math.random() * aatrox.length)];

            message.edit(`${espri}`);

 });

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['aatrox','Aatrox', 'LordAatrox','lordaatrox'],

  permLevel: 0

};

exports.help = {

  name: 'Aatrox',

  description: 'Lord Aatrox',

  usage: 'Aatrox'

};