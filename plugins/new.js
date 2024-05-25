const { sck, sck1,cmd, cmdBuffer, jsonformat, fetchJson, botpic, ffmpeg, TelegraPh, RandomXP, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
const util = require('util');
const axios = require('axios');
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const fetch = require('node-fetch');
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const Config = require('../config')
const maker = require('mumaker')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
const rapidApiKey = 'bcdeae8e6bmsh3af33e24439971ep106cd9jsnfc28157e482b';

//---------------------------------------------------------------------------
cmd({
            pattern: "tagadmin",           
            desc: "owner support list",
            category: "group",
            filename: __filename,
            use: '',

        },
    async(Void, citel, text) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = participants.filter(p => p.admin)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        
        
        const listAdmin = groupAdmins.map((v, i) => `┃✮ @${v.id.split('@')[0]}`).join('\n')
    
    
    let tag = `┏━━❮ ${Config.botname} ❯━❍\n┃✮ *_•𝚃𝙰𝙶𝙶𝙴𝙳 𝙱𝚈•_* @${citel.sender.split("@")[0]}
    ${text ? "≡ bot :" + text : ""}
┏━━ *_•𝙰𝙳𝙼𝙸𝙽𝚂•_* ━❍
${listAdmin}
┗━━━━━━━━━━❍\n*_ᴘᴏᴡᴇʀᴇᴅ ʙʏ⤸ ᴋɪɴɢ-ᴍᴅ_*
    `.trim()
    return await Void.sendMessage(citel.chat,{text : tag ,mentions: [citel.sender, ...groupAdmins.map(v => v.id) ,]} ,)
    
    
    
    }
    )

    //---------------------------------------------------------------------------
cmd({
            pattern: "quoted",           
            desc: "get reply Message from Replied Message",
            category: "user",
            filename: __filename,
    },
    async(Void, citel, text) => {
        if(!citel.quoted) return await citel.send("*_Reply to a Message_*")
        var quote
        try {
             quote = await Void.serializeM(await citel.getQuotedObj())
        } catch (error) {return console.log("error while geting Quoted Message : " , error )}

        if (!quote.quoted) return await citel.replay('*_Message you replied Does Not Contain Any Reply Message_*')
        else await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }}); 
        try {        
            let quote2 = await Void.serializeM(await quote.getQuotedObj())
            return await Void.copyNForward(citel.chat, quote2 , false ,)
        } catch (error) 
        {       
            const contextInfo = {}
            Void.forward(citel.chat ,quote.quoted, contextInfo , citel ); 
        }
        // attp | Void.sendMessage(citel.chat, { sticker: {url: `https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`}}, {quoted: citel })
    })

     //---------------------------------------------------------------------------
cmd({
            pattern: "blocklist",
            alias : ['blist'],
            desc: "owner block list",
            category: "whatsapp",
            filename: __filename,
            use: '',
    },
    async(Void, citel, text , {isCreator}) => {
        if(!isCreator) return await citel.reply(tlang().owner);
        try {
            const data = await Void.fetchBlocklist();
            if (data.length === 0) return await citel.reply(`*_Sorry, But You don't have any Blocked Numbers._*`);
            let txt = `${name.ownername}'s *_Block List_*\n\n*_Total Blocked Users_: ${data.length}* \n\n┏━❏\t*𝘉𝘭𝘰𝘤𝘬𝘦𝘥 𝘕𝘶𝘮𝘣𝘦𝘳𝘴*━❏\n`;
            for (let i = 0; i < data.length; i++) {      txt += `┃ ${i + 1}: wa.me/${data[i].split("@")[0]}\n`;    }
            txt += "┗━━━━━━━━━━━⦿";
            return await Void.sendMessage(citel.chat, { text: txt });
          } catch (err) {
            console.error(err);
            return await citel.send('*Error while getting Blocked Numbers.\nError: *' + err);
          }
    }
    )
     //---------------------------------------------------------------------------
 cmd({
            pattern: "location",
            desc: "get location by coordinate",
            category: "whatsapp",
            filename: __filename,
         },
         async(Void, citel, text) => {
          if (!text) return await citel.reply(`Give Coordinates To Send Location\n *Example:* ${prefix}location 24.121231,55.1121221`);
         let cord1 = parseFloat(text.split(',')[0]) || ''
         let cord2 = parseFloat(text.split(',')[1]) || ''
         if(!cord1 || isNaN(cord1) ||  !cord2 || isNaN(cord2)) return await  citel.reply("```Cordinates Not In Format, Try Again```") 

let txt  = "*----------LOCATION------------*"
   txt +="``` \n Sending Location Of Given Data: ";
   txt +="\n Latitude     :  "+cord1;
   txt +="\n Longitude  :  "+cord2 +"```\n"+name.caption;

await citel.reply (txt);


      return await Void.sendMessage(citel.chat, { location: { degreesLatitude : cord1, degreesLongitude : cord2 } } ,{quoted : citel} )
 }
     )
     //---------------------------------------------------------------------------

     //---------------------------------------------------------------------------
