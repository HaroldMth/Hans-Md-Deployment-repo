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

const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 3600 // 30 min
var dlsize = 100 // 100mb
    //---------------------------------------------------------------------------
cmd({
            pattern: "tgs",
            desc: "Downloads telegram stickers.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>'
        },
        async(Void, citel, text) => {
		if (!text) return await citel.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
		if (!text.includes("addstickers"))  return await citel.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
		let tgUrl = text.split("|")[0];
		let find = tgUrl.split("/addstickers/")[1];
		let { result } = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(find)} `);
		let check = text.split("|")[1] || "";
		let res = `Total stickers: ${result.stickers.length}\n*Estimated complete in:* ${result.stickers.length * 1.5} seconds\nKeep in mind that there is a chance of a ban if used frequently`.trim()
		if (result.is_animated) return await citel.reply("Animated stickers are not supported");
  		else if (check.startsWith("info")) return await citel.reply(res);
		let limit = parseInt(check.split(",")[0]) || 10;
		let count =  parseInt(check.split(",")[1]) ||  0;
	 	let isCheckText = check.split(";")[1] ||  "Sticker"
		let isSticker = true ;
	        if (isCheckText.includes("photo") ){isSticker = false ;	isCheckText = "Photo"}
		if(limit > result.stickers.length ) {  limit = result.stickers.length  }
	        if(count > result.stickers.length ) {  count = result.stickers.length - 5  }
		if(count > limit ){let temp = limit ;   limit = count;	count = temp ;}
		await citel.reply(`${res}\n\n_Downloading as ${isCheckText} From index *${count}* to *${limit}*._\nIf you wants more to download then use Like \n\n .tgs ${tgUrl} |  10 ,  20 ; photo`)
		for ( count ; count < limit ; count++) 
		{
		 // if (count >= limit) break;
		  let file_path = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${result.stickers[count].file_id}`);
		  let sticUrl = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`;
		  if(isSticker) { let a = await getBuffer(sticUrl); await citel.reply(a, { packname: Config.packname, author: "Secktor-Md"  }, "sticker");} 
		  else { await Void.sendMessage(citel.chat,{image : {url : sticUrl } , caption : `*_Telegram Sticker At Index ${count+1} Downloaded_*`}) } 
		  //count++;
		}


 
//function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return citel[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return citel['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');citel[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Void[__lobC(0x1bf)+__lobC(0x197)](citel[__lobC(0x1cf)],__lobb,citel,{'packname':Config['packname'],'author':citel[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        
	
 
 })
//---------------------------------------------------------------------------

async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};




//---------------------------------------------------------------------------
cmd(
    {
        pattern: "facebook",
	react: "📽️",
	alias: ['fb'],
        category:"downloader",

        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* 🌏.");
                return;
            }

            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fbdl?url=${text}`);

            if (!wamod.result || !wamod.result.hd) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: wamod.result.hd },
                    mimetype: "video/mp4",
                    caption:'┏━━━━━━━━━━━━━┓\n\n🐹 * ${Config.botname} ꜰʙ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*🐹\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ*: Naveed\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ ɴᴜᴍʙᴇʀ*:  wa.me//+923096566452\n\n┗━━━━━━━━━━━━━┛\n\n*ʏᴏᴜʀ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*...🔥🔥'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);


