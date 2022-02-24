const config = require('../../config.json');

module.exports = {
    name: 'ping',
    description: "view ping",
    async execute(message, args, cmd, client, Discord) {
        message.channel.send(`il tuo ping è di ${Date.now()   -    message.createdTimestamp} ms`);
    }
}