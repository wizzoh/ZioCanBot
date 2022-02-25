const luzzy = "<@536158714252754965>";
const diego = "<@942047547558625290>";
const sun = "<@940695333229445222>";
const wizz = "<@294818774123544576>";
const giansa = "<@403937936313155594>";

var mess = [`${luzzy}`, `${diego}`, `${sun}`, `${wizz}`, `${giansa}`];

module.exports = {
    name: "ready",
    async execute(message, client) {

        console.log('Bot online');
        client.user.setActivity('video porno di sacco', { type: 'WATCHING', status: 'idle' });
        
        var random = Math.floor(Math.random() * mess.length);
        const canale = client.channels.cache.get("946075082994888704");
        await canale.send(`Perfetto! Sono qui solo per rompere il cazzo a ${mess[random]}`);
    }
}