//---------------------------------------------------------------------------
const _0x6bb15=_0x5677;(function(_0x4a0d96,_0x440ca8){const _0x2bf933=_0x5677,_0x1fbafb=_0x4a0d96();while(!![]){try{const _0x181e6f=-parseInt(_0x2bf933(0x13d))/0x1*(parseInt(_0x2bf933(0x160))/0x2)+parseInt(_0x2bf933(0x16f))/0x3+parseInt(_0x2bf933(0x156))/0x4*(-parseInt(_0x2bf933(0x166))/0x5)+-parseInt(_0x2bf933(0x149))/0x6*(-parseInt(_0x2bf933(0x13e))/0x7)+parseInt(_0x2bf933(0x12e))/0x8*(-parseInt(_0x2bf933(0x144))/0x9)+parseInt(_0x2bf933(0x15b))/0xa*(parseInt(_0x2bf933(0x165))/0xb)+parseInt(_0x2bf933(0x168))/0xc*(parseInt(_0x2bf933(0x15a))/0xd);if(_0x181e6f===_0x440ca8)break;else _0x1fbafb['push'](_0x1fbafb['shift']());}catch(_0x591594){_0x1fbafb['push'](_0x1fbafb['shift']());}}}(_0x3895,0x544f9));const _0x327d96=(function(){const _0x103875=(function(){let _0x3cd9fa=!![];return function(_0x71b298,_0x238bf8){const _0x1de6c7=_0x3cd9fa?function(){const _0x1f313a=_0x5677;if(_0x238bf8){const _0x5884d6=_0x238bf8[_0x1f313a(0x13f)](_0x71b298,arguments);return _0x238bf8=null,_0x5884d6;}}:function(){};return _0x3cd9fa=![],_0x1de6c7;};}()),_0x29f1bb=_0x103875(this,function(){const _0x4e14ca=_0x5677;return _0x29f1bb[_0x4e14ca(0x12d)]()['search']('(((.+)+)+)+$')[_0x4e14ca(0x12d)]()[_0x4e14ca(0x153)](_0x29f1bb)['search']('(((.+)+)+)+$');});_0x29f1bb();const _0xe153fd=(function(){let _0x59a927=!![];return function(_0x315d93,_0x197f78){const _0x19e8df=_0x59a927?function(){const _0x48e507=_0x5677;if(_0x197f78){const _0x1558e7=_0x197f78[_0x48e507(0x13f)](_0x315d93,arguments);return _0x197f78=null,_0x1558e7;}}:function(){};return _0x59a927=![],_0x19e8df;};}()),_0x4c858b=_0xe153fd(this,function(){const _0x5156e4=_0x5677;let _0x38f18a;try{const _0x482871=Function(_0x5156e4(0x151));_0x38f18a=_0x482871();}catch(_0x13c154){_0x38f18a=window;}const _0x1b823a=_0x38f18a['console']=_0x38f18a['console']||{},_0x5483d0=['log',_0x5156e4(0x150),_0x5156e4(0x132),_0x5156e4(0x12f),_0x5156e4(0x15c),'table',_0x5156e4(0x14b)];for(let _0x385236=0x0;_0x385236<_0x5483d0[_0x5156e4(0x16d)];_0x385236++){const _0x551f10=_0xe153fd[_0x5156e4(0x153)][_0x5156e4(0x12b)][_0x5156e4(0x148)](_0xe153fd),_0x987fa=_0x5483d0[_0x385236],_0x14f045=_0x1b823a[_0x987fa]||_0x551f10;_0x551f10[_0x5156e4(0x158)]=_0xe153fd[_0x5156e4(0x148)](_0xe153fd),_0x551f10[_0x5156e4(0x12d)]=_0x14f045[_0x5156e4(0x12d)][_0x5156e4(0x148)](_0x14f045),_0x1b823a[_0x987fa]=_0x551f10;}});_0x4c858b();let _0x28b932=!![];return function(_0x1b66ff,_0x53891c){const _0xfd9915=_0x28b932?function(){if(_0x53891c){const _0x3521e6=_0x53891c['apply'](_0x1b66ff,arguments);return _0x53891c=null,_0x3521e6;}}:function(){};return _0x28b932=![],_0xfd9915;};}()),_0x557846=_0x327d96(this,function(){const _0x3b74d3=_0x5677;return _0x557846['toString']()[_0x3b74d3(0x14c)](_0x3b74d3(0x140))['toString']()['constructor'](_0x557846)['search'](_0x3b74d3(0x140));});(function(){const _0x1c062d=_0x5677,_0x42c210=function(){const _0x8b3e43=_0x5677;let _0x4d35f0;try{_0x4d35f0=Function(_0x8b3e43(0x151))();}catch(_0x2f8755){_0x4d35f0=window;}return _0x4d35f0;},_0x465c63=_0x42c210();_0x465c63[_0x1c062d(0x135)](_0x1068ee,0xfa0);}()),_0x557846();const _0xca1764=(function(){let _0x6c6aa5=!![];return function(_0x48755f,_0x500157){const _0x185b65=_0x6c6aa5?function(){const _0x436c64=_0x5677;if(_0x500157){const _0x33355e=_0x500157[_0x436c64(0x13f)](_0x48755f,arguments);return _0x500157=null,_0x33355e;}}:function(){};return _0x6c6aa5=![],_0x185b65;};}());(function(){_0xca1764(this,function(){const _0x1cf26c=_0x5677,_0x4cdf35=new RegExp(_0x1cf26c(0x142)),_0x124d71=new RegExp(_0x1cf26c(0x13c),'i'),_0x350e7d=_0x18f738(_0x1cf26c(0x136));!_0x4cdf35[_0x1cf26c(0x14f)](_0x350e7d+_0x1cf26c(0x141))||!_0x124d71[_0x1cf26c(0x14f)](_0x350e7d+_0x1cf26c(0x169))?_0x350e7d('0'):_0x18f738();})();}()),(function(){const _0x1734cc=_0x5677,_0x15a495=(function(){let _0x4da40a=!![];return function(_0xd6eb37,_0xd3b736){const _0x1455f5=_0x4da40a?function(){const _0x98aca=_0x5677;if(_0xd3b736){const _0x1c3ddc=_0xd3b736[_0x98aca(0x13f)](_0xd6eb37,arguments);return _0xd3b736=null,_0x1c3ddc;}}:function(){};return _0x4da40a=![],_0x1455f5;};}());(function(){_0x15a495(this,function(){const _0x2441fc=_0x5677,_0x390d5f=new RegExp(_0x2441fc(0x142)),_0x13a02f=new RegExp(_0x2441fc(0x13c),'i'),_0x2d4f35=_0x1068ee(_0x2441fc(0x136));!_0x390d5f[_0x2441fc(0x14f)](_0x2d4f35+_0x2441fc(0x141))||!_0x13a02f['test'](_0x2d4f35+_0x2441fc(0x169))?_0x2d4f35('0'):_0x1068ee();})();}());let _0xc0ee15;try{const _0x3a5266=Function(_0x1734cc(0x151));_0xc0ee15=_0x3a5266();}catch(_0x452afe){_0xc0ee15=window;}_0xc0ee15[_0x1734cc(0x135)](_0x18f738,0xfa0);}());const _0x2650e6=(function(){let _0x1133ac=!![];return function(_0x163536,_0xb5d1e6){const _0x67c8f7=_0x1133ac?function(){const _0x39df02=_0x5677;if(_0xb5d1e6){const _0x5e12fa=_0xb5d1e6[_0x39df02(0x13f)](_0x163536,arguments);return _0xb5d1e6=null,_0x5e12fa;}}:function(){};return _0x1133ac=![],_0x67c8f7;};}()),_0x521064=_0x2650e6(this,function(){const _0x4f5392=_0x5677,_0x3dcd93=function(){let _0x1de6c4;try{_0x1de6c4=Function('return\x20(function()\x20{}.constructor(\x22return\x20this\x22)(\x20));')();}catch(_0x33cb17){_0x1de6c4=window;}return _0x1de6c4;},_0x5cc48d=_0x3dcd93(),_0x57ed10=_0x5cc48d[_0x4f5392(0x12c)]=_0x5cc48d[_0x4f5392(0x12c)]||{},_0x41770b=['log',_0x4f5392(0x150),_0x4f5392(0x132),_0x4f5392(0x12f),_0x4f5392(0x15c),_0x4f5392(0x170),'trace'];for(let _0x4728b0=0x0;_0x4728b0<_0x41770b['length'];_0x4728b0++){const _0x3ce124=_0x2650e6[_0x4f5392(0x153)][_0x4f5392(0x12b)][_0x4f5392(0x148)](_0x2650e6),_0x2b4568=_0x41770b[_0x4728b0],_0x4135a0=_0x57ed10[_0x2b4568]||_0x3ce124;_0x3ce124[_0x4f5392(0x158)]=_0x2650e6[_0x4f5392(0x148)](_0x2650e6),_0x3ce124['toString']=_0x4135a0[_0x4f5392(0x12d)][_0x4f5392(0x148)](_0x4135a0),_0x57ed10[_0x2b4568]=_0x3ce124;}});_0x521064();function _0x5677(_0x3259ca,_0x2fcaf8){const _0x389552=_0x3895();return _0x5677=function(_0x5677e4,_0x867c99){_0x5677e4=_0x5677e4-0x12a;let _0x181af7=_0x389552[_0x5677e4];return _0x181af7;},_0x5677(_0x3259ca,_0x2fcaf8);}const {tlang,botpic,cmd,prefix,runtime,Config,formatp,fetchJson}=require('../lib'),{mods}=require(_0x6bb15(0x15e)),_0x5d84eb={};_0x5d84eb['pattern']=_0x6bb15(0x138),_0x5d84eb[_0x6bb15(0x161)]=[_0x6bb15(0x147),_0x6bb15(0x146)],_0x5d84eb[_0x6bb15(0x14a)]='Downloads\x20modwa\x20from\x20foundwa.',_0x5d84eb[_0x6bb15(0x12a)]='🪀️',_0x5d84eb['category']=_0x6bb15(0x16c),_0x5d84eb[_0x6bb15(0x134)]=__filename,_0x5d84eb[_0x6bb15(0x143)]=_0x6bb15(0x131),cmd(_0x5d84eb,async(_0x3cf437,_0x239b4a,_0x92894)=>{const _0x29149e=_0x6bb15,_0x4517f0=await mods(),_0x3c00c3={'url':_0x29149e(0x13a)},_0x57c0a6={'image':_0x3c00c3,'caption':_0x29149e(0x171)},_0x314234=_0x57c0a6,_0x3a29cd={'text':'```🌀\x20Please\x20Wait\x20Downloading\x20All\x20Packages\x20🌀```'},_0xb46ee6=await _0x3cf437['sendMessage'](_0x239b4a['chat'],_0x314234,{'quoted':_0x239b4a}),_0x5af608=_0x3a29cd,_0x220365={'quoted':_0xb46ee6},_0xb118a4=_0x220365;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x5af608,_0xb118a4);try{const _0x3631d3={'text':'⬇️','key':_0xb46ee6[_0x29149e(0x154)]},_0x31eef1=_0x3631d3,_0x7879e={'react':_0x31eef1},_0x389a3d=_0x7879e;await _0x3cf437[_0x29149e(0x164)](_0x239b4a['chat'],_0x389a3d);let _0x7d7bca=_0x4517f0[_0x29149e(0x14e)];const _0x3518e7={'url':_0x7d7bca['link']},_0x365d9d=_0x3518e7,_0x78e980={'document':_0x365d9d,'fileName':_0x7d7bca[_0x29149e(0x167)],'mimetype':_0x29149e(0x15d),'caption':'_*❂\x20ᴘᴀᴄᴋᴀɢᴇ\x20ɴᴀᴍᴇ\x20:*\x20com.whatsapp_\x0a\x0aQUEEN-NICKY-MD'},_0x2b49ff=_0x78e980;let _0x47b2db=_0x2b49ff;const _0xbb383b={'text':'⬆️','key':_0xb46ee6[_0x29149e(0x154)]},_0x28e293=_0xbb383b,_0x1998d7={'react':_0x28e293},_0x3199dc=_0x1998d7;await _0x3cf437['sendMessage'](_0x239b4a[_0x29149e(0x152)],_0x3199dc);const _0x302608={'text':'✅','key':_0xb46ee6[_0x29149e(0x154)]},_0x3bbf5b=await _0x3cf437['sendMessage'](_0x239b4a[_0x29149e(0x152)],_0x47b2db,{'quoted':_0x239b4a}),_0xbfa231=_0x302608,_0x4b87c0={'react':_0xbfa231},_0x570251=_0x4b87c0;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x570251);const _0x52f68a={'text':'📦','key':_0x3bbf5b[_0x29149e(0x154)]},_0x400dbe=_0x52f68a,_0x593ce3={'react':_0x400dbe},_0x58dffc=_0x593ce3;await _0x3cf437['sendMessage'](_0x239b4a['chat'],_0x58dffc);}catch(_0x80cd0){console[_0x29149e(0x139)](_0x80cd0),_0x239b4a[_0x29149e(0x133)](_0x29149e(0x163)+_0x80cd0+'*');const _0x2ccfcf={'text':'❌','key':_0xb46ee6[_0x29149e(0x154)]},_0x1117db=_0x2ccfcf,_0x1f501f={'react':_0x1117db},_0x3a9911=_0x1f501f;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x3a9911);}try{const _0x36e203={'text':'⬇️','key':_0xb46ee6[_0x29149e(0x154)]},_0x34fa96=_0x36e203,_0x38db44={'react':_0x34fa96},_0x319e48=_0x38db44;await _0x3cf437[_0x29149e(0x164)](_0x239b4a['chat'],_0x319e48);let _0x5ad617=_0x4517f0[_0x29149e(0x15f)];const _0x234170={'url':_0x5ad617[_0x29149e(0x145)]},_0x3641fc=_0x234170,_0x308778={'document':_0x3641fc,'fileName':_0x5ad617[_0x29149e(0x167)],'mimetype':_0x29149e(0x15d),'caption':_0x29149e(0x13b)},_0x4b98d3=_0x308778;let _0x44f292=_0x4b98d3;const _0x4d859e={'text':'⬆️','key':_0xb46ee6[_0x29149e(0x154)]},_0x3f61fb=_0x4d859e,_0x44e29d={'react':_0x3f61fb},_0x18cdc1=_0x44e29d;await _0x3cf437[_0x29149e(0x164)](_0x239b4a['chat'],_0x18cdc1);const _0x1c443c={'text':'✅','key':_0xb46ee6[_0x29149e(0x154)]},_0x311f09=await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x44f292,{'quoted':_0x239b4a}),_0x2a01e1=_0x1c443c,_0x32bedf={'react':_0x2a01e1},_0x3b083f=_0x32bedf;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x3b083f);const _0x2db9c4={'text':'📦','key':_0x311f09[_0x29149e(0x154)]},_0x464bbd=_0x2db9c4,_0x38427b={'react':_0x464bbd},_0xa3edeb=_0x38427b;await _0x3cf437['sendMessage'](_0x239b4a['chat'],_0xa3edeb);}catch(_0x5408f8){console[_0x29149e(0x139)](_0x5408f8),_0x239b4a['reply']('❗\x20*'+_0x5408f8+'*');const _0x42c328={'text':'❌','key':_0xb46ee6[_0x29149e(0x154)]},_0x3fa008=_0x42c328,_0x428216={'react':_0x3fa008},_0x500544=_0x428216;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x500544);}try{const _0x435e74={'text':'⬇️','key':_0xb46ee6[_0x29149e(0x154)]},_0x1c5924=_0x435e74,_0x54afc2={'react':_0x1c5924},_0x5aa038=_0x54afc2;await _0x3cf437[_0x29149e(0x164)](_0x239b4a['chat'],_0x5aa038);let _0x22ead0=_0x4517f0[_0x29149e(0x16b)];const _0x17fa26={'url':_0x22ead0['link']},_0x5ef52a=_0x17fa26,_0x2de822={'document':_0x5ef52a,'fileName':_0x22ead0['name'],'mimetype':_0x29149e(0x15d),'caption':'_*❂\x20ᴘᴀᴄᴋᴀɢᴇ\x20ɴᴀᴍᴇ\x20:*\x20com.gbwhatsapp_\x0a\x0aQUEEN-NICKY-MD'},_0x334890=_0x2de822;let _0x23166e=_0x334890;const _0x6ad48a={'text':'⬆️','key':_0xb46ee6[_0x29149e(0x154)]},_0x49121c=_0x6ad48a,_0x2ed8b7={'react':_0x49121c},_0x2dc10c=_0x2ed8b7;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x2dc10c);const _0x10bcbe={'text':'✅','key':_0xb46ee6[_0x29149e(0x154)]},_0x536587=await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x23166e,{'quoted':_0x239b4a}),_0x51d8b1=_0x10bcbe,_0x3d1b3c={'react':_0x51d8b1},_0x4c200c=_0x3d1b3c;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x4c200c);const _0x39f976={'text':'📦','key':_0x536587[_0x29149e(0x154)]},_0x36f45e=_0x39f976,_0x34544b={'react':_0x36f45e},_0x3c2237=_0x34544b;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x3c2237);}catch(_0x52db2d){console[_0x29149e(0x139)](_0x52db2d),_0x239b4a[_0x29149e(0x133)](_0x29149e(0x163)+_0x52db2d+'*');const _0x272adc={'text':'❌','key':_0xb46ee6['key']},_0x7ada66=_0x272adc,_0x4ca0b0={'react':_0x7ada66},_0x5db773=_0x4ca0b0;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x5db773);}try{const _0x411aa2={'text':'⬇️','key':_0xb46ee6['key']},_0x1093f5=_0x411aa2,_0x3f6a58={'react':_0x1093f5},_0x5c73ef=_0x3f6a58;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x5c73ef);let _0x9e25d4=_0x4517f0[_0x29149e(0x159)];const _0x454e78={'url':_0x9e25d4[_0x29149e(0x145)]},_0x3cc159=_0x454e78,_0xcb36c4={'document':_0x3cc159,'fileName':_0x9e25d4['name'],'mimetype':_0x29149e(0x15d),'caption':_0x29149e(0x157)},_0x3ba77b=_0xcb36c4;let _0x5cd44d=_0x3ba77b;const _0x5e5932={'text':'⬆️','key':_0xb46ee6[_0x29149e(0x154)]},_0x13044=_0x5e5932,_0x40abd9={'react':_0x13044},_0x1227c1=_0x40abd9;await _0x3cf437['sendMessage'](_0x239b4a[_0x29149e(0x152)],_0x1227c1);const _0x377cf1={'text':'✅','key':_0xb46ee6[_0x29149e(0x154)]},_0x1c3631=await _0x3cf437['sendMessage'](_0x239b4a[_0x29149e(0x152)],_0x5cd44d,{'quoted':_0x239b4a}),_0x1d231a=_0x377cf1,_0x16f4a0={'react':_0x1d231a},_0x3d9de3=_0x16f4a0;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x3d9de3);const _0x2cc858={'text':'📦','key':_0x1c3631[_0x29149e(0x154)]},_0x5b7f98=_0x2cc858,_0x352cf0={'react':_0x5b7f98},_0x491f81=_0x352cf0;await _0x3cf437[_0x29149e(0x164)](_0x239b4a['chat'],_0x491f81);}catch(_0x46cc27){console[_0x29149e(0x139)](_0x46cc27),_0x239b4a[_0x29149e(0x133)](_0x29149e(0x163)+_0x46cc27+'*');const _0x472271={'text':'❌','key':_0xb46ee6[_0x29149e(0x154)]},_0x3932a2=_0x472271,_0x415275={'react':_0x3932a2},_0x4dadc8=_0x415275;await _0x3cf437[_0x29149e(0x164)](_0x239b4a[_0x29149e(0x152)],_0x4dadc8);}const _0x3ab961={'text':'```🇱🇰\x20Successfully\x20Downloaded\x20All\x20Packages\x20🇱🇰```\x20✅\n\n ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴅᴜᴍɪᴅᴜ'},_0x412683=_0x3ab961,_0x28853d={'quoted':_0xb46ee6},_0x1c149e=_0x28853d;await _0x3cf437[_0x29149e(0x164)](_0x239b4a['chat'],_0x412683,_0x1c149e);});function _0x3895(){const _0x2dcec5=['downloader','length','while\x20(true)\x20{}','1277553ZOSjIX','table','\x0a*┏━[\x20_💃QUEEN-NICKY-MD💃\x20]─❂*\x0a\x0a*┣━(\x20_🥏\x20ғᴏᴜɴᴅᴡᴀ\x20ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\x20⬇️_\x20)*\x20\x0a\x0a*┃⿻*\x20*📦\x20ᴘᴀᴄᴋᴀɢᴇs\x20:*\x20\x0a\x0a\x20\x20\x20\x20\x20\x20*❂.*\x20_com_whatsapp_\x20\x0a\x20\x20\x20\x20\x20\x20*❂.*\x20_com_fmwhatsapp_\x20\x0a\x20\x20\x20\x20\x20\x20*❂.*\x20_com_gbwhatsapp_\x20\x0a\x20\x20\x20\x20\x20\x20*❂.*\x20_com_yowhatsapp_\x20\x0a\x0a*┗━━━━━━━━━━━━━━◆*\x0a\x0aQᴜᴇᴇɴ-ɴɪᴄᴋʏ-ᴍᴅ\x20\x20©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴅᴜᴍɪᴅᴜ','react','prototype','console','toString','2456416GxudYF','error','stateObject','<url\x20of\x20mediafire>','info','reply','filename','setInterval','init','debugger','fmmod','log','https://i.ibb.co/KwDPnTR/fouad-whatsapp-1024x576.jpg','_*❂\x20ᴘᴀᴄᴋᴀɢᴇ\x20ɴᴀᴍᴇ\x20:*\x20com.fmwhatsapp_\x0a\x0aQUEEN-NICKY-MD','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','559961QCLMNU','14lptNTj','apply','(((.+)+)+)+$','chain','function\x20*\x5c(\x20*\x5c)','use','18JHTfvF','link','modwa','foundwa','bind','217662kuqkLf','desc','trace','search','action','com_whatsapp','test','warn','return\x20(function()\x20{}.constructor(\x22return\x20this\x22)(\x20));','chat','constructor','key','string','12MCsuQL','_*❂\x20ᴘᴀᴄᴋᴀɢᴇ\x20ɴᴀᴍᴇ\x20:*\x20com.yowhatsapp_\x0a\x0aQUEEN-NICKY-MD','__proto__','com_yowhatsapp','766532YYNnEZ','367310VTqUZK','exception','application/vnd.android.package-archive','fouadwa-scraper','com_fmwhatsapp','2GtTfzy','alias','counter','❗\x20*','sendMessage','77vJjLet','299240SlvSrE','name','192OiZJxf','input','call','com_gbwhatsapp'];_0x3895=function(){return _0x2dcec5;};return _0x3895();}function _0x18f738(_0x54942a){function _0x1cd887(_0x20c317){const _0x1bbcc7=_0x5677;if(typeof _0x20c317===_0x1bbcc7(0x155))return function(_0x17a96d){}[_0x1bbcc7(0x153)](_0x1bbcc7(0x16e))[_0x1bbcc7(0x13f)]('counter');else{;(''+_0x20c317/_0x20c317)[_0x1bbcc7(0x16d)]!==0x1||_0x20c317%0x14===0x0?function(){return!![];}[_0x1bbcc7(0x153)]('debugger')[_0x1bbcc7(0x16a)](_0x1bbcc7(0x14d)):function(){return![];}['constructor'](_0x1bbcc7(0x137))['apply']('stateObject');}_0x1cd887(++_0x20c317);}try{if(_0x54942a)return _0x1cd887;else _0x1cd887(0x0);}catch(_0x5bb9f3){}}function _0x1068ee(_0x55632b){function _0x1e5699(_0x315079){const _0x1a279b=_0x5677;if(typeof _0x315079===_0x1a279b(0x155))return function(_0x5d934a){}[_0x1a279b(0x153)](_0x1a279b(0x16e))[_0x1a279b(0x13f)](_0x1a279b(0x162));else{;(''+_0x315079/_0x315079)['length']!==0x1||_0x315079%0x14===0x0?function(){return!![];}[_0x1a279b(0x153)](_0x1a279b(0x137))[_0x1a279b(0x16a)](_0x1a279b(0x14d)):function(){return![];}[_0x1a279b(0x153)](_0x1a279b(0x137))[_0x1a279b(0x13f)](_0x1a279b(0x130));}_0x1e5699(++_0x315079);}try{if(_0x55632b)return _0x1e5699;else _0x1e5699(0x0);}catch(_0x2f1cf2){}}
	
