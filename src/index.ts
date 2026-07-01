import "dotenv/config"
import { SapphireClient } from "@sapphire/framework";


const client = new SapphireClient({
    intents: ["MessageContent", "Guilds"]
})

client.login(process.env.BOT_TOKEN)
    .catch(err => {
        client.logger.error(err)
    })