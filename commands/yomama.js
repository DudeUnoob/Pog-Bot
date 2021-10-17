const axios = require('axios');

module.exports = {
    name: 'yomama',
    description: 'yomama roast',
    permissions:[],
    async execute(client, message, args, Discord){
        const yomama = await axios.get('https://api.yomomma.info/');


        message.reply(yomama.data['joke']);
    }
}