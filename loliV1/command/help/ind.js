exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}apri
│
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}song [judul lagu]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}ig [url]
│ • ${prefix}mediafire [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│ • ${prefix}soundcloud [url]
│ • ${prefix}telesticker [url]
│
├ *Sfw Dan Nsfw*
│ • ${prefix}waifu
│ • ${prefix}husbu
│ • ${prefix}loli
│ • ${prefix}milf
│ • ${prefix}cosplay
│ • ${prefix}wallml
│ • ${prefix}futanari
│ • ${prefix}nekoh
│ • ${prefix}anal
│ • ${prefix}hentai
│ • ${prefix}ahegao
│ • ${prefix}ass
│ • ${prefix}blowjob
│ • ${prefix}bdsm
│ • ${prefix}cuckold
│ • ${prefix}cum
│ • ${prefix}ero
│ • ${prefix}femdom
│ • ${prefix}foot
│ • ${prefix}gangbang
│ • ${prefix}glasses
│ • ${prefix}masturbation
│ • ${prefix}orgy
│ • ${prefix}panties
│ • ${prefix}pussy
│ • ${prefix}things
│ • ${prefix}yuri
│ • ${prefix}neko
│
├ *Asupan*
│ • ${prefix}asupan
│ • ${prefix}ukty
│ • ${prefix}ghea
│ • ${prefix}rikagusriani
│ • ${prefix}bocil
│ • ${prefix}santuy
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}attp
│ • ${prefix}ttp
│ • ${prefix}toimg
│ • ${prefix}smeme [text]
│ • ${prefix}memegen [text|text2]
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}tourl [image/video]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│
├ *Education*
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}surah [nomor surah]
│ • ${prefix}brainly [soal]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
│ 
├ *Other*
│ • ${prefix}ssweb
│ • ${prefix}infogempa
│ • ${prefix}upswvideo
│ • ${prefix}upswteks
│ • ${prefix}upswimage
│ • ${prefix}searchgc [link]
│ • ${prefix}playstore [nama apk]
│
├ *Game*
│ • ${prefix}tebakgambar 
│ • ${prefix}truth
│ • ${prefix}dare
│ • ${prefix}gaycek
│ • ${prefix}sangecek
│ • ${prefix}lesbicek
│ • ${prefix}gantengcek
│ • ${prefix}cantikcek
│ • ${prefix}cantik
│ • ${prefix}ganteng
│ • ${prefix}jelek
│ • ${prefix}goblok
│ • ${prefix}bego
│ • ${prefix}pinter
│ • ${prefix}jago
│ • ${prefix}nolep
│ • ${prefix}monyet
│ • ${prefix}babi
│ • ${prefix}beban
│ • ${prefix}baik
│ • ${prefix}jahat
│ • ${prefix}anjing
│ • ${prefix}haram
│ • ${prefix}kontol
│ • ${prefix}pakboy
│ • ${prefix}wibu
│ • ${prefix}hebat
│ • ${prefix}sadboy
│ • ${prefix}sadgirl
│ • ${prefix}apakah
│ • ${prefix}kapankah
│ • ${prefix}pakgirl
│ • ${prefix}jadian
│
├ *Info*
│ • ${prefix}owner
│ • ${prefix}daftar
│ • ${prefix}creator
│
├ *Owner*
│ • ${prefix}bc [text]
│ • ${prefix}bc2 [text]
│ • ${prefix}leave
│ • ${prefix}listgroup
│ • ${prefix}block
│ • ${prefix}unblock
│ • ${prefix}setppbot
│ • >
│ • $
│ •  => 
│
├ *Group*
│ • ${prefix}antilink 1 / 0
│ • ${prefix}antivirtex 1 / 0
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}grup open/close
│ • ${prefix}add 628
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
`
	}