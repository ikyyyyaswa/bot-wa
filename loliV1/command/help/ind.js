exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}
β’ Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`β³ Sedang di proses ~`
	}
exports.ok = () =>{
	return` β Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
β―ΦΈ   ΦNama :
β―ΦΈ   ΦUmur :
β―ΦΈ   ΦKelamin :
β―ΦΈ   ΦAskot :
β°β α¬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
β
β°β α¬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­ββ¬£ *List Menu*
β β’ ${prefix}menu
β β’ ${prefix}help
β β’ ${prefix}apri
β
β *Download*
β β’ ${prefix}play [query]
β β’ ${prefix}song [judul lagu]
β β’ ${prefix}pinterest [query]
β β’ ${prefix}ytmp3 [url]
β β’ ${prefix}ytmp4 [url]
β β’ ${prefix}ig [url]
β β’ ${prefix}mediafire [url]
β β’ ${prefix}tiktok [url]
β β’ ${prefix}tiktoknowm [url]
β β’ ${prefix}tiktokwm [url]
β β’ ${prefix}tiktokaudio [url]
β β’ ${prefix}soundcloud [url]
β β’ ${prefix}telesticker [url]
β
β *Sfw Dan Nsfw*
β β’ ${prefix}waifu
β β’ ${prefix}husbu
β β’ ${prefix}loli
β β’ ${prefix}milf
β β’ ${prefix}cosplay
β β’ ${prefix}wallml
β β’ ${prefix}futanari
β β’ ${prefix}nekoh
β β’ ${prefix}anal
β β’ ${prefix}hentai
β β’ ${prefix}ahegao
β β’ ${prefix}ass
β β’ ${prefix}blowjob
β β’ ${prefix}bdsm
β β’ ${prefix}cuckold
β β’ ${prefix}cum
β β’ ${prefix}ero
β β’ ${prefix}femdom
β β’ ${prefix}foot
β β’ ${prefix}gangbang
β β’ ${prefix}glasses
β β’ ${prefix}masturbation
β β’ ${prefix}orgy
β β’ ${prefix}panties
β β’ ${prefix}pussy
β β’ ${prefix}things
β β’ ${prefix}yuri
β β’ ${prefix}neko
β
β *Asupan*
β β’ ${prefix}asupan
β β’ ${prefix}ukty
β β’ ${prefix}ghea
β β’ ${prefix}rikagusriani
β β’ ${prefix}bocil
β β’ ${prefix}santuy
β
β *Convert*
β β’ ${prefix}stiker [video/image]
β β’ ${prefix}semoji π
β β’ ${prefix}attp
β β’ ${prefix}ttp
β β’ ${prefix}toimg
β β’ ${prefix}smeme [text]
β β’ ${prefix}memegen [text|text2]
β β’ ${prefix}fast [video/vn]
β β’ ${prefix}tupai [video/vn]
β β’ ${prefix}vibra [video/vn]
β β’ ${prefix}tourl [image/video]
β β’ ${prefix}robot [video/vn]
β β’ ${prefix}slow [video/vn]
β β’ ${prefix}bass [video/vn]
β β’ ${prefix}nightcore [video/vn]
β
β *Education*
β β’ ${prefix}nuliskiri [text]
β β’ ${prefix}nuliskanan [text]
β β’ ${prefix}surah [nomor surah]
β β’ ${prefix}brainly [soal]
β β’ ${prefix}foliokiri [text]
β β’ ${prefix}foliokanan [text]
β 
β *Other*
β β’ ${prefix}ssweb
β β’ ${prefix}infogempa
β β’ ${prefix}upswvideo
β β’ ${prefix}upswteks
β β’ ${prefix}upswimage
β β’ ${prefix}searchgc [link]
β β’ ${prefix}playstore [nama apk]
β
β *Game*
β β’ ${prefix}tebakgambar 
β β’ ${prefix}truth
β β’ ${prefix}dare
β β’ ${prefix}gaycek
β β’ ${prefix}sangecek
β β’ ${prefix}lesbicek
β β’ ${prefix}gantengcek
β β’ ${prefix}cantikcek
β β’ ${prefix}cantik
β β’ ${prefix}ganteng
β β’ ${prefix}jelek
β β’ ${prefix}goblok
β β’ ${prefix}bego
β β’ ${prefix}pinter
β β’ ${prefix}jago
β β’ ${prefix}nolep
β β’ ${prefix}monyet
β β’ ${prefix}babi
β β’ ${prefix}beban
β β’ ${prefix}baik
β β’ ${prefix}jahat
β β’ ${prefix}anjing
β β’ ${prefix}haram
β β’ ${prefix}kontol
β β’ ${prefix}pakboy
β β’ ${prefix}wibu
β β’ ${prefix}hebat
β β’ ${prefix}sadboy
β β’ ${prefix}sadgirl
β β’ ${prefix}apakah
β β’ ${prefix}kapankah
β β’ ${prefix}pakgirl
β β’ ${prefix}jadian
β
β *Info*
β β’ ${prefix}owner
β β’ ${prefix}daftar
β β’ ${prefix}creator
β
β *Owner*
β β’ ${prefix}bc [text]
β β’ ${prefix}bc2 [text]
β β’ ${prefix}leave
β β’ ${prefix}listgroup
β β’ ${prefix}block
β β’ ${prefix}unblock
β β’ ${prefix}setppbot
β β’ >
β β’ $
β β’  => 
β
β *Group*
β β’ ${prefix}antilink 1 / 0
β β’ ${prefix}antivirtex 1 / 0
β β’ ${prefix}hidetag [text]
β β’ ${prefix}linkgrup
β β’ ${prefix}grup open/close
β β’ ${prefix}add 628
β β’ ${prefix}tagall
β β’ ${prefix}kick @tag
β β’ ${prefix}setdesc [text] 
β β’ ${prefix}setname [text] 
β°ββ¬£
`
	}