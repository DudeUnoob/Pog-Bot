module.exports = {
    name: 'commands',
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#515FA7')
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
            
        )
        .setImage('https://media.wired.com/photos/5927340bf3e2356fd800bc15/master/w_2560%2Cc_limit/firewatch_150305_01.png')
        .setFooter('Feel free to use these commands! a lot more coming in the future - coded by @DudeUnoob :)');

        message.channel.send({ embeds: [newEmbed] })
    }

    
}