/**
 Module_Exports({
             kingcmd: "getpp",
             infocmd: "Get Profile Pic For Given User",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*_Please Reply To A User To Get Profile Picture_*`)
    let pfp;
     try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
     catch (e) {  return citel.reply("```Error While Getting Profile Pic```") } 
//const ppUrl = await Void.profilePictureUrl(citel.quoted.sender, 'image')
  
                let buttonMessaged = {

                            //quoted: "923184474176@s.whatsapp.net", 
                            //contextInfo: { forwardingScore: 1999999, isForwarded: false },
                            image: { url: pfp },
                            caption: '  *★Profile Picture is Here★*',
                            footer: tlang().footer,
                            headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged,{quoted:citel});


         }
     )
     **/

    //---------------------------------------------------------------------------
cmd({
    pattern: "antidemote",
    desc: "Detects demote and Automaticaly promote demote person",
    category: "wallpaper",
    filename: __filename,
},
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antidemote == 'true') return await citel.send("*_Anti_Demote Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antidemote : 'true' });
        return await citel.send("*_Anti_Demote Enable Succesfully!_ _No One Demote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antidemote == 'false') return await citel.send("*_Anti_Demote Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antidemote : 'false' });
        return await citel.send("*_Anti_Demote Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To Enable & Disable Demoting Peoples!_*`)
});
    //---------------------------------------------------------------------------
cmd({
    pattern: "antipromote",
    desc: "Detects Promote and Automaticaly demote promoted person",
    category: "wallpaper",
    filename: __filename,
},
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antipromote == 'true') return await citel.send("*_Anti_Promote Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antipromote : 'true' });
        return await citel.send("*_Anti_Promote Enable Succesfully!_ _No One Promote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antipromote == 'false') return await citel.send("*_Anti_Promote Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antipromote : 'false' });
        return await citel.send("*_Anti_Promote Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To Stop Promoting Peoples in Chat_*`)
});
    //---------------------------------------------------------------------------
cmd({
    pattern: "pdm",
    desc: "Detect Promote/Demote Users And Send Alerts in Chat",
    category: "group",
    filename: __filename,
},
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.pdm == 'true') return await citel.send("*_Promote/Demote Alerts Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { pdm : 'true' });
        return await citel.send("*_Promote/Demote Alerts Enable Succesfully!_*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.pdm == 'false') return await citel.send("*_Promote/Demote Alerts Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { pdm : 'false' });
        return await citel.send("*_Promote/Demote Alerts Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To get And Stop Promote/Demote Alerts_*`)
});


//---------------------------------------------------------------------------
cmd({
    pattern: "natural",
    desc: "Set wallpaper",
    category: "wallpaper",
    filename: __filename,
},
async(Void, citel, text) => {
        
        const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged , {quoted : citel});


}
   )
//---------------------------------------------------------------------------
cmd({
    pattern: "walp",
    desc: "Set wallpaper",
    category: "wallpaper",
    filename: __filename,
},
async(Void, citel, text) => {
        
        const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged , {quoted : citel});


}
   )

 //----------------------------------------------------------------------------
cmd({
    pattern: "random",
    desc: "get Radom wallpapers",
    category: "wallpaper",
    filename: __filename,
},
async(Void, citel, text) => {
        
        const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged , {quoted : citel});


}
   )
 //----------------------------------------------------------------------------
cmd({
    pattern: "asthetic",
    desc: "Set wallpaper",
    category: "wallpaper",
    filename: __filename,
},
async(Void, citel, text) => {
        
        const response = await fetch('https://api.maher-zubair.tech/wallpaper/asthetic');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged , {quoted : citel});


}
   )

 //----------------------------------------------------------------------------
