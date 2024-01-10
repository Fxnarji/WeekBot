const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("replies with Pong!"),
    async execute(interaction){
        await interaction.channel.send("Pong")
        await interaction.reply({ content: 'Succesfully pinged!', ephemeral: true });

    }

}