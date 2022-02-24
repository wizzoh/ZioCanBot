module.exports = {
    name: 'stop',
    aliases: ['pause'],
    description: 'music Command',

    async execute(message, args, cmd, client, Discord) {

        let queue = client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply("Non c'è niente da stoppare qui");
        client.distube.stop(message);
        message.react('✅');
    }
}