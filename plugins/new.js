const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "settings",           
            desc: "(setting list).",
            category: "owner",
            react: "⚙️",
            filename: __filename,
            use: '<text>',

        },

        async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg',
                },

                caption: `

*⦁──🎃𝙎𝙀𝙏𝙏𝙄𝙉𝙂 𝙇𝙄𝙎𝙏📍──⦁*

1♻️➣ To put Antilink type :
Eg:- .setvar ANTILINK:false

2♻️➣ To on/off Auto reaction type :
Eg:- .setvar AUTO_REACTION:false/true

3♻️➣ To on/off Auto read status type : 
Eg:- .setvar AUTO_READ_STATUS:false/true

4♻️➣ To on/off Auto status save type :
Eg:- .setvar AUTO_STATUS_SAVER:false/true

5♻️➣ To on/off heroku type :
Eg:- .setvar heroku:false/true

6♻️➣ To put Heroku api key type :
Eg:- .setvar HEROKU_API_KEY:put api key

7♻️➣ To put Heroku app name type :
Eg:- .setvar HEROKU_APP_NAME:put app name

8♻️➣ To on/off Auto bio type :
Eg:- .setvar AUTO_BIO: false/true

9♻️➣ To on/off Auto reaction type :
Eg:- .setvar HEROKU_API_KEY:put api key

10♻️➣ To on/off Level up message type :
Eg:- .setvar LEVEL_UP_MESSAGE:false/true

11♻️➣ To put Mongodb url type :
Eg:- .setvar MONGODB_URI:put mongodb url

12♻️➣ To put Open api key type :
Eg:- .setvar OPENAI_API_KEY:put open api key

13♻️➣ To put Owner name type :
Eg:- .setvar OWNER_NUMBER:put any number

14♻️➣ To put Owner number type :
Eg:- .setvar OWNER_NUMBER:92xxxxxxxx

15♻️➣ To put Pack info type :
Eg:- .setvar PACK_INFO:put any name

16♻️➣ To put prefix type :
Eg:- .setvar PREFIX:.

17♻️➣ To on/off Auto Read message type :
Eg:- .setvar READ_MESSAGE:false/true

18♻️➣ To put thumb image type :
Eg:- .set THUMB_IMAGE:put image url

19♻️➣ To public/privert  type :
Eg:- .setvar WORKTYPE:public/private


©𝙂𝙀𝙉𝙀𝙍𝘼𝙏𝙀𝘿 𝘽𝙔 𝙆𝙄𝙉𝙂-𝙈𝘿
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

cmd({

            pattern: "heroku",           
            alias :['herokucc','herokubin','hbin'],
            desc: "(menu cmdlist).",
            category: "general",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
 *heroku account bins*


FIRST NAME : You Name

SECOND NAME : You Name

COUNTRY : US

ADDRESS 1 : Any Address
CITY : NEW YORK

STATE : NEW YORK

ZIP CODE : 10089

514812100967xx

514812100953xx

5148121009726403|08|2025|818

5148121009768132|08|2025|676

5148121009870383|08|2025|511

5148121009806742|08|2025|766

5148121009557634|08|2025|641

5148121009825403|08|2025|346

5148121009806072|08|2025|546

*By King Md👑*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
            
cmd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "user",
        filename: __filename,
    },
    async(Void, citel, text) => {
        citel.reply(`*Check your DM I LEFT SOMETHING THERE🤭 ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `*Name: King-Support*\n*Link:* https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w`,
        });

    }
)

cmd({

            pattern: "supportgc",           
            alias :['supp','wasupp','ownersupp'],
            desc: "(menu cmdlist).",
            category: "user",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
 ggghg

*By King Md👑*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
