const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('scrimpoll')
        .setDescription('macht den Standart scrimpoll für DGE'),

        async execute(interaction){
            await interaction.reply("@DGEternal an welchen Wochentagen habt ihr nächste Woche Zeit? \n Wie immer, 20 - 22 Uhr")
        }
    
    }