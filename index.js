const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("MTE0MjQ1MjMyNDMyMTczNDg1Ng.GYrFhy.6KfqdZ6l7i2hykULk40Qz7wCQz3AVwOvhP0EBA")

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "/youtube") {
        message.channel.send("iscriviti si yt" + message.author.toString())
    }

    if (message.content == "/embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Anthe sclero mode")
            .setDescription(`Anthe ha detto dio porco`)
            .setThumbnail("https://www.nonsprecare.it/wp-content/uploads/2017/03/come-parlano-alberi-significato-simbolico-1.jpg")

        message.channel.send({ embeds: [embed] })
    }
})

var embed = new Discord.MessageEmbed()

client.on("message", (message) => {
    if (message.content == "/comando") {
        message.channel.send()
    }
})

client.on("messageCreate", message => {
    if (message.content == "/ciao") {
        let embed = new Discord.MessageEmbed()
            .setTitle("Ciao");
        let button1 = new Discord.MessageButton()
            .setLabel("Cliccami")
            .setStyle("SUCCESS")
            .setCustomId(`clickButton1,${message.author.id}`);

        let row = new Discord.MessageActionRow()
            .addComponents(button1);
        
        message.channel.send({ embeds: [embed], components: [row] });
    }

    if (message.content == "/help") {
        let embed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription("Seleziona la pagina con il menu qua sotto");

        let select = new Discord.MessageSelectMenu()
    .setCustomId("menuHelp")
    .setPlaceholder("Seleziona una pagina")
    .setMinValues(1)
    .setMaxValues(1)
    .addOptions([
        {
            label: "Pagina1",
            description: "Vai alla pagina numero 1",
            value: "pagina1"
        },
        {
            label: "Pagina2",
            description: "Vai alla pagina numero 2",
            value: "pagina2"
        },
        {
            label: "Pagina3",
            description: "Vai alla pagina numero 3",
            value: "pagina3"
        }
    ]);


        let row = new Discord.MessageActionRow()
            .addComponents(select);

        message.channel.send({ embeds: [embed], components: [row] });
    }
});

client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId.startsWith("clickButton1")) {
        let idUtente = interaction.customId.split(",")[1]
        if (interaction.user.id != idUtente) return interaction.reply({ content: "Questo bottone non è tuo" , ephemeral: true})
        interaction.deferUpdate();
        client.channels.cache.get("1130797032014090261").send("Ciao");
    }
});

client.on("interactionCreate", interaction =>{
    if (!interaction.isSelectMenu()) return

    if (interaction.customId == "menuHelp"){
        interaction.deferUpdate()

        switch(interaction.values[0]) {
            case "pagina1": {
                let embed = new Discord.MessageEmbed()
                    .setTitle("Pagina 1")

                interaction.message.edit({ embeds: [embed] })
            } break
            case "pagina2": {
                let embed = new Discord.MessageEmbed()
                .setTitle("Pagina 2")

                interaction.message.edit({ embeds: [embed] })
            } break
            case "pagina3": {
                let embed = new Discord.MessageEmbed()
                .setTitle("Pagina 3")

                interaction.message.edit({ embeds: [embed] })
            } break
        }
    }
})