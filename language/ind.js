exports.wait = () => {
	return`*🧭「 WAIT 」 IN PROCESS*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*YOUR LEVEL IS STILL EMPTY 😖*`
}

exports.lvlnoon = () => {
	return`*GRUB LEVEL IS NOT ACTIVATED YET 🙄*`
}

exports.noregis = () => {
	return`*「 REGISTRATION 」*\n\n*HOW TO REGISTER 🤔, TYPE ${prefix}daftar name|age* \n*EXAMPLE ${prefix}daftar Abhinav|22*`
}

exports.rediregis = () => {
	return`*「 ALREADY REGISTERED 」*\n\n*YOU ARE ALREADY REGISTERED 🤣*`
}

exports.stikga = () => {
	return`*WELL FAILED TRY TO REPEAT IN A MOMENT*`
}

exports.linkga = () => {
	return`*SORRY, INVAILD LINK!! PLEASE ENTER A VAILD LINK 😖*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「MAKE SURE THAT THE BOT IS AN ADMIN IN THIS GROUP」*`
}

exports.nsfwoff = () => {
	return`*NSFW IS OFF*`
}

exports.bug = () => {
	return`*PROBLEMS HAVE BEEN REPORTED TO THE OWNER OF WHITE WALKER, FALSE OR MESSY REPORTS WILL NOT BE RESPONDED TOO.*`
}

exports.wrongf = () => {
	return`*INCORRECT FORMAT/BLANK TEXT*`
}

exports.clears = () => {
	return`*CLEAR ALL SUCCESS*`
}

exports.pc = () => {
	return`*「 REGISTRATION 」*\n\nTOFIND OUT IF YOU HAVE REGISTERED, PLEASE CHECK THE MESSAGE I SENT \n\nNOTE:\n*IF YOU HAVEN'T GOT THE MESSAGE. MEANS YOU HAVEN'T SAVED YOUR BOT NUMBER*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 COUNTRY DATA 」*\n\nYOU HAVE REGISTERED WITH THE DATA \n\n┏━⊱🅝🅐🅜🅔\n┗⊱${namaUser}\n┏━⊱🅝🅤🅜🅑🅔🅡\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱🅐🅖🅔\n┗⊱${umurUser}\n┏━⊱🅡🅔🅖🅘🅢🅣🅡🅐🅣🅘🅞🅝  🅣🅘🅜🅔\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : DON'T FORGET THIS NUMBER BECAUSE IT'S IMPORTANT!`
}

exports.cmdnf = (prefix, command, pushname) => {
	return`HEY ${pushname} , *${prefix}${command}* THIS COMMAND IS NOT IN MY MENU PLEASE TYPE *${prefix}menu* FOR ALL COMMANDS`
}

exports.owneresce = (pushname) => {
	return`*SORRY BUT ${pushname} NOT THE OWNER SCRIPT*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*┏⊱YOUR LEVEL : ${getLevelingLevel(sender)}*\n*┣⊱TYPE OF COMMAND : ${command}*\n*┗⊱LEVEL REQUIREMENTS : ${aha}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*┏⊱YOUR LEVEL : ${getLevelingLevel(sender)}*\n*┣⊱TYPE OF COMMAND : ${command}*\n*┗⊱LEVEL REQUIREMENTS : ${ahb}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*┏⊱YOUR LEVEL : ${getLevelingLevel(sender)}*\n*┣⊱TYPE OF COMMAND : ${command}*\n*┗⊱LEVEL REQUIREMENTS : ${ahc}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*┏⊱YOUR LEVEL : ${getLevelingLevel(sender)}*\n*┣⊱TYPE OF COMMAND : ${command}*\n*┗⊱LEVEL REQUIREMENTS : ${ahd}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*┏⊱YOUR LEVEL : ${getLevelingLevel(sender)}*\n*┣⊱TYPE OF COMMAND : ${command}*\n*┗⊱LEVEL REQUIREMENTS : ${ahe}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*┏⊱YOUR LEVEL : ${getLevelingLevel(sender)}*\n*┣⊱TYPE OF COMMAND : ${command}*\n*┗⊱LEVEL REQUIREMENTS : ${ahf}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

//anjing INFO DEVELOPER jangan di ganti bangsat!!
//cuma numpang nama doang lu !!
//kalau INFO DEVELOPER ga di ganti gw ikhlas !!
//---------------------------
//Fuck dont change INFO DEVELOPER !!
//You only get your name fuck !!
//If INFO DEVELOPER not in change, its okey!!
exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `「 *WHITE WALKER* 」
◪ *INFO DEVELOPER*
  ❏ NAME:   ̽̽ɪͥᴛͭ'sᷤ ᴍͫᴇͤ ᴅͭᴇͦᴠͯɪͥʟͨ
  ❏ WHATSAPP: wa.me/19163126173
  ----------------------------------

◪ *YOUR INFO*
  ❏ Prefix: 「  *${prefix}*  」
  ❏ Name: *${pushname}*
  ❏ Your Money: *Rs${uangku}*
  ❏ Number: *${sender.split("@")[0]}*
  ❏ XP: *${getLevelingXp(sender)}/${reqXp}*
  ❏ Level: *${getLevelingLevel(sender)}*
  ❏ User register : *${_registered.length}*
  
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr 
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium
  ├─ ❏ ${prefix}hargaprem
  ├─ ❏ ${prefix}menupict
  └─ ❏ ${prefix}menuowner
  
◪ *NEW FEATURE*
  │
  ├─ ❏ ${prefix}nsfwloli
  ├─ ❏ ${prefix}asupan
  ├─ ❏ ${prefix}wiki
  ├─ ❏ ${prefix}spamcall
  ├─ ❏ ${prefix}tebakgambar
  ├─ ❏ ${prefix}babi
  ├─ ❏ ${prefix}caklontong
  ├─ ❏ ${prefix}katailham
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}fakta
  ├─ ❏ ${prefix}mimpi
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}imagemountain
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}imagegame
  ├─ ❏ ${prefix}imagecyberspace
  ├─ ❏ ${prefix}imageislamic
  ├─ ❏ ${prefix}blackpink
  ├─ ❏ ${prefix}randomexo
  ├─ ❏ ${prefix}randombts
  └─ ❏ ${prefix}menuownerwaifu

◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}hartatata
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}galaxtext
  ├─ ❏ ${prefix}pupycut
  ├─ ❏ ${prefix}galaxstyle
  ├─ ❏ ${prefix}hologram
  ├─ ❏ ${prefix}textbyname
  ├─ ❏ ${prefix}herrypoter
  ├─ ❏ ${prefix}greanneon
  └─ ❏ ${prefix}metallogo
  
◪ *MEDIA*
  │
  └─ ❏ ${prefix}tribunews
  
◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih [teks]
  ├─ ❏ ${prefix}alay [teks]
  ├─ ❏ ${prefix}say [teks]
  ├─ ❏ ${prefix}wiki [teks]
  ├─ ❏ ${prefix}kbbi [teks]
  ├─ ❏ ${prefix}map [teks]
  ├─ ❏ ${prefix}kalkulator
  ├─ ❏ ${prefix}lirik [teks]
  ├─ ❏ ${prefix}brainly [teks]
  ├─ ❏ ${prefix}bitly
  ├─ ❏ ${prefix}chord [teks]
  ├─ ❏ ${prefix}katabijak 
  ├─ ❏ ${prefix}faktaunik 
  ├─ ❏ ${prefix}faktaunikl
  ├─ ❏ ${prefix}holoh
  ├─ ❏ ${prefix}halah
  ├─ ❏ ${prefix}huluh
  ├─ ❏ ${prefix}heleh
  ├─ ❏ ${prefix}hurufterbalik
  ├─ ❏ ${prefix}lirik
  ├─ ❏ ${prefix}alay2
  ├─ ❏ ${prefix}fml
  ├─ ❏ ${prefix}katadilan
  ├─ ❏ ${prefix}katabucin
  ├─ ❏ ${prefix}katabucin2
  ├─ ❏ ${prefix}cerpen
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}bacotanhacker
  ├─ ❏ ${prefix}quotedoraemon
  ├─ ❏ ${prefix}infofilm
  ├─ ❏ ${prefix}igvideo
  ├─ ❏ ${prefix}pantun
  └─ ❏ ${prefix}artinama [teks]
  
◪ *KERANG AJAIB*
  │
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}cantikcek
  ├─ ❏ ${prefix}sangecek
  ├─ ❏ ${prefix}gaycek
  ├─ ❏ ${prefix}lesbicek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}bisakah
  ├─ ❏ ${prefix}bagaimanakah
  └─ ❏ ${prefix}rate
  
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}1cak
  ├─ ❏ ${prefix}pinterest [teks]
  ├─ ❏ ${prefix}ytmp3 [link]
  ├─ ❏ ${prefix}ytmp4 [link]
  ├─ ❏ ${prefix}play [teks]
  ├─ ❏ ${prefix}fototiktok
  ├─ ❏ ${prefix}igpost [teks]
  ├─ ❏ ${prefix}igtv
  └─ ❏ ${prefix}joox [teks]
  
