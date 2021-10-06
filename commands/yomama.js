const axios = require('axios');

module.exports = {
    name: 'yomama',
    description: 'yomama roast',
    async execute(client, message, args, Discord){
        const yomama = await axios.get('https://api.yomomma.info/');


        message.channel.send(yomama.data['joke']);
    }
}