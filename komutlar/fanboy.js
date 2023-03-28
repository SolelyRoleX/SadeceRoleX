const Discord = require('discord.js');

exports.run = (client, message) => {

   message.channel.send('Sus Fanboy').then(message => {

      var fanboy = ['Nickinden fanboy olduğun belli. Bi kaynaktan hikayeyi birdaha okumanı tavsiye ederim 🙂'];

      var fanboy = fanboy[Math.floor(Math.random() * fanboy.length)];

            message.edit(`${fanboy}`);

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