◪ *FIND TARGET*
  │
  ├─ ❏ ${prefix}mutual
  └─ ❏ ${prefix}next
  
◪ *RANDOM PICTUE*
  │ *ANIME*
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}neko
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}animecry
  ├─ ❏ ${prefix}animehug
  ├─ ❏ ${prefix}osakana
  ├─ ❏ ${prefix}naruto
  ├─ ❏ ${prefix}anime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}animegirl
  ├─ ❏ ${prefix}animeboy
  ├─ ❏ ${prefix}nekonime
  │
  │ *RANDOM KPOP*
  ├─ ❏ ${prefix}randomkpop
  ├─ ❏ ${prefix}randombts
  ├─ ❏ ${prefix}randomexo
  ├─ ❏ ${prefix}blackpink
  │
  │ *CARTOON*
  ├─ ❏ ${prefix}doraemon
  ├─ ❏ ${prefix}pokemon
  │
  │ *ANIMAL*
  ├─ ❏ ${prefix}anjing
  ├─ ❏ ${prefix}kucing
  ├─ ❏ ${prefix}hamster
  ├─ ❏ ${prefix}kelinci
  │
  │ *TRANSPORT*
  ├─ ❏ ${prefix}mobil
  ├─ ❏ ${prefix}motor
  ├─ ❏ ${prefix}sepeda
  │
  │ *AESTHETIC*
  ├─ ❏ ${prefix}aesthetic
  ├─ ❏ ${prefix}bluesky
  ├─ ❏ ${prefix}flower
  ├─ ❏ ${prefix}icecream
  ├─ ❏ ${prefix}pemandangan
  │
  │ *QUOTES*
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}quoteskehidupan
  ├─ ❏ ${prefix}quotesislami
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}katailham
  ├─ ❏ ${prefix}quotesnasehat
  └─ ❏ ${prefix}quotesmotivasi
  

◪ *LIMIT & UANG & LB*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}buypremiumlimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}leaderboard
  
◪ *GROUP*
  │
  ├─ ❏ ${prefix}promote [@tag]
  ├─ ❏ ${prefix}demote [@tag]
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}wakillist
  ├─ ❏ ${prefix}premiumlist
  ├─ ❏ ${prefix}banlist
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}hidetag
  ├─ ❏ ${prefix}grouplist
  ├─ ❏ ${prefix}add [62]
  ├─ ❏ ${prefix}kick [@tag]
  ├─ ❏ ${prefix}setname
  ├─ ❏ ${prefix}setdesc
  ├─ ❏ ${prefix}setpp
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grup [buka/tutup)
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}antilink [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
  
◪ *SOUND*
  │
  ├─ ❏ ${prefix}hai
  ├─ ❏ ${prefix}hallo [only computer]
  ├─ ❏ ${prefix}aine
  ├─ ❏ ${prefix}soundplaydate [only computer]
  ├─ ❏ ${prefix}soundbakahentai [only computer]
  ├─ ❏ ${prefix}sayonichan [only computer]
  └─ ❏ ${prefix}gtts
  
◪ *ISLAM*
  │
  └─ ❏ ${prefix}quran
  
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk
  
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  └─ ❏ ${prefix}wait
  
◪ *APK*
  ├─ ❏ ${prefix}apkpure [teks]
  ├─ ❏ ${prefix}happymod [teks]
  ├─ ❏ ${prefix}moddroid [teks]
  
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}blowjob
  ├─ ❏ ${prefix}randomhentai
  ├─ ❏ ${prefix}sfw
  ├─ ❏ ${prefix}nsfw
  ├─ ❏ ${prefix}randomsfw
  ├─ ❏ ${prefix}randomnsfw
  └─ ❏ ${prefix}nsfwneko
  
◪ *FUN*
  │
  ├─ ❏ ${prefix}truth
  ├─ ❏ ${prefix}dare
  ├─ ❏ ${prefix}slap
  ├─ ❏ ${prefix}tampar
  ├─ ❏ ${prefix}nangis
  ├─ ❏ ${prefix}cium
  └─ ❏ ${prefix}simi
  
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infonomor
  ├─ ❏ ${prefix}covidindo
  ├─ ❏ ${prefix}covidglobal
  ├─ ❏ ${prefix}ceknamaff
  ├─ ❏ ${prefix}namaninja
  ├─ ❏ ${prefix}newsinfo
  └─ ❏ ${prefix}ceknamaml
  
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
  
◪ *OTHER*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  └─ ❏ ${prefix}afk
  
◪ *POWERED BY WHITE WALKER*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit :  +3
  ❏ Pangkat :  ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/62895330379186\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
