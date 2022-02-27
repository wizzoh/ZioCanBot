const { MessageEmbed } = require('discord.js');

module.exports = async (message, client) => {

    //Distube events

    //playSong Event
    client.distube.on("playSong", (queue, song) => {
        var playEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle("**In Riproduzione**")
            .addFields(
                { name: 'Titolo: ', value: song.name },
                { name: 'Durata: ', value: song.formattedDuration},
                { name: 'Richiesta da: ', value: song.user }
            )

        queue.textChannel.send(playEmbed);
    });

    //addSong event
    client.distube.on("addSong", (queue, song) => {
        var addEmbed = new MessageEmbed()
            .setColor('LUMINOUS_VIVID_PINK')
            .setTitle("**Canzone Aggiunta!**")
            .addFields(
                { name: 'Titolo: ', value: song.name },
                { name: 'Durata: ', value: song.formattedDuration},
                { name: 'Richiesta da: ', value: song.user }
            )

        queue.textChannel.send(addEmbed);
    });

    //addList event
    client.distube.on("addList", (queue, playlist) => {
        var ListEmbed = new MessageEmbed()
            .setColor('FUCHSIA')
            .setTitle("**PlayList Aggiunta!**")
            .addFields(
                { name: 'Titolo: ', value: playlist.name },
                { name: 'Richiesta da: ', value: playlist.user }
            )
            .setImage(playlist.thumbnail)

        queue.textChannel.send(ListEmbed);
    });

    //empty event
    client.distube.on("empty", (queue) => {
        queue.textChannel.send("Vocale vuota? Allora sparisco uwu");
    });


    //NoResult event
    client.distube.on("searchNoResult", (message, query) => {
        message.channel.send(`Nessun risultato trovato per ${query}`)
    });

    /*disconnect event
    client.distube.on("disconnect", (queue) => {
        queue.textChannel.send("La ringrazio infinitamente di questo suo nobile gesto🛐");
    });

    //error event
    client.distube.on("error", (channel, error) => {
        var errEmbed = new MessageEmbed()
        .setColor("RED")
        .setTitle("**ERRORE**")
        .setDescription("Errore: " + error)

        message.channel.send(errEmbed);
    });

    //delqueue event
    client.distube.on("deleteQueue", (queue) => {
        
        queue.textChannel.send("Queue cancellata!");
    })
    */
}