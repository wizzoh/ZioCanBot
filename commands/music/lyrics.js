const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: 'lyrics',
    aliases: ['testo'],
    description: 'music Command',

    async execute(message, args, cmd, client, Discord, artist, title) {
/*
        let queue = client.distube.getQueue(message.guild.id);
        let firstSong = queue.songs[0].name;
        let lyrics = await lyricsFinder(artist, title) || "Not Found!";
        if (!firstSong) {
            return message.reply("Non sto riproducendo nessuna canzone!");
        } else {
          message.channel.send(`${firstSong}`);
        }
        */
        
        let lyrics = await lyricsFinder(artist, title) || "Not Found!";
        console.log(lyrics);
        })("poets of fall", "carnival of rust");
    }
}
