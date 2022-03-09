module.exports = {
    name: 'lyrics',
    aliases: ['testo],
    description: 'music Command',

    async execute(message, args, cmd, client, Discord) {

        let queue = client.distube.getQueue(message.guild.id);
        let firstSong = queue.songs[0];
        if (!firstSong) {
            return message.reply("Non sto riproducendo nessuna canzone!");
        } else {
          message.channel.send(`${firstSong}`);
    }
}
