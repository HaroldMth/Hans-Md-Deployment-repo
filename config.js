const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("2347039246661")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://github.com/naveeddogar/KING-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === prince 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === prince 'Naveed Dogar' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FWQmZrUlZoVFQ5L0l3cXRYN0JxcG84Z2VYM2Q5cHZ3Y2ZHMjlld2VIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2ZyellpU1ZKL3NVZ3lMZVQ5Q2JDeHdpSFl1M0ZwVlk3dGhYTWRTb0kzST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTDlRa2t4d3FGdUgxNFQvVWpudDlsWTJuMGVXZG4vMEtUZGhtbkJrbW00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MFhMSitjUE1XMFBKR0kvUHczVUc3QU42U0w5VnFQNkovVnJLTVAwWVVRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCZDlIbWFDZkRkR1N0aHltNVZUazhSNnBVOGQ1VUxHZVdONklmVWQ1M2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpiMXliQThYUDQ4YzFOSmxuMFMzcUxla3VQNkFJK2tDWnlyN2xqNkJqMzQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Mis4N2huTW1iSUFVQkkvMWpZcmFuVzJvZVkza1Y5RHFKdVVmOW5iell6ZzNKV0ZLY3VNcmI5VHlVR0ZhYjYyVmtEN3JtNkRkSEdPa2RHcW9tZE1DUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjY2LCJhZHZTZWNyZXRLZXkiOiJtc0I1TElSVnY3UDRTMWRZT1NVL0hSMkV5RmVBNjg0bDNmemswYVpYRWZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYemNuZ0VXZlFwdVZYZDVKUURVeVNnIiwicGhvbmVJZCI6ImZkM2Q4MTNiLWQ0NTUtNDg0ZS05NDcyLTJlNDAwM2ZlYjNjNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzdlRhWHY2VW1OT1BCZ1Q0MzZXWit6ekh5aDQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMTlRuQ0FoZHh3V1F4NGlaUEF4K1B5Q2ZlST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lENTkrQUdFUG0vKzYwR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMDNtbFZOR3hZWElmL0ttRWtvQmM2bWhITllWenhoeHVaQ3V5R2Npa1ZnVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmFuU3IyRjE1VXRYd3gydzVUU2dvWnd4Z0NwVHZsem5QR0tNN2llY3I3QWtaUEhydFAzdnZOempJYXlmc2wvc0laNDZ4R01OeDhVUWJuZ3ExMTBPQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlRrNnRJU1V2cFY5emdLTDY4Y01zQjlVWWp1VHVZTUFTWEFUU3BVQjNkWDZuMi8xOXBoWEw3bFZ0T1ZKU2l6dlU5NHk3Q3RpY3pla1IwbjcyR2xOYUF3PT0ifSwibWUiOnsiaWQiOiIyMzQ3MDM5MjQ2NjYxOjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InByaW5jZSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDM5MjQ2NjYxOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRONXBWVFJzV0Z5SC95cGhKS0FYT3BvUnpXRmM4WWNibVFyc2huSXBGWUYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDcwMDc5OTZ9 false : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
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
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
