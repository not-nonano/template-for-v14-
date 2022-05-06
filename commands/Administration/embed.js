const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('send an embed messages to a channel'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};