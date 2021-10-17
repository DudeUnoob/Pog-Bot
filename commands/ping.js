module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    permissions:[],
    execute(client, message, args){
        message.reply('pogster!');
    }
}