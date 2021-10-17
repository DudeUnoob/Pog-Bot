const axios = require('axios');

 module.exports = {
      name: 'quote',
      description: 'A random quote',
      permissions:[],
      async execute(client, message,args, Discord){
        const quote = await axios.get('https://zenquotes.io/api/random');
        
        
        
        message.reply(quote.data[0]['q'] + ' - ' + quote.data[0]['a']);


      }
  }