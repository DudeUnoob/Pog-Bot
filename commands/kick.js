module.exports = {
    name:'kick',
    description:'Ban\'s a member',
    permissions:["KICK_MEMEBERS"],
    execute(client,message,args,cmd,Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }
        else{
            message.channel.send('You couldn\'t kick that member');
        }
      
    }
}