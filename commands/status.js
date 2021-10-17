const { MessageActionRow, MessageButton } = require('discord.js')



module.exports = {
    name:'status',
    description:'help',
    permissions:[],
    aliases:['help'],

    async execute(client,message,cmd,args,Discord){
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel('Updates and Patches!')
            .setStyle('LINK')
            .setURL('https://docs.google.com/document/d/13je04JpYOrUFzuEwEsmSckNm91NIWbuLyvejvFETh9w/edit?usp=sharing')
        )

        const status_embed = new Discord.MessageEmbed()
        .setTitle('Pog Bot')
        .setColor('BLUE')
        .setDescription('For a list of commands, do $commands. Use the button to click on the Update and Patches link!')
        .setImage('https://cdn.discordapp.com/attachments/877348155681820702/896937219112181860/image0.png')

        await message.channel.send({ embeds: [status_embed], components: [row]});

        

    }
    
    
}