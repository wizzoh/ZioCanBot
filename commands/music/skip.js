module.exports = {
    name: 'skip',
    description: 'music Command',

    async execute(message, args, cmd, client, Discord) {

        let queue = client.distube.getQueue(message.guild.id);
        if (!queue) {
            return message.reply("Non c'è nulla da skippare!");
        }
        
        queue.skip()
        message.channel.send(`Canzone skippata! (by ${message.author})`);
    }
}