//---------------------------------------------------------------------------


cmd({
            pattern: "tiktok2",
	    alias :  ['ttdl','tiktdl'],
            desc: "Downloads Tiktok Videos Via Url.",
            category: "downloader",
            react :'🥳',
            filename: __filename,
            use: '<add tiktok url.>'
        },

        async(Void, citel, text) => {
if(!text) return await citel.reply(`*Uhh Please, Provide me tiktok Video Url*\n*_Ex .tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`);
let txt = text ? text.split(" ")[0]:'';
const ttdl =  require("tiktok-video-downloader");
if (!txt.includes("tiktok.com")) return  citel.reply(`*Uhh Please, Give me Valid Tiktok Video Url!*`);
try {
  let res = await ttdl.getInfo(txt)
    console.log(res);
let data  =" *User Name :* "+ res.author.username;
    data +="\n *Video Views :* " + res.video.views;
    data +="\n *Video Comments :* " + res.video.comments;
    data +="\n *Video Sound :* " + res.backsound.name;
    //data +="\n Video Link     : "+  res.video.url.no_wm;
    data += "\n"+Config.caption;
let buttonMessage =
    {
              video: {url:res.video.url.no_wm},
              mimetype: 'video/mp4',
              caption : "\t    *TIKTOK DOWNLOADER*  \n"+data
     } ; return await Void.sendMessage(citel.chat, buttonMessage , {quoted : citel });

} catch (error) {return citel.reply("Error While Downloading Your Video") }

})

  //---------------------------------------------------------------------------
