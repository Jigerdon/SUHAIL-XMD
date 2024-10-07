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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_03_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkwLFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldyeDk3dm0vc2Q1T3gwRzV1OUZ5Nmp4UFNEbkxYREZ0NnRJRXRpVG5xaU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjcwNzM2MDMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MDEzODJEQUM3QjJEODMxODU4QTAwQjE3RTlDOTY2NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgyODgxOTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzA3MzYwMzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZEOUIzNUFBQkM1QUYzOEY4N0NENTM1QzJFN0UyMzZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI4ODE5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQNjd0SXktU1Q1NlJ5SXFFSWw0ODJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUwY2YwNDRhLTJhMDItNDc4OS1iMGJmLWIwYjdiMTBlZjY4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAxNjksXG4gICAgICAxNzgsXG4gICAgICAxMjAsXG4gICAgICAxNzQsXG4gICAgICA4MixcbiAgICAgIDE3NCxcbiAgICAgIDI1NCxcbiAgICAgIDQyLFxuICAgICAgMTkyLFxuICAgICAgNzAsXG4gICAgICA0OCxcbiAgICAgIDEzNSxcbiAgICAgIDEyLFxuICAgICAgMTAwLFxuICAgICAgMzgsXG4gICAgICA0MixcbiAgICAgIDE5OSxcbiAgICAgIDE5LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMTIxLFxuICAgICAgMjYsXG4gICAgICA2OCxcbiAgICAgIDQsXG4gICAgICAyMDksXG4gICAgICAxMzIsXG4gICAgICA4OCxcbiAgICAgIDEzMyxcbiAgICAgIDEwMSxcbiAgICAgIDIzOCxcbiAgICAgIDM2LFxuICAgICAgNjUsXG4gICAgICAyMSxcbiAgICAgIDI2LFxuICAgICAgMTExLFxuICAgICAgMTIwLFxuICAgICAgMjExLFxuICAgICAgMTM5LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZZMU0yQjhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNzA3MzYwMzI6ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNzI1MDM3NzU3NjQ2MDo4NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy8zOEkwRkVMNnJqcmdHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJibzQ1K29iZWlCUzlYOXdQMVgwR2NIemJaQzh2UUt5N2ZYVktMejF6b1JJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJ4ZHNqbnh6RGdtQnNkekdqZWF4R1FPV0EwTW5JZllZMUl2dGh5bVROR0JwN1JXc0lob0tDa1FyaG0ydWN3MFJXOUlRUXkxMW1NRXIzZmkvUzNQOENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitybU5KZktadFZ0dzI0ZUFPVEJpYlZNTnFmcEYvSzVMdS9MS1BKdHB1Ym8rRmxVNWltcFhqN29wcjhFeUh4cVRuU1ppYllyYkN4UGorVTdoeTRLd0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3MDczNjAzMjo4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4Mjg4MTkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTng3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOeDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEd0NqcUl3N3p1aHBNaVo1MjVjWHFjditOYTZBdzdXV0o5djY1cU5KeXVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzEyOTA1NDMsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNl19LFwidGltZXN0YW1wXCI6XCIxNzI4MTU1NTAzMDEyXCJ9Igp9"  // PUT your SESSION_ID 


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
