const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("replies with Pong!"),
    async execute(interaction){
        await interaction.channel.send("Peng! <@&1191886949221408858>")
    }

}