const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client

client.on('ready', () => {
  client.user.setPresence({
    game: {
      name: 'faraz fail at code',
      type: 3
    }
  });
  console.log(`Turned on bot ${client.user.tag}!`);
});

client.on('message', msg => {
      if (msg.content === '~ping') {
        msg.reply('Pong!');
      if (msg.content === '~request') {
        msg.reply('ALL REQUESTS: http://bit.ly/2IVURaA');
        }
      };

      client.login('dont try to steal my token', );
    },)