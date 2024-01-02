const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('scrimpoll')
        .setDescription('macht den Standart scrimpoll für DGE'),

        async execute(interaction){
            await interaction.reply({ content: 'Succesfully asked for scrim! (Hope people show up)', ephemeral: true });
            await interaction.channel.send("<@&1191886949221408858> an welchen Wochentagen habt ihr nächste Woche Zeit? \n Wie immer, 20 - 22 Uhr")
        }
    
    }