const Discord = require("discord.js");
const { token } = require("./settings");

const client = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]})

client.once(Discord.Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token)