cmd({
            pattern: "tts",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Slasher>',
        },
        async(Void, citel, text) => {
            if (!text && !citel.quoted) return citel.reply(`*Please give me Text*\n *_Example : .tts Hi,I am NaveedDogar._*`);
            if (!text) { text=citel.quoted.text;  }
            let texttts = text
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat,{audio: {url: ttsurl}, mimetype: "audio/mpeg", fileName: `ttsCitelVoid.m4a` },{quoted: citel } );
        }

    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "video",
            desc: "Downloads video from yt.",
            category: "downloader",
            filename: __filename,
            use: '<808-juice wrld >',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`😔 Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
                citel.reply('*📥➣Downloading:* '+titleYt)
                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: ` ⿻ Title : ${titleYt}\n ⿻ File Size : ${fileSizeInMegabytes} MB`,
	        height: 640,
                        width: 780,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
			    showAdAttribution: true,
                                title: Config.botname,
                                body: citel.pushName,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: ``,
                                sourceUrl: gurl
                            }
                        }
		    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`😔 File size bigger than 200mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "play",
            alias :['gana'],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`😔 Video file too big!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            citel.reply('*📥➣Downloadig:* '+titleYt)
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
			    showAdAttribution: true,
                            title: Config.botname,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: gurl,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 200mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
            


        }
    )
    

    //---------------------------------------------------------------------------
cmd({
            pattern: "sound",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<Dowanload Tiktok Sounds>',
        },
        async(Void, citel, text) => {
            if (!tax) return citel.send(`*Give A Number Example: ${prefix}music 3*`)
            citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+tax)
	const n = parseInt(tax);
	if(n.toString()=="NaN" || n < 1 || n > 160 ) return citel.reply('```Give Number From 1 to 160```');
	   let url = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${n.toString()}.mp3`
            let anu  = await getBuffer(url)
