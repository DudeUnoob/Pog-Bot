const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'website',
    description: "A link to the Website",
    permissions:[],
    async execute (client, message,cmd, args, Discord){
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel('Pog Bot Website')
            .setStyle('LINK')
            .setURL('https://pog-bot-website.dudeunoob.repl.co/')
        
        )
        const status_embed = new Discord.MessageEmbed()
        .setTitle('Pog Bot - Website')
        .setColor('BLUE')
        .setDescription('Check out the Website')
        //.setImage('https://cdn.discordapp.com/attachments/877348155681820702/896937219112181860/image0.png')

        await message.channel.send({ embeds: [status_embed], components: [row]});
    }
}