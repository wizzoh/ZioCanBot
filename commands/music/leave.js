module.exports = {
    name: 'leave',
    aliases: ['lv', 'disconnect', 'dc'],
    description: 'music Command',

    async execute(message, args, cmd, client, Discord) {

        const voice = require('@discordjs/voice');
        const channel = voice.getVoiceConnection(`946053424686956584`);
        let queue = client.distube.getQueue(message.guild.id);
        if (!channel) {
            return message.reply('Ma non sono collegato a nessuna vocale...');
        } else {
            queue.delete();
            channel.disconnect();
        }

    }
}