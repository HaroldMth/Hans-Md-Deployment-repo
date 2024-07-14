const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/HAROLDMTH/Hans-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029VaZDIdxDTkKB4JSWUk1O' // add your username
global.sudo = process.env.SUDO || '237696900612'
global.devs = '237696900612';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/88d1dcde8e49f35e87d78.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'HANS-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Harold Mth' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElVWjhoem1jL01PTlVqeGp6TWEvV29HNm0yZGpJNzNBLzFMcFd2YTIyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjJMWEhjeUowTDBmcFNMVVJLMmlUMkZMZkVoQlBUOEFuY3IwbHlRSk9VYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTWluWDBRcXlvWVdQR1lrSDlla2Fic0NFcFg2WXZSVkdRc0luZXZIQVZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3dmVuME1HZXlSb25vdUgrWU9xN0RmdFphZEhPNUI1L0NtVkFVb2lTVENZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBRC80T0YwYnBncUFpUTJ6REJOai8vR2dXK0hlelJlVzJyMzdvTTJxM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRNY2NRMzlsWlQ3Nzg1L1dycy9YakpFRHdWZVo4NUhaR2VsWFRZOU55bDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5ybG44TTNjUTU2ZTZwN2RLWWNCbUNmNDR5MkJsOUtmWjlZWWhwL0ZtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTNuRTNFSXhSRC92THRWb1lYalQ5RFFsOXhWSE9CaHZjaWppdjRTSkFtZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZJdGJucitTRmdnQmNEekhXdnN5RkthN1dJREtZZWYvODFneVRVSktKVG1IOUQzMnhMVGJ0YWh6S3lNVHBEeURjaDI2cDlwY0I1ak9BdzZad2F0M0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJqQmxoUkptYngvVU9yL1lhTVJBTXhTWjJIOExmektRY3lSK2tuNnJXTWVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWQXN2T1NUX1JnNmVQMV9RdVoxRTBnIiwicGhvbmVJZCI6IjM1MGQ3YjQ2LWI2MmEtNDVlMC1hODFmLTUyODU1ZTQ2NDNhOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0MVE3RUxTYkQ0bWpUclhlZE1hZUppRGlZakU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3d0SkZHb1FPRmZIZ240RVJyUnU2WktnY0pvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldNUFNOTktKIiwibWUiOnsiaWQiOiIyMzc2OTY5MDA2MTI6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGFucyBUZWNoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKUENpZXNDRUpQSHpiUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFRGtIMW9zSWl2YnM3WWNUa29UbjZGQjRYY0tGYWV2VnFUQnYzQkJ0alVJPSIsImFjY291bnRTaWduYXR1cmUiOiI2T3FMQ1RwNTFVR3Vhd2FOblhkTjdkMlBIYnZCNXlabVBMbTZrOXBjYWp0dUZZNW4vblozTmp5a2dFTnlnVDBmd2FBcEZJeVVWSzhGcHlyd2RUbDBBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiME52QlBuMHJBOXR0a2E1cFlOT3I0bEJLM2J3MW4yRGZlVXRCUEhFSWR3Qmw2UVNLWG4ybXFta2ZXc2JQNXJnWUlEM2Qwb3NlRFBWQ2VWdHA0ekc5Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTY5MDA2MTI6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkE1QjlhTENJcjI3TzJIRTVLRTUraFFlRjNDaFducjFha3diOXdRYlkxQyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDkzNTMyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFMzAifQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'Hans-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hans-Md Bot is alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'Hans-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
