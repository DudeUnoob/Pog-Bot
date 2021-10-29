const Discord = module.require("discord.js");
const simplydjs = require("simply-djs")

module.exports = {
  name: "calculator",
  description: "calculates.",
  permissions:[],
   async execute (client, message,cmd, args, Discord){
    simplydjs.calculator(message, {
    embedColor: '#075FFF',
    })
  }
};
