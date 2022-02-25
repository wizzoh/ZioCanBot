const { MessageEmbed} = require('discord.js');

module.exports = async (message, client, Discord) => {

    //Distube events

    //playSong Event
    client.distube.on("playSong", (queue, song) => {
        var playEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle("**IN RIPRODUZIONE")
        .addFields(
            { name: 'Titolo: ', value: song.name },
            {name: 'Richiesta da: ', value: message.author }
        )

        queue.textChannel.send(playEmbed);
    });

    //addSong event
    client.distube.on("addSong", (queue, song) => {
        var addEmbed = new MessageEmbed()
        .setColor('PURPLE')
        .setTitle("**Canzone Aggiunta!**")
        .addFields(
            { name: 'Titolo: ', value: song.name },
            {name: 'Richiesta da: ', value: message.author }
        )

        queue.textChannel.send(addEmbed);
    });

    //addList event
    client.distube.on("addList", (queue, playlist) => {
        var ListEmbed = new MessageEmbed()
        .setColor('PURPLE')
        .setTitle("**PlayList Aggiunta!**")
        .addFields(
            { name: 'Titolo: ', value: song.name },
            {name: 'Richiesta da: ', value: message.author }
        )

        queue.textChannel.send(ListEmbed);
    });

    //empty event
    client.distube.on("empty", (queue) => {
        queue.textChannel.send("Vocale vuota? Allora sparisco uwu");
    });
    
    /*
    client.distube.on("deleteQueue", (queue) => {
        queue.textChannel.send("Queue cancellata!");
    })
    */

    //disconnect event
    client.distube.on("disconnect", (queue) => {
        queue.textChannel.send("La ringrazio infinitamente di questo suo nobile gesto🛐");
    });

    //NoResult event
    client.distube.on("searchNoResult", (message, query) => {
        message.channel.send(`Nessun risultato trovato per ${query}`)
    });

    /*error event
    client.distube.on("error", (channel, error) => {
        var errEmbed = new MessageEmbed()
        .setColor("RED")
        .setTitle("**ERRORE**")
        .setDescription("Errore: " + error)

        message.channel.send(errEmbed);
    });
    */
}