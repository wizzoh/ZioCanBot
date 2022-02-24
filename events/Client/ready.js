module.exports = {
    name: "ready",
    async execute(client, message) {
        console.log('Bot online');
        client.user.setActivity('video porno di sacco', { type: 'WATCHING', status: 'idle' });
    }
}