const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || " 5ERFmCaa#INTSdKyysWqtvDgQ9G-bcDe9dcktD7oXe7Hr60kM7IA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://imgtr.ee/images/2024/09/17/37f9be869d1404ef1a5d188178450537.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm alive now",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94704227534",
OWNER_NAME: process.env.OWNER_NAME || " ",
BOT_NAME: process.env.BOT_NAME || "NETHU-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"

};

