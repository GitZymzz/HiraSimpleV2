const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// Settings Bot 
global.owner = '6285776461481'
global.versi = version
global.namaOwner = "xyzhiraa"
global.packname = 'Bot WhatsApp By xyzhiraa'
global.botname = 'hiraV2'
global.botname2 = 'hiraV2'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6285692195658"
global.linkGrup = "https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3000
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.idSaluran = "120363335989645846@newsletter"
global.namaSaluran = "hiraV1 [ xyzhiraa ]"

// Tutorial Ngocok Orkut :
// * Ke CS Orkut @orderkuota 
// Teks :Kak bisa tolong buatin akun H2H kak? 
// Ntar disuruh menuliskan nama dan nomer akun orkut lu
//* klau udh di ksih pencet link okeconnect.com
//* login okeconnect.com
//* klik pojok kanan atas (garis tiga) 
//* klik Payment H2H
//* klik integrasi API
//* jadi deh Api orkut mu
//* yang qris ke website : https://scanqr.org
//Kamu upload gambar qris orderkuota mu 
//Ntar ada semacam nomer/api
//Note :
//Qris orkut wajib kecetak
// Info : https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v/2682
global.merchantIdOrderKuota = "OK2000300"
global.apiOrderKuota = "503037817337498462000300OKCTE710F6DB6C0525EF47135143AF15B565"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214526072661395590303UMI51440014ID.CO.QRIS.WWW0215ID20243611425300303UMI5204541153033605802ID5921LYLIA STORE OK20003006006BEKASI61051711162070703A016304B08B"

// Settings Api Digital Ocean
global.apiDigitalOcean = "-"

// Settings Api Digital Ocean
global.apiSimpelBot = "simplebotz85"


// Settings All Payment
global.shopepay = "Tidak Tersedia"
global.dana = "085692195658"
global.ovo = "Tidak Tersedia"
global.gopay = "085692195658"

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/gsn3e1.jpg", 
reply: "https://files.catbox.moe/gsn3e1.jpg", 
logo: "https://files.catbox.moe/gsn3e1.jpg", 
dana: "https://files.catbox.moe/gsn3e1.jpg", 
ovo: "https://files.catbox.moe/gsn3e1.jpg", 
gopay: "https://files.catbox.moe/gsn3e1.jpg", 
qris: "https://files.catbox.moe/bb3hfw.jpg"
}

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"privatehost.us.kg": {
"zone": "790918217c4add75b7684458518c5836", 
"apitoken": "qYv4NvEN6ZcUIv4dEXihjkmQMwbP_-3Qy_zFlAHv"
}, 
"botwhatsapp.us.kg": {
"zone": "fb1ac418c5564373a56c91d962b30dca", 
"apitoken": "rfQih0XNXiq7AyEuDoLjoFfHX2mhYf_9kddAdKIo"
}, 
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
}, 
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
}, 
"devzzhosting.my.id": {
"zone": "f994c2f66ea24d81ea5f4a17a57a725f", 
"apitoken": "AqzTJ13YE2ZxmKXdBP4imLhFMFPjN8VUt9mpbTGq"
}
}

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})