cmd({
  pattern: "bike",
  desc: "Set wallpaper",
  category: "wallpaper",
  filename: __filename,
}, async (Void, citel, text) => {
  try {
    const response = await fetchJson('https://raw.githubusercontent.com/no-name7788/SIGMA-MD/main/Media/WallPapers/Bike_Pics.json');
    const wallpapers = response;
    const randomIndex = Math.floor(Math.random() * wallpapers.length);
    const randomWallpaper = wallpapers[randomIndex];
    const caption = `*╰┈➤ ${Config.botname} GENERATED WALLPAPER*`;
    if (citel.chat) {
      return await Void.sendMessage(citel.chat, {
        image: {
          url: randomWallpaper
        },
        caption: caption
      }, {
        quoted: citel
      });
    } else {
      console.log("Chat object not found.");
    }
  } catch (error) {
    console.log(error);
  }
});

 //----------------------------------------------------------------------------
cmd({
    pattern: "cr7",
    desc: "get ronaldo wallpaper",
    category: "wallpaper",
    filename: __filename,
},
async(Void, citel, text) => {
        
        const response = await fetch('https://api.maher-zubair.tech/wallpaper/cr7');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged , {quoted : citel});


}
   )

 //----------------------------------------------------------------------------
                                                                                       
cmd({
  pattern: "tempmail",
  desc: "Generate a temporary email address.",
  category: "core",
}, async (Void, citel) => {
   try {
    if (!secmailData[citel.sender]) {
      const tempEmail = await tempmail.create();
      if (!tempEmail || !tempEmail[0]) {
        return await citel.reply("*Request Denied!*");
      }
      const emailParts = tempEmail[0].split("@");
      secmailData[citel.sender] = {
        email: tempEmail[0],
        login: emailParts[0],
        domain: emailParts[1]
      };
    }
    var buffer = false;
    try {
      buffer = await cmdBuffer(tmpUrl);
    } catch (error) {}
    await citel.reply(
      `*YOUR TEMPMAIL INFO*
*EMAIL:* ${secmailData[citel.sender].email}
*Login:* ${secmailData[citel.sender].login}
*Domain:* ${secmailData[citel.sender].domain}
*USE _${prefix}checkmail_ to get latest emails!
*USE _${prefix}delmail_ to delete current email!
${Config.botname}
`.trim(),
      {
        contextInfo: {
          ...(await citel.bot.contextInfo("TEMPMAIL", citel.senderName, buffer))
        }
      },
      "cmd",
      citel
    );
  } catch (error) {
    console.log(error);
    await citel.reply("*Request Denied!*");
  }
});

// Command for checking messages in the temporary email inbox
cmd({
  pattern: "checkmail",
  desc: "Check your temporary email inbox.",
  category: "core",
}, async (Void, citel) => {
  const userId = citel.sender;

  // Check if the user has a temporary email address
  if (tempEmails.has(userId)) {
    try {
      // Check the inbox of the temporary email address
      const inbox = await checkInbox(userId);

      if (inbox.length > 0) {
        // Display the received messages
        let messageList = "Your temporary email inbox:\n";
        inbox.forEach((message, index) => {
          messageList += `${index + 1}. From: ${message.from_email}, Subject: ${message.subject}\n`;
        });

        await citel.reply(messageList);
      } else {
        await citel.reply("Your temporary email inbox is empty.");
      }
    } catch (error) {
      console.error('Error checking temporary email inbox:', error);
      await citel.reply('An error occurred while checking the temporary email inbox.');
    }
  } else {
    await citel.reply("You don't have a temporary email address. Generate one with '.tempmail' first.");
  }
});

//---------------------------------------------------------------------------
cmd({
    pattern: "gdesc",
    alias : ['setgdesc','setdesc'],
    desc: "Set Description of Group",
    category: "group",
    filename: __filename,
    use: 'enter Description Text',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*_Provide Description text, You wants to Set_*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateDescription(citel.chat, text);
        citel.reply('*_Group description Updated Successfuly!_*') 
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"Error While Updating Group Description\nReason : " + e, } ,{quoted : citel})   }
}
)

//---------------------------------------------------------------------------
cmd({
    pattern: "gname",
    alias: ['setgname','setname'],
    desc: "Set name of Group",
    category: "group",
    filename: __filename,
    use: 'enter Description Text',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*_Provide Text To Update Group Name_*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateSubject(citel.chat, text)
        citel.reply('*_Group Name has been Updated Successfuly!_*') 
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"_Error While Updating Group Name_\nReason : " + e, } ,{quoted : citel})   }
}
)

//---------------------------------------------------------------------------
cmd({
    pattern: "request",
    desc: "Send a request message to the bot developer.",
    category: "user",
    usage: "request <your request message>",
}, async (Void, citel, text) => {
    if (!text) {
        await citel.reply("Please provide your request message. Example: .request Please fix or add a new feature.");
        return;
    }
    const developerNumber = '923096566451';
    const requestMessage = `*Request from ${citel.sender}*\n\n${text}`;
    await Void.sendMessage(developerNumber + "@s.whatsapp.net", { text: requestMessage }, { quoted: citel });
    await citel.reply("Your request has been sent to the bot developer. Thank you!");
});

    //---------------------------------------------------------------------------
cmd({
  pattern: "listonline",
  desc: "List all active members of the group",
  category: "group",
}, async (Void, citel, match) => {
  const groupMetadata = await citel.groupMetadata(citel.jid);
  const participants = groupMetadata.participants;

  const activeMembers = participants.filter((participant) => participant.isActive);
  const activeMemberNames = activeMembers.map((member) => `@${member.jid.split('@')[0]}`);
  const activeMemberCount = activeMembers.length;

  let response = `Active Members (${activeMemberCount}):\n`;
  response += activeMemberNames.join('\n');

  await citel.reply(response);
});

//---------------------------------------------------------------------------
cmd({
            pattern: "memegen",
            desc: "Write text on quoted image.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!/image/.test(mime)) return citel.reply(`Reply to Photo With Caption *text*`)
            mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
            mem = await TelegraPh(mee)
            meme = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
            let buttonMessage = {
                image: meme,
                caption: "Here you go",
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
            await fs.unlinkSync(mee)

        }
    )
//---------------------------------------------------------------------------
cmd({
            pattern: "del",
            alias: ["deletemsg"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('Only Admins are allowed to delete other persons message.')
                if (!isBotAdmins) return citel.reply('I can\'t delete anyones message without getting Admin Role.')
                if (!citel.quoted) return citel.reply(`Please reply to the message. ${tlang().greet}`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
//-------------------------------------------------------------------------------
cmd({
  pattern: "totag",
  desc: "Hide tags in a message",
  category: "group",
}, async (Void, citel) => {
  const mentioned = citel.mentionedIds;
  let hiddenTagMessage = citel.text;
  
  mentioned.forEach((mention) => {
    const mentionString = `@${mention.split('@')[0]}`;
    hiddenTagMessage = hiddenTagMessage.replace(mentionString, '');
  });

  await citel.sendMessage(citel.chat, hiddenTagMessage);
});


//--------------------------------------------------------------------------------
cmd({
  pattern: "broadcast",
  alias: ["bc"],
  desc: "Sends a broadcast message to all groups",
  fromMe: true,
  category: "group",
  filename: __filename,
  usage: "<text for broadcast>",
}, async (Void, citel, text) => {
  if (!isCreator) return citel.reply(tlang().owner);
  const groups = await Void.groupFetchAllParticipating();
  const activeGroups = groups.filter((group) => group.participants.length > 0); 
  citel.reply(`Preparing to send broadcast to ${activeGroups.length} group(s).`);
  for (const group of activeGroups) {
    try {
      await sleep(3000);
      const messageContent = {
        text: `*--❗ ${tlang().title} Broadcast ❗--*\n\n Author: ${citel.pushName}\n\n${text}`,
      };
      await Void.sendMessage(group.id, messageContent, { quoted: citel });
    } catch (error) {
      console.error(error);
      citel.reply(`Error sending broadcast to group: ${group.id}`);
    }
  }
  citel.reply(`Successfully broadcasted to ${activeGroups.length} group(s).`);
});
//-------------------------------------------
cmd({
  pattern: "left",
  desc: "Leaves the current group",
  category: "group",
}, async (Void, citel, text) => {
  try {
    const chatId = citel.chat;
    await Void.groupLeave(chatId);
    citel.reply("Successfully left the group🙂.");
  } catch (error) {
    console.error(error);
    citel.reply("you leave the group.🤦🏽‍♂️");
  }
});

//---------------------------------------------------------------------------
cmd({
  pattern: "delt",
  desc: "Deletes your own message",
  category: "misc",
  use: "<reply to your message>",
}, async (Void, citel, text) => {
  if (!citel.quoted) return citel.reply("Please reply to the message you want to delete🙂.");
  if (!citel.quoted.fromMe) return citel.reply("You can only delete your own messages🙄.");
  const { chat, fromMe, id } = citel.quoted;
  const key = {
    remoteJid: chat,
    fromMe,
    id,
  };

  await Void.sendMessage(chat, { delete: key });
});
//---------------------------------------------------------------------------
cmd({
  pattern: 'antidelete',
  fromMe: true,
  desc: 'Configure Anti-Delete preferences',
  category: 'owner',
}, async (Void, citel, text) => {
  const args = text.split(' | ');

  if (args.length === 1 && args[0].toLowerCase() === 'off') {
    antideleteOwners.delete(citel.sender.jid);
    return await citel.reply('Anti-Delete turned off.');
  }

  if (args.length === 1 && args[0].toLowerCase() === 'on') {
    antideleteOwners.add(citel.sender.jid);
    return await citel.reply('Anti-Delete turned on. Deleted messages will be sent to you.');
  } else {
    return await citel.reply('Invalid format. Example: antidelete on');
  }
});

cmd({
  on: 'message',
  fromMe: false,
}, async (Void, citel, message) => {
  if (antideleteOwners.size > 0 && citel.key.fromMe === false) {
    antideleteOwners.forEach(async ownerJID => {
      const deletedBy = citel.key.fromMe ? 'you' : citel.key.participant;
      const sentBy = citel.key.fromMe ? 'you' : citel.key.remoteJid;

      const messageText = message.hasOwnProperty('text') ? message.text : 'Non-text message';

      const deletedMessageID = citel.message.id;
      const deletedMessageContent = await Void.getMessageById(deletedMessageID);

      const report = ` *Someone deleted a message!!*\n\n * Deleted by:* _${deletedBy}_\n *✉️ Sent by:* _${sentBy}_\n * *Message text:* \`\`\`${messageText}\`\`\``;

      if (message.hasOwnProperty('image') || message.hasOwnProperty('video') || message.hasOwnProperty('audio')) {
        report += `\n\n*Message media:*\n`;
        for (const media of Object.values(message)) {
          if (media.hasOwnProperty('mimetype')) {
            report += `- ${media.mimetype}\n`;
          }
        }
      }

      await Void.sendMessage(ownerJID, report, citel.message);
    });
  }
});

//---------------------------------------------------------------------------
cmd({
  pattern: "gjid",
  fromMe: true,
  desc: "Get the JID of the current group",
  category : "user",
}, async (Void, citel) => {
  if (!citel.isGroup) {
    await citel.reply("This command can only be used in a group.");
    return;
  }

  const groupJID = citel.chat;
  await citel.reply(`The JID of this group is: ${groupJID}`);
});

//---------------------------------------------------------------------------
cmd({
  pattern: "archive",
  desc: "Archives a chat to hide it from your chat list",
  category: "user",
  use: "<reply to chat>",
}, async (Void, citel, text) => {
  if (!citel.quoted) return citel.reply("Please reply to the chat you want to archive.");
  const chatId = citel.quoted.chat;
  try {
    const lastMessage = await getLastMessageInChat(chatId);
    await Void.chatModify({
      archive: true,
      lastMessages: [lastMessage],
    }, chatId);
    citel.reply("Chat successfully archived!");
  } catch (error) {
    console.error(error);
    citel.reply("Failed to archive chat.");
  }
});

//---------------------------------------------------------------------------
cmd({
  pattern: "groupbroad",
  fromMe: true,
  desc: "Send a broadcast message to the group",
  category: "user",
}, async (Void, citel, text) => {
  if (!text) return await citel.reply("_Please provide a message to broadcast_");

  const groupJid = "120363193106986276@g.us"; 

  await Void.sendMessage(groupJid, text);

  return await citel.reply("_Broadcast sent successfully_");
});

//---------------------------------------------------------------------------    
cmd({
    pattern: "teddyy",    
    category: "fun",    
    dear: "cute teddy",   
    filename: __filename,
},async(Void,citel ,text) => {
      let teddy = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈']
      const { key } = await Void.sendMessage(citel.chat,{text :  `(\\_/)\n( •.•)\n/>🤍` })
      for (let i = 0; i < teddy.length; i++) {
        await sleep(500);
        await Void.sendMessage(citel.chat,{text:`(\\_/)\n( •.•)\n/>${teddy[i]}`,  edit: key })             
      }

})

//---------------------------------------------------------------------------    

cmd({
    pattern: "heart",    
    category: "fun",    
    dear: "cute hearts",   
    filename: __filename,
},async(Void,citel ,text) => {
      let teddy = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈']
      const { key } = await Void.sendMessage(citel.chat,{text :  `(\\_/)\n( •.•)\n/>🤍` })
      for (let i = 0; i < teddy.length; i++) {
        await sleep(500);
        await Void.sendMessage(citel.chat,{text:`(\\_/)\n( •.•)\n/>${teddy[i]}`,  edit: key })             
      }

})

 //-------------------------------------------------------------
let recordedMessage = '';

cmd({
   pattern: "setaza",
   desc: "Store a message as account number",
  fromMe:true,
   category: "user",
 }, async (Void, citel, text) => {
   // Check if a message is already recorded
   if (recordedMessage === '') {
     const message = text.trim();
     recordedMessage = message;
     await citel.reply(`Account number recorded: "${message}"`);
   } else {
     await citel.reply("A message is already recorded.");
   }
 });

 //-------------------------------------------------------------
cmd({
   pattern: "delaza",
   desc: "Delete the recorded account number",
   category: "user",
  fromme:true
 }, async (Void, citel) => {
   recordedMessage = '';
   await citel.reply("Account number deleted.");
 });

 cmd({
   on: "text",
  fromMe:false,
 }, async (Void, citel, text) => {
   if (/(\baza\b|\bsend aza\b|\baccount number\b)/i.test(text) && recordedMessage) {
     await citel.reply(recordedMessage);
   }
 });

 //-------------------------------------------------------------
cmd({
        pattern: "paste",
        desc: "create paste of text.",
        category: "core",
        filename: __filename,
    },
    async(Void, citel,text) => {
 let a = citel.quoted ? citel.quoted.text : citel.text;
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=King-Md+Bot&author_name=Naveeddogar&content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)
    }
);

 //-------------------------------------------------------------
cmd(
    {
        pattern: "wamod", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file
            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_whatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_whatsapp.name,
                    caption: '👑 KING-VAJITA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern:"fmmod", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_fmwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_fmwhatsapp.name,
                    caption: '👑 KING-VAJIRA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern: "gbmod", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_gbwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_gbwhatsapp.name,
                    caption: '👑 KING-VAJIRA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern: "yomod", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_yowhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_yowhatsapp.name,
                    caption: '👑 KING-MD 👑\n\n Yo Mods Downloader \n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴀᴠᴇᴇᴅ  👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

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
        pattern: "supportgc",
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

            pattern: "myytch",           
            alias :['gkjk','ggggggg','okl'],
            desc: "menu support",
            category: "user",
            filename: __filename,

        },
async(Void, citel) => {
 
let kap = `
𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐌𝐘 𝐂𝐇𝐀𝐍𝐍𝐄𝐋

*•𝙲𝙾𝙽𝚃𝙴𝙽𝚃•* How To Create Whatsapp Bot
*•𝚃𝙾𝚃𝙰𝙻 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴𝚁𝚂•* 0 Subs😥
*•𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙻𝙸𝙽𝙺•*
_http://lnkiy.in/Innoxent-yt_`


  let buttonMessaged = 
      {
      image: { url: await botpic() },
      caption: kap,
      footer: tlang().footer,
      headerType: 4,
       contextInfo: {
        externalAdReply: {
            title: `ɪɴɴᴏxᴇɴᴛ ᴛᴇᴄʜ`,
            body: `sᴜʙsᴄʀɪʙᴇ ᴍʏ ʏᴛ`, 
            thumbnail: log0,
            mediaType: 4,
            mediaUrl: "",
            sourceUrl: gurl,
        },
    },
      };
     
  return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });

}
)

cmd({

            pattern: "support",           
            alias :['supp','wasupp','channel'],
            desc: "(menu cmdlist).",
            category: "user",
            react: "😏",
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
 KING Md WhatsApp Bot

 Official Support Channel
 
https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w

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
