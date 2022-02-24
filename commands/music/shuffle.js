module.exports = {
    name: 'shuffle',
    description: 'music Command',

    async execute(message, args, cmd, client, Discord) {

        let queue = client.distube.getQueue(message.guild.id);
        if (!queue) {
            return message.reply("Non puoi attivare lo shuffle se non sto riproducendo nulla");
        }

        client.distube.shuffle(message);
    }
}