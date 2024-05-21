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

 
const fs = require("fs");
const fetch = require("node-fetch");
const { cmd, TelegraPh } = require("../lib");
const Config = require("../config");
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "user",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('Please quote any text to get link.')
        let data = await pastebin.createPaste(citel.quoted.text, "Secktor-Pastebin")
        citel.reply('_Here is your link._\n'+data)
    }
);


cmd({
        pattern: "asthetic",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
    async(Void, citel) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/asthetic";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: aesthetic",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
cmd({
        pattern: "bike",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/bike";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: bike",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 2: cr7
cmd({
        pattern: "cr7",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/cr7";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: cr7",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 3: cat
cmd({
        pattern: "cat",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/cat";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: cat",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 4: dog
cmd({
        pattern: "dog",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/dog";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: dog",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 5: messi
cmd({
        pattern: "messi",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/messi";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: messi",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 6: mlegend
cmd({
        pattern: "mlegend",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/mlegend";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: mlegend",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 7: pubg
cmd({
        pattern: "pubg",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/pubg";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: pubg",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  
  // Command 8: random
  cmd({
        pattern: "random2",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/random";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: random",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  
  // Command 9: car
  cmd({
        pattern: "car",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/car";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: car",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  
  // Command 10: blackpink
cmd({
        pattern: "blackpink",
        desc: "To check wallpaper",
        category: "wallpaper",
        filename: __filename,
    },
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/blackpink";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: blackpink",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  
