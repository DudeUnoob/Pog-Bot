
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => res.send("Pog Bot is Online!"));

app.listen(port, () => console.log(`Example app listening at http://local host:${port}`));


const Discord = require('discord.js');

const client = new Discord.Client({ intents: 32767 });



const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})


client.login('ODkzNTg4OTg0ODI2MDQ0NDQ2.YVdpmA.y9xreGf3S50noHLgdr-twSrNQ3A');