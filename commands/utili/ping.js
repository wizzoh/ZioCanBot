module.exports = {
    name: 'ping',
    description: "view ping",
    async execute(message, args, cmd, client, Discord) {
        message.channel.send(`il tuo ping >>> ${Date.now()   -    message.createdTimestamp} ms`);
    }
}