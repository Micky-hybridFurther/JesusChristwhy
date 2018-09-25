const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const { Client, Attachment } = require('discord.js');
const client = new Client();
const fs = require('fs');

require('http').createServer().listen(3000)

client.on('ready', () => {
    console.log("I'm ready!");
})

client.on('message', message => {
  if (message.content === ">thass gay") {
    const attachment = new Attachment('https://78.media.tumblr.com/3a6be712212ba73401428d195eb09915/tumblr_o1wjdhiYaC1r9ee9go1_1280.png');
    message.channel.send(`${message.author}, Some true good shit.`, attachment);
}
});
    

client.login('NDg3MjUzMzczOTU2MTI4NzY5.DnL_KA.7YgUaPrEbG49gvD1K-fosyI7nJE');

const TOKEN = "NDg3MjUzMzczOTU2MTI4NzY5.DnK9oQ.ArxQNxoIEtJaQzqjVjQ7Qbsl3Uc";

var bot = new Discord.Client();

bot.on("ready", function() {
   console.log("Online!");
   bot.user.setActivity("Slapping Giulia across the face");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

if (cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot information:")
    .setColor("#18D1FA")
    .setThumbnail(bicon)
    .addField("Bot name:", bot.user.username)
    .addField("Created on:", bot.user.createdAt);

    return message.channel.send(botembed);
}

    if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.displayAvatarURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server information:")
        .setColor("#28FD75")
        .setThumbnail(sicon)
        .addField("Server name", message.guild.name)
        .addField("Created on", message.guild.createdAt)
        .addField("Total members", message.guild.memberCount);

        return message.channel.send(serverembed);
    }

});

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));


bot.on("message", (message) => {
    if (message.content.startsWith(">carrots")) {
        number = 18;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send (`${message.author}, Here's your daily dose of *carrots* !`, {files: ["./Yaoi/" + imageNumber + ".png"]} )
    }
});

bot.login(TOKEN);