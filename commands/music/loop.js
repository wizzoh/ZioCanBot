module.exports = {
    name: 'loop',
    description: 'music Command',

    async execute(message, args, cmd, client, Discord) {

        const mode = client.distube.setRepeatMode(message);

        message.channel.send(
            `Repeat mode settato in \`${
                mode
                    ? mode === 2
                        ? 'All Queue'
                        : 'Questa Canzone'
                    : 'Spento'
            }\``,
        )
    }
}