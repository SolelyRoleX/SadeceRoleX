const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Yükleniyor...').then(message => {
      var sahi = [':crown: Efendimiz, RoleX#251 :tophat: '];
      var sahib = sahi;
            message.edit(`${sahib}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahib', 'creatör', 'sahib-kim', 'creatör-kim'],
  permLevel: 0
  };

exports.help = {
  name: 'sahibin-kim',
  description: 'Bot Sahibini Söyler.',
  usage: 'sahib'
};