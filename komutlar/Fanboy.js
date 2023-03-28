const Discord = require('discord.js');

exports.run = (client, message) => {

   message.channel.send('Sus Fanboy').then(message => {

      var espriler = ['Nickinden fanboy olduğun belli. Bi kaynaktan hikayeyi birdaha okumanı tavsiye ederim 🙂'];

      var espri = espriler[Math.floor(Math.random() * espriler.length)];

            message.edit(`${espri}`);

 });

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['fanboy', 'Fanboy'],

  permLevel: 0

};

exports.help = {

  name: 'Fanboy',

  description: 'Fanboylara Cevap.',

  usage: 'Fanboy'

};