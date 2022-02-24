module.exports = {
    name: 'delete-queue',
    aliases: ['dq'],
    description: 'music Command',

    async execute(message, args, cmd, client, Discord) {

        let queue = client.distube.getQueue(message.guild.id);
        if (!queue) return message.reply("Nessuna queue da cancellare!");
        queue.delete();
        message.react('✅');
    }
}