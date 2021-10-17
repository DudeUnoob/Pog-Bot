module.exports = {
    name:'ban',
    description:'Ban\'s a member',
    permissions:["BAN_MEMBERS"],
    execute(client,message,args,cmd,Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }
        else{
            message.channel.send('You couldn\'t ban that member');
        }
      
    }
}