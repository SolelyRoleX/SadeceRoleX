exports.run = async (client, msg, args) => {
  let fal=["Nickinden fanboy olduğun belli. Bi kaynaktan hikayeyi birdaha okumanı tavsiye ederim 🙂"]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (' :no_entry_sign: Kimin Falına Bakacağımı Söylemelisin! Örnek Kullanım: `.fal <@kişi>`')
}});
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${fal[Math.floor(Math.random() * 16)]}.`)
  }})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
 };
 