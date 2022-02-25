module.exports = {
    name: "message",
    async execute(message, client, Discord) {

        if (message.channel.type === "dm") return;
        const prefix = process.env.prefix;

        if (message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/\s+/);
        const cmd = args.shift().toLowerCase();
        const msg = message.content.toUpperCase();
        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));


        if (!message.content.startsWith(prefix) || message.author.bot) return;
        if (command) command.execute(message, args, cmd, client, Discord)
    }
}


/*
            var L = ["ehssi, sei proprio una L.", "no dai, per questa volta non sei L, nabbo.", "sai... tra noi due ci sta una L, ma non sono io •-•", "Sftu fucking noob take This L MF", "Smd ez L quit from life"];

            var messaggi = ["https://hanime.tv", "https://www.hentaiworld.eu/", "https://www.hentaisaturn.com/", "https://hentai2read.com/", "https://www.tsumino.com/", "https://www.hentaiworld.eu/search?keyword=pico", "https://hentai2read.com/375_seto_yuki/", "https://www.tsumino.com/entry/51340", "https://www.tsumino.com/entry/51129", "https://www.tsumino.com/entry/51014", "https://www.tsumino.com/entry/50715", "https://www.tsumino.com/entry/50453", "https://nhentai.to/g/357654", "https://nhentai.to/g/359146"];


            
            if (message.content.includes('sputtanare')) {
                return;
            } else if (message.content.includes('puttana')) {
                message.reply('...perchè ti nomini?');
            } else if (message.content.includes('Puttana')) {
                message.reply('...perchè ti nomini?');
            } else if (message.content === 'Dio') {
                message.channel.send('Porco');
            } else if (message.content === 'dio') {
                message.channel.send('Porco');
            } else if (message.content.startsWith('Buongiorno')) {
                message.reply('giorno L');
            } else if (message.content === 'Gesù') {
                message.channel.send('Cristo');
            } else if (message.content === 'gesù') {
                message.channel.send('Cristo');
            } else if (message.content === 'Porco') {
                message.channel.send('Dio');
            } else if (message.content === 'porco') {
                message.channel.send('Dio');
            } else if (message.content === 'L') {
                if (message.member.roles.cache.has('856533442904064001')) {
                    return;
                } else {
                    var random = Math.floor(Math.random() * L.length)
                    message.channel.send("aspe', sto calcolando.")
                        .then((message) => {
                            setTimeout(function () {
                                message.edit(`aspe', sto calcolando..`)
                                    .then((message) => {
                                        setTimeout(function () {
                                            message.edit(`aspe', sto calcolando..`)
                                                .then((message) => {
                                                    setTimeout(function () {
                                                        message.edit(`aspe', sto calcolando...`)
                                                            .then((message) => {
                                                                setTimeout(function () {
                                                                    message.edit(`${auto}, ${L[random]}`);
                                                                }, 1000)
                                                            });
                                                    }, 800)
                                                });
                                        }, 900)
                                    });
                            }, 1000)
                        });
                }
            }
            else if (message.content === 'hentai') {
                var random = Math.floor(Math.random() * messaggi.length)
                message.channel.send(`clicca qui:\n${messaggi[random]}`);
            } else if (message.content === 'Hentai') {
                var random = Math.floor(Math.random() * messaggi.length)
                message.channel.send(`clicca qui:\n${messaggi[random]}`);
            } else if (message.content.includes('clown')) {
                message.channel.send('POPI POPI');
            } else if (message.content.includes('Clown')) {
                message.channel.send('POPI POPI');
            } else if (message.content.includes('bot di merda')) {
                message.reply('ma bot di merda lo dici alle suore, non a noi bot, stronzo.');
            }
            */