module.exports = {
    name: 'status',
    description: 'The bot is in early development, try $commands to look for a list of commands',
    execute (client, message,args){
        message.channel.send('The bot is in early development, to look for a list of commands, use $commands - coded by @DudeUnoob https://docs.google.com/document/d/13je04JpYOrUFzuEwEsmSckNm91NIWbuLyvejvFETh9w/edit?usp=sharing');
    }
}