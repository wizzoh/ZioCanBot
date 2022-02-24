const Discord = require('discord.js');
const { Intents, MessageAttachment, MessageEmbed } = Discord;
const config = require('./config.json');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const message = require ('./events/Message/message');
const { default: DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.distube = new DisTube(client, {

    emitNewSongOnly: false,
    leaveOnEmpty: true,
    emptyCooldown: 5,
    leaveOnFinish: false,
    leaveOnStop: false,
    savePreviousSongs: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    searchSongs: 0,
    youtubeDL: false,
    plugins: [new SpotifyPlugin()],

});

require("./musicEvents")(message, client);

/*
client.distube.on("playSong", (queue, song) => {
    queue.textChannel.send(`Stai ascoltando **${song.name}**`);
});
*/

client.login(config.token);