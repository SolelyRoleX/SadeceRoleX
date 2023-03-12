const Discord = require('discord.js');

const client = new Discord.Client();

exports.run = (client, message) => {

   message.channel.send('L adam Geliyor...').then(message => {

      var espriler = ['20 metrelik🤤 kılıcı⚔️ 80💪 metrelik💅 ayıya🐻‍❄️ saplamak😫😳 çok💣 zor👺 olmasa 👣 gerek💣🙉🙁'];

      var espri = espriler[Math.floor(Math.random() * espriler.length)];

            message.edit(`${espri}`);

 });

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Ladam', 'lordaatrox', 'LAatrox', 'yapbi-espri'],

  permLevel: 0

};

exports.help = {

  name: 'espri',

  description: 'Espri yapar.',

  usage: 'espri'

};