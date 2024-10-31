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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_08_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICAzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwielUzU1BzS0JUSWxUWU50UTlBY2hQYmt4ck9NbVNjd29pVmJySkg2eElpTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMFl6azBOUGtRZENKVlFSZEFhc19QQVwiLFxuICBcInBob25lSWRcIjogXCJiYzU1ZjUyZi1jYjMxLTQyMjYtYmRhOS0xZTQ4OTc1ZTM1MDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE5OSxcbiAgICAgIDkwLFxuICAgICAgMTAyLFxuICAgICAgNDcsXG4gICAgICA5OCxcbiAgICAgIDI1MyxcbiAgICAgIDE0MCxcbiAgICAgIDEzNyxcbiAgICAgIDIyNCxcbiAgICAgIDk2LFxuICAgICAgMTY5LFxuICAgICAgMTA5LFxuICAgICAgNDUsXG4gICAgICAxMzYsXG4gICAgICAyMzUsXG4gICAgICAzMyxcbiAgICAgIDU0LFxuICAgICAgMTE5LFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgODMsXG4gICAgICA5MCxcbiAgICAgIDIzNyxcbiAgICAgIDE5NyxcbiAgICAgIDIzNSxcbiAgICAgIDIzMixcbiAgICAgIDE5NSxcbiAgICAgIDI0MyxcbiAgICAgIDE5OCxcbiAgICAgIDEyMixcbiAgICAgIDIwOCxcbiAgICAgIDIxLFxuICAgICAgODMsXG4gICAgICAxMjEsXG4gICAgICAyLFxuICAgICAgMTMxLFxuICAgICAgMTU1LFxuICAgICAgMTQwLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFJBMUxDMUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3MDczNjAzMjo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM3MjUwMzc3NTc2NDYwOjg2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0svMzhJMEZFTmoxakxrR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYm80NStvYmVpQlM5WDl3UDFYMEdjSHpiWkM4dlFLeTdmWFZLTHoxem9SST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYazY5QlhESnAyMFo0TlpURDhYNE5IYmNrUFZweXNnSWlVZjVQcUlhQldSMTVMbjNGdHhFVHRRZjUvRE9hWThBMWhVNmd4TEUrZ2ZNcjgyTEJkTzVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzK0VTWU8vQ2JJQ2hKT0FWMXdhYklyaWRoZTFBZ2FnOGFTUEdZVUJuY0Uwak8rMzFKZzhVRmFodXZQbVJESnd5dnFtWEljUTZqK29DUWRLYjJtNkNnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzA3MzYwMzI6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDM2MjA3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU54MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTngyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRDRPMlJiRllNaGlmVFdueVVYOWFSMWczVmtZMzhKbGZ6YSt0WHJuUS9iUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMjkwNTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
