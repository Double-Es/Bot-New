const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://tempest:tempest@cluster0.kyalet9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_58_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgMjAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NixcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMGVBOGtCSndtaUd4ZWREdzUrcVNlaE1KaUlJQjdVS1JsaVJ3dVJEVDU2ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM2NzAzNzk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4M0I1NjM3NjEyQkZENDZFM0MzNUE0NUU0QTk5N0EwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTY2NDE1MjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODZHb0hSX05SVDZlX2xKaDNMX0xBUVwiLFxuICBcInBob25lSWRcIjogXCIzNmRkOTA4NC02NDUxLTRkMzgtODk1MC1mMTkzMDQxNGFiNzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgNTYsXG4gICAgICAzOSxcbiAgICAgIDE3NCxcbiAgICAgIDIwNixcbiAgICAgIDY2LFxuICAgICAgMjQsXG4gICAgICAzLFxuICAgICAgMTM0LFxuICAgICAgMTA5LFxuICAgICAgMTk3LFxuICAgICAgMTg4LFxuICAgICAgMzcsXG4gICAgICAxMjYsXG4gICAgICAxOTUsXG4gICAgICAxNzYsXG4gICAgICAyNDksXG4gICAgICAyMDYsXG4gICAgICAyMDcsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMTU0LFxuICAgICAgMTczLFxuICAgICAgODAsXG4gICAgICAyMjUsXG4gICAgICA3LFxuICAgICAgOTMsXG4gICAgICA5MixcbiAgICAgIDUxLFxuICAgICAgMjQwLFxuICAgICAgMjMxLFxuICAgICAgMTMxLFxuICAgICAgMjAxLFxuICAgICAgMSxcbiAgICAgIDIyMCxcbiAgICAgIDgwLFxuICAgICAgMjEyLFxuICAgICAgMjE1LFxuICAgICAgMjUxLFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE9rbXFjRUVPdngwTVVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJReEpBc1RyWXZ2MmFZRFpDT3p5QVltQ05wd1Byd2ZYREl4RU83RWJnN1hJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhPc2xqbDgyY2Ftd3pHNjRoN3ZGOFdzWUdjVnRVQzhVa2Y0U2J6QzdPcFg0TEc0aURUUG9XbEV4Sklvc3VKa2lvaUdtb2FueE9qUERNNUZCS1Zhb0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNqZmsyeTN5Tm1BZENVUG1DTldUd012WDNwbkhsRGVBN3JZWVZPekE3dUJNWTQrNE1uTVM5S0V1ZEk1Q293N3RXSXQ5eGxZbmF5OGl4T1JDUTNjY0N3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNjcwMzc5NDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NjQ3NjE1OTg4MTM1Nzo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjcwMzc5NDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NjY0MTUyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBMMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEwyLmpzb24iOiAie1wia2V5RGF0YVwiOlwidkVsM0Z3RVNQVytxTUVOV1M4Vzh5VWtmODI5UHowcjB3U3ovRFQydzFJcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1OTYxMzk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTMzODQ2NjIzNDJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQTDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlV0srTE5sTVcxbysyeTRTTW5MKzV1dVFrZnlITEx6Mk4zaTdYaC91c3FRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU5NjEzOTUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc1NTk5MjAyMzI3MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