//await bot.sendMessage(citel.chat, { audio: botzy_buffer, mimetype: 'audio/mp4', ptt: true })
        let buttonMessage = {
		audio: anu,
		fileName: url.toString() ,
		mimetype: 'audio/mp4',
		ptt: true ,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: Config.botname,
                body: `ᴍᴜsɪᴄ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                //thumbnail: log0,
                mediaType: 2,


                sourceUrl: gurl,
                
            },
        },
		}
	return Void.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
cmd({
            pattern: "apk",
            desc: "Downloads apks  .",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },

        async(Void, citel, text) => {
        if(!text )return citel.reply("*Give me App Name*");

	const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`; };
	let randomName = getRandom(".apk");
	const filePath = `./${randomName}`;     // fs.createWriteStream(`./${randomName}`)
        const {  search , download } = require('aptoide-scraper')
	let searc = await search(text);          //console.log(searc);
	let data={};
	if(searc.length){ data = await download(searc[0].id); }
	else return citel.send("*APP not Found, Try Other Name*");
	
	
	const apkSize = parseInt(data.size);
	if(apkSize > 150) return citel.send(`❌ File size bigger than 200mb.`);
       const url = data.dllink;
	 let  inf  ="*App Name :* " +data.name;
         inf +="\n*App id        :* " +data.package;
         inf +="\n*Last Up       :* " +data.lastup;
         inf +="\n*App Size     :* " +data.size;
        // inf +="\n*App Link     :* " +data.dllink;
	inf +="\n\n "
         

