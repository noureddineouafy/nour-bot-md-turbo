import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `نور بوت متصلة الان بالانترنيت \nيمكنك كتابة \n.menu\n لتنبتق لك جميع الاوامر \n@${m.sender.split('@')[0]} \n`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: author,thumbnail: fs.readFileSync('./nour.jpg') }}})
      await conn.sendMessage(m.chat, {
        audio: {
            url: "nourbot.mp3"
        },
        seconds: 66,
        ptt: true,
        mimetype: "audio/mpeg",
        fileName: "vn.mp3",
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
}
handler.customPrefix = /^(tes|سلام|menu|Menu|apk|bobizaty|♥|salam|hy|Hello|.|شكرا|مرحبا)$/i
handler.command = new RegExp

export default handler
