exports.wait = () => {
	return`*π§­γ WAIT γ IN PROCESS*`
}

exports.succes = () => {
	return`*γ SUCCES γ*`
}

exports.lvlon = () => {
	return`*γ ENABLE γ LEVELING*`
}

exports.lvloff = () => {
	return`*γ DISABLE γ LEVELING*`
}

exports.lvlnul = () => {
	return`*YOUR LEVEL IS STILL EMPTY π*`
}

exports.lvlnoon = () => {
	return`*GRUB LEVEL IS NOT ACTIVATED YET π*`
}

exports.noregis = () => {
	return`*γ REGISTRATION γ*\n\n*HOW TO REGISTER π€, TYPE ${prefix}daftar name|age* \n*EXAMPLE ${prefix}daftar Abhinav|22*`
}

exports.rediregis = () => {
	return`*γ ALREADY REGISTERED γ*\n\n*YOU ARE ALREADY REGISTERED π€£*`
}

exports.stikga = () => {
	return`*WELL FAILED TRY TO REPEAT IN A MOMENT*`
}

exports.linkga = () => {
	return`*SORRY, INVAILD LINK!! PLEASE ENTER A VAILD LINK π*`
}

exports.groupo = () => {
	return`*γGROUP ONLYγ*`
}

exports.ownerb = () => {
	return`*γOWNER BOT ONLYγ*`
}

exports.ownerg = () => {
	return`*γOWNER GROUP ONLYγ*`
}

exports.admin = () => {
	return`*γADMIN GROUP ONLYγ*`
}

exports.badmin = () => {
	return`*γMAKE SURE THAT THE BOT IS AN ADMIN IN THIS GROUPγ*`
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
	return`*γ REGISTRATION γ*\n\nTOFIND OUT IF YOU HAVE REGISTERED, PLEASE CHECK THE MESSAGE I SENT \n\nNOTE:\n*IF YOU HAVEN'T GOT THE MESSAGE. MEANS YOU HAVEN'T SAVED YOUR BOT NUMBER*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*γ COUNTRY DATA γ*\n\nYOU HAVE REGISTERED WITH THE DATA \n\nβββ±ππππ\nββ±${namaUser}\nβββ±ππ€ππππ‘\nββ±wa.me/${sender.split("@")[0]}\nβββ±πππ\nββ±${umurUser}\nβββ±π‘ππππ’π£π‘ππ£πππ  π£πππ\nββ±${time}\n\nβββ *NS* ββ\nβ£β±${serialUser}\nββ±NOTE : DON'T FORGET THIS NUMBER BECAUSE IT'S IMPORTANT!`
}

exports.cmdnf = (prefix, command, pushname) => {
	return`HEY ${pushname} , *${prefix}${command}* THIS COMMAND IS NOT IN MY MENU PLEASE TYPE *${prefix}menu* FOR ALL COMMANDS`
}

