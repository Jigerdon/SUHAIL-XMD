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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_55_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU5LFxuICAgICAgICA2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTExLFxuICAgICAgICA3NixcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICA5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhQcThCNEhyM2QrT1RGcEhwelFTeGRKaW5rdnFncmNpWmFzMTUwM3JERzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjcwNzM2MDMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQkU5MTE2Njk4NEI5RDM1MzczNDkzN0Y2MkQyQjkxOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEzMTUzMzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzA3MzYwMzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4NzlFQUZDNUY3QUYxNzBBODI0OTZFNDI4MDFENjNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTMxNTMzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3MDczNjAzMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjkwQjk1NkQ5RjFDNEJFMjYzMkZBNDNFNzc3NzM1NzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMzE1MzMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjcwNzM2MDMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NjE5MkE5NDc3N0U2QTFENjMwRUQwMTAyMjg1Q0Q4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEzMTUzMzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2dhLW8tRTdSQ3lRS0lNbWd1LTVmQVwiLFxuICBcInBob25lSWRcIjogXCI3MzJlMzhhMy03NGY4LTRjZDMtYmYwMi0zZTJlMGU3YThiMjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMjEyLFxuICAgICAgNDQsXG4gICAgICAyNDksXG4gICAgICAyMTQsXG4gICAgICAxNzcsXG4gICAgICAxMjIsXG4gICAgICA2MyxcbiAgICAgIDE0NyxcbiAgICAgIDIwNixcbiAgICAgIDEyLFxuICAgICAgMTUsXG4gICAgICA5LFxuICAgICAgMTEwLFxuICAgICAgOTQsXG4gICAgICAyMjEsXG4gICAgICAxNDksXG4gICAgICAxMjMsXG4gICAgICA2NSxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDEwMSxcbiAgICAgIDE5MCxcbiAgICAgIDE5NCxcbiAgICAgIDI0NyxcbiAgICAgIDYxLFxuICAgICAgMjUyLFxuICAgICAgMTgzLFxuICAgICAgOSxcbiAgICAgIDEyLFxuICAgICAgMTEyLFxuICAgICAgMTU3LFxuICAgICAgNDQsXG4gICAgICAyMjYsXG4gICAgICAxNjcsXG4gICAgICA2MixcbiAgICAgIDUxLFxuICAgICAgMjI4LFxuICAgICAgMTU0LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTk4NEtMMVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3MDczNjAzMjo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlFhbWFyXCIsXG4gICAgXCJsaWRcIjogXCIxMzcyNTAzNzc1NzY0NjA6OTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnlqNzk4R0VQdU14N2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqV05UajJyMHdOTTdNUWRCSkVRQ3NyQndEOGMwaHdsaEhZWVFMQStTUTNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInI3Rzg5MXdha0pNUU9VSWZoS0JMWEFhNDZNTldoNUhuWm02UTJXZjZlSjVUOGdpUDZkVVVpU1BPZDZuQ0pKNFh2bjVpdHF4Rkh1eGxtTzdoMVlVYURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNCbHVMM1kreVlhd0d0WlNXRjlLRlF2Y01JbktEMGh0TXF6azByVTEyUFM0anlqbUpMWkNydVRNNytBZk9vRm8xOElBblhrSkpjTXJnYmx3anU3cER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3MDczNjAzMjo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTMxNTMyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx1T1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHVPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMjErQU9oSVRMOWdHZ2hJTmhQOEJGaDFrYkxIM3NneTd5bWF1cmQvKzZHRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODExNjY1MzcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzMTUzMzAxMzJcIn0iCn0="  // PUT your SESSION_ID 


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
