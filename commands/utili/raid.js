module.exports = {
    name: "raid",
    description: "raid command",

    async execute(message, args, cmd, client, Discord) {
        target = message.mentions.members.first();

        if (!target) {
            return message.reply(`Utilizza ${config.prefix}raid @utente.`);
        } else {
            for (var i = 0; i < 30; i++) {
                message.channel.send(`${target} sei un coglione`);
            }
        }
    }
}


/*
const config = require('../../config.json');

module.exports = {
    name: "raid",
    description: "raid's command",

    async execute(message, args, cmd, client, Discord) {
        autore = message.author;
        taggedUser = message.mentions.members.first();
        const Lucs = '496030697719463947';

        if (!message.mentions.users.size) {
            return message.reply({content: "si ma menzionami la persona a cui rompere il cazzo.", ephemeres: true});
        } else if (taggedUser == Lucs) {
            if (!message.member.roles.cache.has('856533442904064001')) {
            message.channel.send("Mi dispiace ma questo tizio è troppo potente per me :c");
            }
        } else {
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`${taggedUser}`);
            message.channel.send(`scusa il disturbo ${taggedUser} ma ${autore} voleva chiederti se gli mandi i tuoi nudes.`);
        }
    }
}
*/