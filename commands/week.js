const { SlashCommandBuilder } = require("discord.js");
const reactWeekdays = require("../common/reactWeekdays");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('week')
        .setDescription('ask for when anyone has time')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('Type your message here')
                .setRequired(true)
        ),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        const text = interaction.options.getString('text');
        await reactWeekdays(text, interaction.channel)
        await interaction.followUp({ content: 'Poll created, enjoy!', ephemeral: true });
    }

}