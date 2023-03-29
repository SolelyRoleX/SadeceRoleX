const Discord = require("discord.js");

module.exports = {

    async(client, message, args) =>{

        const ping = new Discord.MessageEmbed()

        .setColor("RANDOM")

        .setTitle(' `Ping Değerlerim;`')

        .setDescription(`

        <:DiscordLogoPng:939293787828654131> Botun Pingi: ${client.ws.ping} ms`)

        return message.reply({embeds: [ping]})

    },

    name: "ping",

    description: "Ping",

    aliases: ["gecikme"],

    kategori: "bot",

    usage: "",

}