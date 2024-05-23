
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
 
const { cmd, prefix, Config } = require("../lib");

const done = "✳️";
const rwait = "✳️";

let logoFunctions = async (bot, { text, command }) => {
try {
text += ": ser";
let example = `Example: ${prefix}${command} Asta`;
let instructions = `Separate the text with ':' sign\nExample: ${prefix}${command} Asta: Bot`;
let inputText = text.split(":")[0];
let commandName = command.toLowerCase();

switch (commandName) {
case "gfx1":
if (!inputText) {
throw example;
}
let url = `(link unavailable){encodeURIComponent(inputText)}&apikey=caliphkey`;
bot.send(url, { caption: Config.caption }, "img", bot);
break;
// ... (similar cases for gfx2 to gfx14)
default:
break;
}
} catch (error) {
console.log(error);
if (true) {
return bot.send("" + error);
}
}
};

let logoStyles = ["gfx1", "gfx2", "gfx3", "gfx4", "gfx5", "gfx6", "gfx7", "gfx8", "gfx9", "gfx10", "gfx11", "gfx12", "gfx13", "gfx14"];

let apiKey = "GataDios";

for (let i = 0; i
cmd({
cmdname: logoStyles[i],
infocmd: "Create a gfx logo for text",
type: "gfx"
}, async (bot, input, { command }) => {
try {
logoFunctions(bot, { text: input, command });
} catch (error) {
console.log(error);
}
});
}

cmd({
cmdname: "gfx",
infocmd: "Create gfx logo for text",
type: "gfx"
}, async (bot, input, { command }) => {
try {
let instructions = `Separate the text with ':' sign\nExample: ${prefix}${command} Asta: Bot`;
if (!input) {
let helpMessage = `┌───〈 *GFX Menu* 〉───◆\n│╭─────────────···▸\n┴│▸\n⬡│▸ ${logoStyles.join(" \n⬡│▸ ")} \n┬│▸\n│╰────────────···▸▸\n└───────────────···▸\n\n*USE: ${prefix}${command} Asta:Md*\n_To get All Results with single Cmd!_`;
return bot.sendUi(bot.chat, { caption: helpMessage });
}
if (!input.includes(":")) {
return bot.send(instructions);
}
for (let i = 0; i
logoFunctions(bot, { text: input, command: "gfx" + (i + 1) }, false);
}
} catch (error) {
bot.error(error + "\n\nCommand: " + command, error, false);
}
});
