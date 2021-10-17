const axios = require('axios');
const fetch = require('node-fetch');

module.exports = {
    name:'dog',
    description:'sends a cute dog picture',
    permissions:[],

    async execute(client,message,cmd,args,Discord) {
         
        let data = await fetch
        (`https://random.dog/woof.json?ref=apilist.fun${args.join(` `)}`).then(res => res.json())

        const embed = new Discord.MessageEmbed()
        embed.setTitle('Cute dog')
        embed.setColor('RANDOM')
        embed.setFooter('cute dog')
        embed.setImage(data.url)

        message.reply({embeds: [embed]});
     }

    
}