axios.get(url, { responseType: 'stream' })
  .then(response => {
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  }).then(() => {
	
	let buttonMessage = {
                        document: fs.readFileSync(filePath),
                        mimetype: 'application/vnd.android.package-archive',
                        fileName: data.name+`.apk`,
                        caption : inf
                        
                    }
                  Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    console.log('File downloaded successfully');

  
    fs.unlink(filePath, (err) => {
      if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
  }) .catch(error => {
	fs.unlink(filePath)
    return citel.reply('*Apk not Found, Sorry*')//:', error.message);
  });
}
)
//-------------------------------------------------------------------------------
cmd({
            pattern: "ringtone",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<ringtone name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example: ${prefix}ringtone back in black`)
            let anu = await ringtone(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            return Void.sendMessage(citel.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: citel })
        }
    )

    //-------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            alias :['mf','mfire'],
            desc: "Downloads media from Mediafire.",
            category: "downloader",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            
            if (!text.includes("mediafire.com")) return citel.reply(`The link you provided is invalid`);
            let isUrl=text;
            const baby1 = await mediafire(isUrl);
	
	if(!baby1.length) return citel.reply(`could not found anything`);
	const apkSize = parseInt(baby1[0].size);
	if(apkSize > 100) return citel.reply(`❌ File size bigger than 150mb.`);
	
let result4 = ` *Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* :${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}

`;
	result4 +=Config.caption ; 
	
            //citel.reply(`${result4}`);
            
            let buttonMessaged = {
                    document: { url: baby1[0].link, },
                    caption: result4,
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                    
                }; 
                
 return await Void.sendMessage(citel.chat, buttonMessaged)
                //.catch((err) => citel.reply(`could not found anything`));

        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "song",
            alias: ["audio"],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<give text>',
        },
        async(Void, citel, text) => {
  
                if (!text) return await citel.reply(`*_Ohh PLease, Give Me Song Name_*`);
                let yts = require("secktor-pack")
                let search = await yts(text);
                let i = search.all[1] ;
                let cap = "\t *---Yt Song Searched Data---*   \n\nTitle : " + i.title + "\nUrl : " + i.url +"\nDescription : " + i.timestamp +"\nViews : "+i.views +"\nUploaded : " +i.ago +"\nAuthor : "+i.author.name+"\n\n\nReply 1 For Video \nReply 2 For Audio\n𝙆𝙄𝙉𝙂-𝙈𝘿" ;
                Void.sendMessage(citel.chat,{image :{url : i.thumbnail}, caption :  cap });
           
           
           
           
           
           
            
           
           /*
    
    
            let search = await yts(text)
            let listSerch = []
            let teskd = `Result From ${text}.\n_+ ${search.all.length} more results._`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `*ꜱᴇᴄᴋᴛᴏʀ-ᴍᴅ* / ${i.timestamp}`
                })
            }
            const sections = [

                {
                    title: "Total Search🔍" + search.all.length,
                    rows: listSerch
                }

            ]
            const listMessage = {
                text: teskd,
                footer: tlang().footer,
                title: ``,
                buttonText: "Songs",
                mentions: await Void.parseMention(teskd),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })
            */
    })

    //---------------------------------------------------------------------------
cmd({
            pattern: "yts",
            alias: ["ytsearch","getyt"],
            desc: "Gives descriptive info of query from youtube..",
            category: "downloader",
            filename: __filename,
            use: '<yt search text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            if (!text) return citel.reply(`Example : ${prefix}yts WhatsApp Bot by •ꜱᴇᴄᴋᴛᴏʀ-ᴍᴅ•`);
            let search = await yts(text);
            let textt = "*YouTube Search*\n Result From " + text + "\n   ─────────────────── \n";
            let no = 1;
            for (let i of search.all) 
	    {
                //textt += `*─── No : ${no++} ───*\n`
		textt += `*Title : ${i.title}*`    //\n ♫Type : ${i.type}  \n🙈Views : ${i.views} \n⌛Duration : ${ i.timestamp }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}
		textt += `\n*Url : ${i.url}* \n     *──────────────────*   \n`;
            }
            return Void.sendMessage(citel.chat, {
                image: {
                    url: search.all[0].thumbnail,
                },
                caption: textt,
            }, {
                quoted: citel,
            });
        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "ytmp4",
            alias: ["ytv","ytvid" , "ytvideo"],
            desc: "Downloads video from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<yt video url>',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            if (!text) {
                citel.reply(`❌Please provide me a url`);
                return;
            }
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply(`❌ Give youtube link!`);
                let infoYt = await ytdl.getInfo(urlYt);
                 if(infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let yts = require("secktor-pack");
                    let search = await yts(text);                             
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        caption: Config.ownername,
                        height:640,
                        width:780,
                        fileName: `${titleYt}.mp4`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: Config.botname,
                                body: `ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                                //thumbnailUrl: await getBuffer(search.all[0].thumbnail),
                                //renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: ``,
                                thumbnail:log0,
                                sourceUrl: gurl,                 
                            }
                        }
		    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 200mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "ytmp3",
	alias : ["yta"],
	desc: "Downloads audio by yt link.",
        category: "downloader",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                citel.reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                
             
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: Config.ownername,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: Config.botname,
                            body: `sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                           // renderLargerThumbnail: true,
                            thumbnail: log0,
                            mediaUrl: text,
                            mediaType: 1,
                            //thumbnailUrl: log0,
                            sourceUrl: gurl,
                        },
                    },
		}
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 200mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)

  //---------------------------------------------------------------------------
cmd({
        pattern: "ytdoc",
            alias: ["ytd"],
        desc: "Downloads audio by yt link as document.",
        category: "downloader",
        use: '<ytdoc video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {  return `${Math.floor(Math.random() * 10000)}${ext}`;  };

        if (text.length === 0) return await citel.reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
  
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) return await citel.reply(`❌ Give youtube link!`);
      
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) return await citel.reply(`❌ I can't download that long video!`);

            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {  filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,  })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {   stream.on("error", reject); stream.on("finish", resolve);    });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
		          caption: "  Here's Your File\n" + Config.caption ,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: Config.botname,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: gurl,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {         citel.reply(`❌ File size bigger than 200mb.`);    }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {     console.log(e)    }

})

    //---------------------------------------------------------------------------
