const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'discord',
    description: "A link to my discord server coded by @DudeUnoob",
    permissions:[],
    async execute (client, message,cmd, args, Discord){
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel('Discord Server')
            .setStyle('LINK')
            .setURL('https://discord.gg/PEC37pKSRn')
        
        )
        const status_embed = new Discord.MessageEmbed()
        .setTitle('Pog Bot')
        .setColor('BLUE')
        .setDescription('Join the Discord server!')
        .setImage('https://cdn.discordapp.com/attachments/877348155681820702/896937219112181860/image0.png')

        await message.channel.send({ embeds: [status_embed], components: [row]});
    }
}