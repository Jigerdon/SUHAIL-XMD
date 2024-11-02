const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_09_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1LFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0TllKalhGREhCby85VlFxbEpoSjBiZit3ak5XRzgyVkJTd0dtN0l3UFhvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqSkZwai1qaFJheTRfUExMdTBtMEZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM0YjNhNGE2LTE5ZmEtNDkwZi04OTI3LWIyOGQyMTk2MjNhZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDUyLFxuICAgICAgNjYsXG4gICAgICAyNDgsXG4gICAgICA4MSxcbiAgICAgIDkyLFxuICAgICAgNjgsXG4gICAgICA3MCxcbiAgICAgIDUxLFxuICAgICAgNTUsXG4gICAgICAxNDcsXG4gICAgICAxMDgsXG4gICAgICAxOTksXG4gICAgICAyMTMsXG4gICAgICAxNjEsXG4gICAgICAyMzQsXG4gICAgICAxNDAsXG4gICAgICAyMTIsXG4gICAgICAyMDMsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxMzcsXG4gICAgICA1NCxcbiAgICAgIDE3NixcbiAgICAgIDIzOCxcbiAgICAgIDgsXG4gICAgICAxNTQsXG4gICAgICAxNzQsXG4gICAgICA3MixcbiAgICAgIDEzMCxcbiAgICAgIDEwLFxuICAgICAgMTY4LFxuICAgICAgMjIwLFxuICAgICAgMTAyLFxuICAgICAgNjcsXG4gICAgICAxMixcbiAgICAgIDI0MSxcbiAgICAgIDY4LFxuICAgICAgMjgsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNSzFLQUpXSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjcwNzM2MDMyOjg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzcyNTAzNzc1NzY0NjA6ODlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEgzOEkwRkVNbVFtTGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJibzQ1K29iZWlCUzlYOXdQMVgwR2NIemJaQzh2UUt5N2ZYVktMejF6b1JJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVZTE1oYXQ0RHYySWZLSW9CTjM1YnF3NncxRGo4OUpyWW91MjdOMzJXaUY2RUo4cUJBajhDTk9tV3lLVStoNzRHY3FZa3NNMnRVVE45N2FvZ2V2a0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJpZkp1WUxaU2N1YkZOQXJYTnlxUG03NHhwTkk3TVRRU0FaMTdQOVkyUG4xSXBiV3REbHpIZUpldDNuWUZKQVNDeUM3VFVxc04rSDJHZUxlc21rWUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3MDczNjAzMjo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTQ1NzQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTngyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOeDIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJENE8yUmJGWU1oaWZUV255VVg5YVIxZzNWa1kzOEpsZnphK3RYcm5RL2JRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzEyOTA1NDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
