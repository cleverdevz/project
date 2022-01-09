const {Client, Intents} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

client.on('ready', ()=>{
    console.log('bot is ready')
})

client.on("messageCreate", msg=>{
    if (msg.content == 'แอดมิน')
    msg.reply('เร็วๆนี้')
})

client.login(process.env.TOKEN)