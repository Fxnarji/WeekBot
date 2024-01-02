const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./settings.js');
const fs = require('node:fs');
const path = require('node:path');
const CommandIndex = require("./commands/index.js");
const Servers = []

const commands = [];

for (const command of CommandIndex) {
    commands.push(command.data.toJSON())
}

console.log(commands)

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {

        for (const server of Servers) {
            console.log(`Started refreshing ${commands.length} application (/) commands for server ${server}`);

            const serverResult = await rest.put(
                Routes.applicationGuildCommands(clientId,server),
                { body: commands },
            );
            console.log(`Successfully reloaded ${serverResult.length} application (/) commands for server ${server}`);

        }

	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();