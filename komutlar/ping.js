const Discord = require('discord.js');

exports.run = function(client, message, args) {

  message.reply('Pingim = **' + 31 + '** ms');

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'ping',

  description: 'Botun pingini gösterir.',

  usage: 'ping'

};