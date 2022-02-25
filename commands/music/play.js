module.exports = {
    name: 'play',
    aliases: ['p'],
    description: "Play command",

    async execute(message, args, cmd, client, Discord) {

        const voiceChannel = message.member?.voice?.channel;
        let search = args.join(" ");
        if (!search) return message.channel.send("Devi inserire il titolo o il link della canzone!");
        if(voiceChannel) {
            client.distube.play(voiceChannel, search, {
                message,
                textChannel: message.channel,
                member: message.member,
            })
        } else {
            message.channel.send("Devi prima entrare in un canale vocale, coglione!");
        }
    }
}