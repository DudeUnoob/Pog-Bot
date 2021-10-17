const fetch = require('node-fetch')

   module.exports = {
       name:'meme',
       description:'meme random',
       permissions:[],

      async execute(client,message,cmd,args,Discord) {
         
          let data = await fetch
         (`https://meme-api.herokuapp.com/gimme/${args.join(` `)}`).then(res => res.json())

         const embed = new Discord.MessageEmbed()
         embed.setTitle(data.title)
         embed.setURL(data.postLink)
         embed.setColor('RANDOM')
         embed.setAuthor('u/' + data.author)
         embed.setFooter('Upvotes: ' + data.ups)
         embed.setImage(data.url)
          message.reply({embeds: [embed]});
       }
   }