module.exports = {
    name: 'commands',
    description: "Embeds!",
    aliases:['cmd','cmds'],
    permissions:[],
    execute(client, message,cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#69b0cf')
        .setTitle('Commands')
        .setURL('https://docs.google.com/document/d/13je04JpYOrUFzuEwEsmSckNm91NIWbuLyvejvFETh9w/edit?usp=sharing')
        .setDescription('List of Commands')
        .addFields(
            {name: 'command 1', value: '$ping'},
            {name: 'command 2', value: '$status'},
            {name: 'command 3', value: '$discord'},
            {name: 'command 4', value: '$image'},
            {name: 'command 5', value: '$quote'},
            {name: 'command 6', value: '$rps (rock, paper, or scissors)'},
            {name: 'command 7', value: '$yomama'},
            {name: 'command 8', value: '$meme'},
            {name: 'command 9', value: '$dog'},
            {name: 'command 10', value: '$8b'},
            {name: 'command 11', value: '$clear'},
            {name: 'command 12', value: '$kick and $ban'},
            {name: 'commands 13', value:'/ping, /server, /user'},
        )
        .setImage('https://cdn.discordapp.com/attachments/877348155681820702/896937219112181860/image0.png')
        .setFooter('Feel free to use these commands! a lot more coming in the future - coded by @DudeUnoob :). Credit to Air#0967 for making the');

        message.reply({ embeds: [newEmbed] })
    }

    
}