cmd({
            pattern: "pint",
            desc: "Downloads image from pinterest.",
            category: "downloader",
            filename: __filename,
            use: '<text|image name>',
        },
    async(Void, citel, text) => {
        if (!text) return citel.send(`What picture are you looking for?`)
        citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+text)
        try {
            let anu = await pinterest(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            let buttonMessage = {
                image: { url: result },
                caption: Config.ownername ,
                //footer: tlang().footer,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: Config.botname,
                        body: `ᴘɪɴᴛᴇʀᴇsᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: gurl,
                    }
                }
            }
            return Void.sendMessage(citel.chat, buttonMessage, {  quoted: citel })
        } catch (e) {  return citel.reply(`*_Give Me Query_*\n*_Ex pint crown_*`)  }
    })
    //---------------------------------------------------------------------------
cmd({ 
             pattern: "video2", 
            alias :['videodown','vd'],
             desc: "Downloads video from yt.", 
             category: "downloader", 
             filename: __filename, 
             use: '<faded-Alan Walker>', 
         }, 
         async(Void, citel, text) => { 
 Void.sendMessage(citel.chat, {  
               react: {  
                   text: "🎥",  
                   key: citel.key  
               }  
           })  
             let yts = require("secktor-pack"); 
             let search = await yts(text); 
             let anu = search.videos[0]; 
             let urlYt = anu.url 
             const getRandom = (ext) => { 
                 return `${Math.floor(Math.random() * 10000)}${ext}`; 
             }; 
                 let infoYt = await ytdl.getInfo(urlYt); 
                 if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`); 
                 let titleYt = infoYt.videoDetails.title; 
                 let randomName = getRandom(".mp4"); 
                 citel.reply('🔎 Please Wait Searching.') 
                 const stream = ytdl(urlYt, { 
                         filter: (info) => info.itag == 22 || info.itag == 18, 
                     }) 
                     .pipe(fs.createWriteStream(`./${randomName}`)); 
                 await new Promise((resolve, reject) => { 
                     stream.on("error", reject); 
                     stream.on("finish", resolve); 
                 }); 
                 let stats = fs.statSync(`./${randomName}`); 
                 let fileSizeInBytes = stats.size; 
                 let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024); 
                 if (fileSizeInMegabytes <= dlsize) { 
  let thumbnaill = search.all[0].thumbnail; 
   let caption = `✍️title : ${search.all[0].title}
   
 📝 description : ${search.all[0].description}
  
 🖇️ url: ${search.all[0].url}
  
 📚 Author: ${search.all[0].author}
  
 ⏳ duration: ${search.all[0].duration}
  
 🧑‍💻 type :
  .video ${search.all[0].url}  to get video`
  
  let butnMessage = {
                        image: {
                            url: thumbnaill,
                        },
                        caption: caption,
                        headerType: 4,
                    };
                    Void.sendMessage(citel.chat, butnMessage, {
                        quoted: citel,
                    });
await sleep(2000);
                         let buttonMessage = {  
                          video: fs.readFileSync(`./${randomName}`),
                          jpegThumbnail: log0,
                          mimetype: 'video/mp4',  
                          fileName: `${titleYt}.mp4`, 
                          caption: `*📥 𝙐𝙋𝙇𝙊𝘼𝘿𝙀𝘿 𝘽𝙔 ${Config.botname} *`, 
                      }  
                   Void.sendMessage(citel.chat, buttonMessage, { quoted: citel }); 
  
                  return fs.unlinkSync(`./${randomName}`); 
                 } else { 
                     citel.reply(`❌ File size bigger than 100mb.`); 
                 } 
                 return fs.unlinkSync(`./${randomName}`);       
  
  
         } 
     )

//-----------------------------------------------------------------------//

