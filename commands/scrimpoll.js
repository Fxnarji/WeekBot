const { SlashCommandBuilder, ReactionCollector } = require("discord.js");
const reactWeekdays = require("../common/reactWeekdays");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('scrimpoll')
        .setDescription('macht den Standart scrimpoll für DGE'),

    async execute(interaction) {
        await interaction.deferReply({ephemeral:true})
        await reactWeekdays("<@&1191886949221408858> an welchen Wochentagen habt ihr nächste Woche Zeit? \n Wie immer, 20 - 22 Uhr", interaction.channel)
        await interaction.followUp({ content: 'Succesfully asked for DGE scrim! (Hope people show up)', ephemeral: true });
    }

}