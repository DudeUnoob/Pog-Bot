const Discord = module.require("discord.js");
const { Snake } = require("discord-gamecord")

module.exports = {
  name: "snake",
  description: "snake in discord!",
  permissions: [],
  async execute (client, message, cmd, args, Discord){
          new Snake({
        message: message,
        embed: {
        title: 'Snake Game',
        color: '#5865F2',
        OverTitle: "Game Over",
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: 'You are not allowed to use buttons for this message!',
      }).startGame();
  }
};