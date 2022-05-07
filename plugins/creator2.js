const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Diky Owner",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Dikybotz\nitem1.TEL;waid=62082122978010:6282122978010\nitem1.X-ABLabel:📍Owner Di ky\nitem2.EMAIL;type=INTERNET:dikybot36@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3JH6rSB/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Jawa Timur\nitem5.X-ABLabel:──────[ Owner Diky]──────\nEND:VCARD"
  }, {
    "displayName": "Diky Botz",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Diky Botz\nitem1.TEL;waid=62895366380771:0\nitem1.X-ABLabel:📍 DikyBotz\nitem2.EMAIL;type=INTERNET: dikybot36@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3JH6rSB/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Jawa Timur\nitem5.X-ABLabel:────[ Diky Bᴏᴛᴢ ]────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler
