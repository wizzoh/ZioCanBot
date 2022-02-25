const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['coda', 'list'],
    description: 'music Command',

    async execute(message, args, cmd, client, Discord) {

        const queue = client.distube.getQueue(message);
        if (!queue) return message.reply("Nessuna queue trovata in questo server!");
        var queueEmbed = new MessageEmbed()
            .setColor("PINK")
            .setTitle("**Lista delle canzoni**")
            .setDescription(queue.songs.map((song, id) =>
                `**${id + 1}**. [${song.name}] - \`${song.formattedDuration}\``).join("\n"))

        message.channel.send(queueEmbed);
    }
}

/*message.channel.send('Ecco a te:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. [${song.name}] - \`${song.formattedDuration}\``
        ).join("\n"));
        */