exports.owneresce = (pushname) => {
	return`*SORRY BUT ${pushname} NOT THE OWNER SCRIPT*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*ββ±YOUR LEVEL : ${getLevelingLevel(sender)}*\n*β£β±TYPE OF COMMAND : ${command}*\n*ββ±LEVEL REQUIREMENTS : ${aha}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*ββ±YOUR LEVEL : ${getLevelingLevel(sender)}*\n*β£β±TYPE OF COMMAND : ${command}*\n*ββ±LEVEL REQUIREMENTS : ${ahb}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*ββ±YOUR LEVEL : ${getLevelingLevel(sender)}*\n*β£β±TYPE OF COMMAND : ${command}*\n*ββ±LEVEL REQUIREMENTS : ${ahc}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*ββ±YOUR LEVEL : ${getLevelingLevel(sender)}*\n*β£β±TYPE OF COMMAND : ${command}*\n*ββ±LEVEL REQUIREMENTS : ${ahd}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*ββ±YOUR LEVEL : ${getLevelingLevel(sender)}*\n*β£β±TYPE OF COMMAND : ${command}*\n*ββ±LEVEL REQUIREMENTS : ${ahe}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*SORRY ${pushname} , YOUR LEVEL IS NOT SUFFICIENT*\n\n*ββ±YOUR LEVEL : ${getLevelingLevel(sender)}*\n*β£β±TYPE OF COMMAND : ${command}*\n*ββ±LEVEL REQUIREMENTS : ${ahf}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

//anjing INFO DEVELOPER jangan di ganti bangsat!!
//cuma numpang nama doang lu !!
//kalau INFO DEVELOPER ga di ganti gw ikhlas !!
//---------------------------
//Fuck dont change INFO DEVELOPER !!
//You only get your name fuck !!
//If INFO DEVELOPER not in change, its okey!!
exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `γ *WHITE WALKER* γ
β₯ *γ INFO DEVELOPER γ*
  β€β£ NAME:   ΙͺΝ₯α΄Ν­'sα·€ α΄Ν«α΄Ν€ α΄Ν­α΄Ν¦α΄ Ν―ΙͺΝ₯ΚΝ¨
  β€β£ WHATSAPP: wa.me/19163126173
  ----------------------------------

β₯ *γ YOUR INFO γ*
  β€β£ Prefix: γ  *${prefix}*  γ
  β€β£ Name: *${pushname}*
  β€β£ Your Money: *Rs${uangku}*
  β€β£ Number: *${sender.split("@")[0]}*
  β€β£ XP: *${getLevelingXp(sender)}/${reqXp}*
  β€β£ Level: *${getLevelingLevel(sender)}*
  β€β£ User register : *${_registered.length}*
  
β₯ *γ ABOUT γ*
  β
  βΒ» β£ ${prefix}info
  βΒ» β£ ${prefix}snk
  βΒ» β£ ${prefix}lpr 
  βΒ» β£ ${prefix}request
  βΒ» β£ ${prefix}blocklist
  βΒ» β£ ${prefix}ping
  βΒ» β£ ${prefix}buypremium
  βΒ» β£ ${prefix}hargaprem
  βΒ» β£ ${prefix}menupict
  ββ β£ ${prefix}menuowner
  
β₯ *γ NEW FEATURE γ*
  β
  βΒ» β£ ${prefix}nsfwloli
  βΒ» β£ ${prefix}asupan
  βΒ» β£ ${prefix}wiki
  βΒ» β£ ${prefix}spamcall
  βΒ» β£ ${prefix}tebakgambar
  βΒ» β£ ${prefix}babi
  βΒ» β£ ${prefix}caklontong
  βΒ» β£ ${prefix}katailham
  βΒ» β£ ${prefix}katabijak
  βΒ» β£ ${prefix}fakta
  βΒ» β£ ${prefix}mimpi
  βΒ» β£ ${prefix}husbu
  βΒ» β£ ${prefix}imagemountain
  βΒ» β£ ${prefix}loli
  βΒ» β£ ${prefix}imagegame
  βΒ» β£ ${prefix}imagecyberspace
  βΒ» β£ ${prefix}imageislamic
  βΒ» β£ ${prefix}blackpink
  βΒ» β£ ${prefix}randomexo
  βΒ» β£ ${prefix}randombts
  ββ β£ ${prefix}menuownerwaifu

β₯ *γ MAKER γ*
  β
  βΒ» β£ ${prefix}nulis
  βΒ» β£ ${prefix}sticker
  βΒ» β£ ${prefix}stickergif
  βΒ» β£ ${prefix}toimg
  βΒ» β£ ${prefix}hartatata
  βΒ» β£ ${prefix}quotemaker
  βΒ» β£ ${prefix}galaxtext
  βΒ» β£ ${prefix}pupycut
  βΒ» β£ ${prefix}galaxstyle
  βΒ» β£ ${prefix}hologram
  βΒ» β£ ${prefix}textbyname
  βΒ» β£ ${prefix}herrypoter
  βΒ» β£ ${prefix}greanneon
  ββ β£ ${prefix}metallogo
  
β₯ *γ MEDIA γ*
  β
  ββΒ» β£ ${prefix}tribunews
  
β₯ *γ OTHER FITUR γ*
  β
  βΒ» β£ ${prefix}ssweb
  βΒ» β£ ${prefix}hilih
  βΒ» β£ ${prefix}alay
  βΒ» β£ ${prefix}say
  βΒ» β£ ${prefix}wiki
  βΒ» β£ ${prefix}kbbi
  βΒ» β£ ${prefix}map
  βΒ» β£ ${prefix}kalkulator
  βΒ» β£ ${prefix}lirik
  βΒ» β£ ${prefix}brainly
  βΒ» β£ ${prefix}bitly
  βΒ» β£ ${prefix}chord
  βΒ» β£ ${prefix}katabijak 
  βΒ» β£ ${prefix}faktaunik 
  βΒ» β£ ${prefix}faktaunikl
  βΒ» β£ ${prefix}holoh
  βΒ» β£ ${prefix}halah
  βΒ» β£ ${prefix}huluh
  βΒ» β£ ${prefix}heleh
  βΒ» β£ ${prefix}hurufterbalik
  βΒ» β£ ${prefix}lirik
  βΒ» β£ ${prefix}alay2
  βΒ» β£ ${prefix}fml
  βΒ» β£ ${prefix}katadilan
  βΒ» β£ ${prefix}katabucin
  βΒ» β£ ${prefix}katabucin2
  βΒ» β£ ${prefix}cerpen
  βΒ» β£ ${prefix}quotes
  βΒ» β£ ${prefix}bacotanhacker
  βΒ» β£ ${prefix}quotedoraemon
  βΒ» β£ ${prefix}infofilm
  βΒ» β£ ${prefix}igvideo
  βΒ» β£ ${prefix}pantun
  ββ β£ ${prefix}artinama
  
β₯ *γ MAGIC SHELL γ*
  β
  βΒ» β£ ${prefix}gantengcek
  βΒ» β£ ${prefix}cantikcek
  βΒ» β£ ${prefix}sangecek
  βΒ» β£ ${prefix}gaycek
  βΒ» β£ ${prefix}lesbicek
  βΒ» β£ ${prefix}watak
  βΒ» β£ ${prefix}hobby
  βΒ» β£ ${prefix}apakah
  βΒ» β£ ${prefix}kapankah
  βΒ» β£ ${prefix}bisakah
  βΒ» β£ ${prefix}bagaimanakah
  ββ β£ ${prefix}rate
  
β₯ *γ DOWNLOADER γ*
  β
  βΒ» β£ ${prefix}1cak
  βΒ» β£ ${prefix}pinterest
  βΒ» β£ ${prefix}ytmp3
  βΒ» β£ ${prefix}ytmp4
  βΒ» β£ ${prefix}play
  βΒ» β£ ${prefix}fototiktok
  βΒ» β£ ${prefix}igpost
  βΒ» β£ ${prefix}igtv
  ββ β£ ${prefix}joox
  
β₯ *γ FIND TARGET γ*
  β
  βΒ» β£ ${prefix}mutual
  ββ β£ ${prefix}next
  
β₯ *γ RANDOM PICTUE γ*
  ββ *γ ANIME γ*
  βΒ» β£ ${prefix}loli
  βΒ» β£ ${prefix}neko
  βΒ» β£ ${prefix}waifu
  βΒ» β£ ${prefix}animecry
  βΒ» β£ ${prefix}animehug
  βΒ» β£ ${prefix}osakana
  βΒ» β£ ${prefix}naruto
  βΒ» β£ ${prefix}anime
  βΒ» β£ ${prefix}husbu
  βΒ» β£ ${prefix}animegirl
  βΒ» β£ ${prefix}animeboy
  ββ β£ ${prefix}nekonime
  β
  ββ *γ RANDOM KPOP γ*
  βΒ» β£ ${prefix}randomkpop
  βΒ» β£ ${prefix}randombts
  βΒ» β£ ${prefix}randomexo
  ββ β£ ${prefix}blackpink
  β
  ββ *γ CARTOON γ*
  βΒ» β£ ${prefix}doraemon
  ββ β£ ${prefix}pokemon
  β
  ββ *γ ANIMAL γ*
  βΒ» β£ ${prefix}anjing
  βΒ» β£ ${prefix}kucing
  βΒ» β£ ${prefix}hamster
  ββ β£ ${prefix}kelinci
  β
  ββ *γ TRANSPORT γ*
  βΒ» β£ ${prefix}mobil
  βΒ» β£ ${prefix}motor
  ββ β£ ${prefix}sepeda
  β
  ββ *γ AESTHETIC γ*
  βΒ» β£ ${prefix}aesthetic
  βΒ» β£ ${prefix}bluesky
  βΒ» β£ ${prefix}flower
  βΒ» β£ ${prefix}icecream
  ββ β£ ${prefix}pemandangan
  β
  ββ *γ QUOTES γ*
  βΒ» β£ ${prefix}quotes
  βΒ» β£ ${prefix}quoteskehidupan
  βΒ» β£ ${prefix}quotesislami
  βΒ» β£ ${prefix}katabijak
  βΒ» β£ ${prefix}katailham
  βΒ» β£ ${prefix}quotesnasehat
  ββ β£ ${prefix}quotesmotivasi
  

β₯ *γ LIMIT & MONEY & LB γ*
  β
  βΒ» β£ ${prefix}limit
  βΒ» β£ ${prefix}buylimit
  βΒ» β£ ${prefix}buypremiumlimit
  βΒ» β£ ${prefix}transfer
  ββ β£ ${prefix}leaderboard
  
β₯ *γ GROUP γ*
  β
  βΒ» β£ ${prefix}promote [@tag]
  βΒ» β£ ${prefix}demote [@tag]
  βΒ» β£ ${prefix}tagall
  βΒ» β£ ${prefix}listadmin
  βΒ» β£ ${prefix}wakillist
  βΒ» β£ ${prefix}premiumlist
  βΒ» β£ ${prefix}banlist
  βΒ» β£ ${prefix}blocklist
  βΒ» β£ ${prefix}linkgc
  βΒ» β£ ${prefix}mining
  βΒ» β£ ${prefix}hidetag
  βΒ» β£ ${prefix}grouplist
  βΒ» β£ ${prefix}add
  βΒ» β£ ${prefix}kick [@tag]
  βΒ» β£ ${prefix}setname
  βΒ» β£ ${prefix}setdesc
  βΒ» β£ ${prefix}setpp
  βΒ» β£ ${prefix}listadmin
  βΒ» β£ ${prefix}linkgc
  βΒ» β£ ${prefix}leave
  βΒ» β£ ${prefix}mining
  βΒ» β£ ${prefix}level
  βΒ» β£ ${prefix}grup [close/open)
  βΒ» β£ ${prefix}welcome [1/0]
  βΒ» β£ ${prefix}nsfw [1/0]
  βΒ» β£ ${prefix}antilink [1/0]
  βΒ» β£ ${prefix}leveling [1/0]
  ββ β£ ${prefix}simih [1/0]
  
β₯ *γ SOUND γ*
  β
  βΒ» β£ ${prefix}hai
  βΒ» β£ ${prefix}hallo [only computer]
  βΒ» β£ ${prefix}aine
  βΒ» β£ ${prefix}soundplaydate [only computer]
  βΒ» β£ ${prefix}soundbakahentai [only computer]
  βΒ» β£ ${prefix}sayonichan [only computer]
  ββ β£ ${prefix}gtts

β₯ *γ STALK γ*
  β
  βΒ» β£ ${prefix}tiktokstalk
  ββ β£ ${prefix}igstalk
  
β₯ *γ WIBU γ*
  β
  βΒ» β£ ${prefix}neonime
  ββ β£ ${prefix}wait
  
β₯ *γ APK γ*
  βΒ» β£ ${prefix}apkpure
  βΒ» β£ ${prefix}happymod
  ββ β£ ${prefix}moddroid
  
β₯ *γ 18+ Nsfw* γ
  |
  βΒ» β£ ${prefix}blowjob
  βΒ» β£ ${prefix}randomhentai
  βΒ» β£ ${prefix}sfw
  βΒ» β£ ${prefix}nsfw
  βΒ» β£ ${prefix}randomsfw
  βΒ» β£ ${prefix}randomnsfw
  ββ β£ ${prefix}nsfwneko
  
β₯ *γ FUN γ*
  β
  βΒ» β£ ${prefix}truth
  βΒ» β£ ${prefix}dare
  βΒ» β£ ${prefix}slap
  βΒ» β£ ${prefix}tampar
  βΒ» β£ ${prefix}nangis
  βΒ» β£ ${prefix}cium
  ββ β£ ${prefix}simi
  
β₯ *γ INFORMATION γ*
  β
  βΒ» β£ ${prefix}bahasa
  βΒ» β£ ${prefix}kodenegara
  βΒ» β£ ${prefix}infogempa
  βΒ» β£ ${prefix}infocuaca
  βΒ» β£ ${prefix}infonomor
  βΒ» β£ ${prefix}covidindo
  βΒ» β£ ${prefix}covidglobal
  βΒ» β£ ${prefix}ceknamaff
  βΒ» β£ ${prefix}namaninja
  βΒ» β£ ${prefix}newsinfo
  ββ β£ ${prefix}ceknamaml
  
β₯ *γ OWNER γ*
  β
  βΒ» β£ ${prefix}setprefix
  βΒ» β£ ${prefix}setreply
  βΒ» β£ ${prefix}setppbot
  βΒ» β£ ${prefix}block
  βΒ» β£ ${prefix}unblock
  βΒ» β£ ${prefix}setprefix
  βΒ» β£ ${prefix}leave
  βΒ» β£ ${prefix}kickall
  βΒ» β£ ${prefix}event [1/0]
  βΒ» β£ ${prefix}bc
  βΒ» β£ ${prefix}bcgc
  βΒ» β£ ${prefix}clone
  ββ β£ ${prefix}clearall
  
β₯ *γ OTHER γ*
  β
  βΒ» β£ ${prefix}wame
  βΒ» β£ ${prefix}qrcode
  ββ β£ ${prefix}afk
  
β₯ *γ POWERED BY WHITE WALKER γ*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*γ HAPPY γ*
  β€β£ Name : ${pushname}
  β€β£ Number : ${sender.split("@")[0]}
  β€β£ Xp : ${getLevelingXp(sender)}
  β€β£ Limit :  +3
  β€β£ Rank :  ${role}
  β€β£ Level : ${getLevel} β± ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*SORRY ${pushname} TODAY'S LIMIT IS UP π€«*`
}

exports.limitcount = (limitCounts) => {
	return`
*γ LIMIT COUNT γ*
THE REST OF YOUR LIMITS : ${limitCounts}

NOTE : TO GET LIMITS, YOU CAN LEVEL UP THROUGH GROUPS OR BUYLIMIT.
`}

exports.satukos = () => {
	return`*Add parameter 1/enable or 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`βͺ *γ ATM γ*\n  ββ β€β£ *Name* : ${pushname}\n  ββ β€β£ *Number* : ${sender.split("@")[0]}\n  ββ β€β£ *Money* : ${uangkau}
`}
