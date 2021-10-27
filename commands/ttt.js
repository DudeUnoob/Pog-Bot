const Discord = module.require("discord.js");
const simplydjs = require("simply-djs")

module.exports = {
  name: "ttt",
  description: "Tic Tac Toe in discord!",
  permissions:[],
  async execute (client, message, cmd, args, Discord){
    simplydjs.tictactoe(message)
  }
};