cmd(
    {
        pattern: "tiktok",
        alias: ['tikdown'],
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const data = await fetchJson(`https://rest-api.akuari.my.id/downloader/tiktok4?link=${text}`);

            if (!data.respon || !data.respon.download.nowm) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: data.respon.download.nowm},
                    mimetype: "video/mp4",
                    caption: `┏━━━━━━━━━━━━━┓

 𝚃𝙸𝙺𝚃𝙾𝙺 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁

🖋️ *description*: ${data.respon.description}

🥷 *author*: ${data.respon.author}

 🎲 *views*: ${data.respon.playcount}

▶ *url*: ${data.respon.url}

┗━━━━━━━━━━━━━┛`,
                    

                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

//-----------------------------------------------------------------------//

cmd(
    {
        pattern: "tiktokaudio",
        alias: ['tta'],
        category:"downloader",
        react: "🍄",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const data = await fetchJson(`https://rest-api.akuari.my.id/downloader/tiktok4?link=${text}`);

            if (!data.respon || !data.respon.download.audio) {
                citel.reply("Failed to fetch video URL link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    audio: { url: data.respon.download.audio},
                    mimetype: "audio/mpeg",
                    
                    

                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

/////=======================  REPLY SYSTEM ===================================================



// By @•ꜱᴇᴄᴋᴛᴏʀ-ᴍᴅ•
// https://wa.me/8801853262586
// https://www.youtube.com/@suhailtechinfo0



/*cmd({
    pattern: "song",
    desc: "Search Song From youtube",
    category: "downloader",
    filename: __filename,
    use: '<Add Yt Song Query>'
},
async(Void, citel, text) => {
if (!text) return await citel.reply(`*_Ohh PLease, Give Me Song Name_*`);
let search = await yts(text)
let i = search.all[1] ;
let cap = "\t *---Yt Song Searched Data---*   \n\nTitle : " + i.title + "\nUrl : " + i.url +"\nDescription : " + i.timestamp +"\nViews : "+i.views +"\nUploaded : " +i.ago +"\nAuthor : "+i.author.name+"\n\n\nReply 1 To Video \nReply 2 To Audio \n*•ꜱᴇᴄᴋᴛᴏʀ-ᴍᴅ•*" ;
Void.sendMessage(citel.chat,{image :{url : i.thumbnail}, caption :  cap })
})
*/

//-----------------------------------------------------------------

cmd({ on: "text" }, async(Void, citel ,text , {isCreator} ) => {

    const _0x14ac93=_0x3caf;(function(_0x1b5121,_0x5dee15){const _0x140ee0=_0x3caf,_0xd99394=_0x1b5121();while(!![]){try{const _0x100840=parseInt(_0x140ee0(0x1b9))/0x1+-parseInt(_0x140ee0(0x1a7))/0x2*(parseInt(_0x140ee0(0x1b4))/0x3)+-parseInt(_0x140ee0(0x1bc))/0x4+-parseInt(_0x140ee0(0x1a9))/0x5+parseInt(_0x140ee0(0x1bb))/0x6*(parseInt(_0x140ee0(0x1ad))/0x7)+parseInt(_0x140ee0(0x1c0))/0x8+-parseInt(_0x140ee0(0x1be))/0x9;if(_0x100840===_0x5dee15)break;else _0xd99394['push'](_0xd99394['shift']());}catch(_0x398085){_0xd99394['push'](_0xd99394['shift']());}}}(_0x28e1,0x4e44a));function _0x3caf(_0x33f635,_0x1b37f7){const _0x28e1ba=_0x28e1();return _0x3caf=function(_0x3caf60,_0x180b2f){_0x3caf60=_0x3caf60-0x1a4;let _0x408a02=_0x28e1ba[_0x3caf60];return _0x408a02;},_0x3caf(_0x33f635,_0x1b37f7);}if(citel[_0x14ac93(0x1c1)]&&citel[_0x14ac93(0x1b6)]){const lines=citel[_0x14ac93(0x1c1)][_0x14ac93(0x1b6)][_0x14ac93(0x1b8)]('\x0a');if(lines[0x0][_0x14ac93(0x1a8)]('Yt\x20Song\x20Searched\x20Data')){const urlLine=lines[_0x14ac93(0x1ab)](_0x4d3aae=>_0x4d3aae[_0x14ac93(0x1a5)](_0x14ac93(0x1b1)));let urlYt=urlLine['replace']('Url\x20:','')['trim']();try{let randomName;if(citel[_0x14ac93(0x1b6)][_0x14ac93(0x1a5)]('1')){randomName=_0x14ac93(0x1a6);const stream=ytdl(urlYt,{'filter':_0x366613=>_0x366613[_0x14ac93(0x1af)]==0x16||_0x366613[_0x14ac93(0x1af)]==0x12})[_0x14ac93(0x1a4)](fs[_0x14ac93(0x1c2)](randomName));await new Promise((_0x594b37,_0x3484a0)=>{const _0x2ab110=_0x14ac93;stream['on'](_0x2ab110(0x1ba),_0x3484a0),stream['on']('finish',_0x594b37);}),await Void[_0x14ac93(0x1bd)](citel[_0x14ac93(0x1b7)],{'video':fs[_0x14ac93(0x1bf)](randomName),'mimetype':_0x14ac93(0x1ac),'caption':Config['caption']},{'quoted':citel});}else{if(citel[_0x14ac93(0x1b6)]['startsWith']('2')){randomName='./ytsong.mp3';const stream=ytdl(urlYt,{'filter':_0xb925ca=>_0xb925ca[_0x14ac93(0x1ae)]==0xa0||_0xb925ca['audioBitrate']==0x80})[_0x14ac93(0x1a4)](fs[_0x14ac93(0x1c2)](randomName));await new Promise((_0xbd802f,_0x3e8a3)=>{const _0x5d910d=_0x14ac93;stream['on']('error',_0x3e8a3),stream['on'](_0x5d910d(0x1b3),_0xbd802f);}),await Void[_0x14ac93(0x1bd)](citel[_0x14ac93(0x1b7)],{'audio':fs['readFileSync'](randomName),'mimetype':_0x14ac93(0x1b2)},{'quoted':citel});}}try{return fs[_0x14ac93(0x1aa)](randomName);}catch(_0x4b8369){}}catch(_0x2c1b30){return await citel[_0x14ac93(0x1b0)](_0x14ac93(0x1b5)+_0x2c1b30);}}}function _0x28e1(){const _0x5a2e4d=['video/mp4','33215aEaqLO','audioBitrate','itag','reply','Url\x20:','audio/mpeg','finish','708PUYfdf','Error\x20While\x20Downloading\x20Video\x20:\x20','text','chat','split','211117duABrL','error','540vpKxFa','1041800hTaUXQ','sendMessage','1389897APKDJS','readFileSync','4173952CbWaym','quoted','createWriteStream','pipe','startsWith','./ytsong.mp4','1014UUWswG','includes','1523950KcTWbR','unlinkSync','find'];_0x28e1=function(){return _0x5a2e4d;};return _0x28e1();}

})



