const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("547668979259539456")
setInterval(function() {
channel.send(`spam spam sppam spamspam spam spam spam spam spam spamspam spam spam spam spam spam spam
spam spam spam spam spam spam spamspam spam spam spam spam spam spamspam spam spam spam spam spam spamspam spam spam spam spam spam spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
