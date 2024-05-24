/**
========================================================
      █▄▀ █ █▄ █ ▄▀     █▄ ▄█ █▀▄
      █ █ █ █ ▀█ ▀▄█ ▀▀ █ ▀ █ █▄▀
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : KING-MD                                                                   
 * @author : naveeddogar <https://github.com/naveeddogar>   
 * @description : KING-MD ,A Multi-functional whatsapp bot.       
 * @version 1.0.1                                                                                             
 ========================================================
 **/

const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const { fetchJson,cmd, tlang,sleep } = require('../lib')
const fetch = require('node-fetch');
    //---------------------------------------------------------------------------
cmd({
            pattern: "question",
            desc: "Random Question.",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "truth",
            desc: "truth and dare(truth game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "dare",
            desc: "truth and dare(dare game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "fact",
        desc: "Sends fact in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*Fact:* ${data.fact}\n\n*Powered by KING-MD*`)   
    }

    
)

    //---------------------------------------------------------------------------
cmd({
        pattern: "joke",
        desc: "Sends joke in chat.",
        category: "fun",
        filename: __filename,
    },
        async(Void, citel, text) => { 

const response =await  fetch('https://official-joke-api.appspot.com/random_joke');
  const joke= await response.json();
citel.reply( `*𝙹𝙾𝙺𝙴:* ${joke.setup}\n*𝙿𝚄𝙽𝙲𝙷𝙻𝙸𝙽𝙴:*  ${joke.punchline}`);

})
    //---------------------------------------------------------------------------
cmd({
        pattern: "joke2",
        desc: "Sends joke in chat.",
        category: "fun",
        filename: __filename,
    },
        async(Void, citel, text) => { 
 
         fetch('https://v2.jokeapi.dev/joke/Any?type=single')
         .then(response => response.json())
         .then(data => {
         citel.reply(`*𝙹𝙾𝙺𝙴:* ${data.joke}`); 
  })
  .catch(error => {
     return citel.reply ('Error fetching joke:' + error);
  });
        }
    )

    //---------------------------------------------------------------------------
    cmd({
        pattern: "quotes",
        desc: "Sends quotes in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
╔════◇
║ *🎯Content:* ${quoo.data.quote.body}
║ *👤Author:* ${quoo.data.quote.author}
║
╚════════════╝ `
return citel.reply(replyf)
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "define",
        desc: "urban dictionary.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            Word: ${text}
            Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)

    //---------------------------------------------------------------------------
cmd({

            pattern: "prank",

            category: "fun",

            desc: "hacking prank",

            use: ' ',

            filename: __filename,

        },

        async(Void,citel, text) => {

citel.reply("```Injecting malware```")

await sleep(1000)

citel.reply("```hacking into device \n 0%```")

await sleep(1000)

citel.reply("```transfering photos \n █ 10%```")

await sleep(1000)

citel.reply("```transfer successful \n █Haha █ 20%```")

await sleep(1000)

citel.reply("```transfering videos \n █ █ █ 30%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ 40%```")

await sleep(1000)

citel.reply("```transfering audio \n █ █ █ █ █ 50%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ 60%```")

await sleep(1000)

citel.reply("```transfering hidden files \n █ █ █ █ █ █ █ 70%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ █ █ 80%```")

await sleep(1000)

citel.reply("```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```")

await sleep(1000)

citel.reply("```System hyjacking on process.. \n Conecting to Server ```")

await sleep(1000)

citel.reply("```Divice successfully connected... \n Riciving data...```")

await sleep(1000)

citel.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```")

await sleep(1000)

citel.reply("``` HACKING COMPLETED ```")

await sleep(1000)

citel.reply("``` SENDING PHONE DOCUMENTS...```")

await sleep(1000)

citel.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected```")

await sleep(1000)

            return citel.reply('*ALL FILES TRANSFERRED*');

        }

    )
//---------------------------------------------------------------------------
cmd({

            pattern: "hack",

            category: "fun",

            desc: "hacking prank",

            use: ' ',

            filename: __filename,

        },

        async(Void,citel, text) => {

citel.reply("```Injecting malware```")

await sleep(1000)

citel.reply("```hacking into device \n 0%```")

await sleep(1000)

citel.reply("```transfering photos \n █ 10%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ 20%```")

await sleep(1000)

citel.reply("```transfering videos \n █ █ █ 30%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ 40%```")

await sleep(1000)

citel.reply("```transfering audio \n █ █ █ █ █ 50%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ 60%```")

await sleep(1000)

citel.reply("```transfering hidden files \n █ █ █ █ █ █ █ 70%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ █ █ 80%```")

await sleep(1000)

citel.reply("```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```")

await sleep(1000)

citel.reply("```System hyjacking on process.. \n Conecting to Server ```")

await sleep(1000)

citel.reply("```Divice successfully connected... \n Riciving data...```")

await sleep(1000)

citel.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```")

await sleep(1000)

citel.reply("``` HACKING COMPLETED ```")

await sleep(1000)

citel.reply("``` SENDING PHONE DOCUMENTS...```")

await sleep(1000)

citel.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected```")

await sleep(1000)

            return citel.reply('*ALL FILES TRANSFERRED*');

        }

    )
