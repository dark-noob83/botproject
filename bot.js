const {Telegraf}= require('telegraf');
const bot =new Telegraf('5654638506:AAHZyVj5ASXw_cUBAyyADwGCnsj5yfgw9Ok');
const { Keyboard } = require('telegram-keyboard')
const db=[]
// for adding keyboard button
const keyboard = Keyboard.make([
    ['پروفایل من👤'],
    ['تماس با مدیر📞'], 
    ['ثبت نام 📜'],
    ['ثبت تبلیغ🖋️','امار تبلیغات🔥','فوروارد همگانی🧷'],
])
// start bot
bot.start(ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'سلام خوش امدید',{
    }) 
         ctx.reply('در خدمتم', keyboard.reply())   
})

// action button of my profile
bot.hears('پروفایل من👤',ctx=>{
     id=ctx.from.username
     if(ctx.from.username==undefined){
        id='ایدی موجود نمیباشد'
     }
    let name=ctx.from.first_name
    g=0
    var emtiaz=0;
    for (let index = 0; index < db.length; index++){
        if (db[index].name==ctx.from.id ){
            g++;
            emtiaz =  db[index].count
        }
    }
    if(g==0){
        emtiaz=0;
    }
    const money=10000*emtiaz
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id,`اسم شما : ${name} \n ایدی شما : ${id} \n امتیاز شما : ${emtiaz} \n حساب شما : ${money} \n`)
  });


//   action button for contact with admin
  bot.hears('تماس با مدیر📞',ctx=>{
       bot.telegram.sendMessage(ctx.chat.id,'ایدی ادمین : \n https://t.me/Arman3831')

// action button for register
  });
  bot.hears('ثبت نام 📜',ctx=>{  
        bot.telegram.sendMessage(ctx.chat.id,'register')
        
  });
  bot.hears('ثبت تبلیغ🖋️',ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'Ad')
  });
  bot.hears('امار تبلیغات🔥',ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'Amar ad')
  })
  bot.hears('فوروارد همگانی🧷',ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'forward to all')
  })

// adding member 
    bot.on('message',ctx=>{
    if (ctx.message.new_chat_members!=undefined){
        g=0
        for (let index = 0; index < db.length; index++){
            if (db[index].name==ctx.from.id ){
                db[index].count++
                g++;
            }
        }
        if (g==0){
            db.push({
                name:ctx.message.from.id,
                count:1
            })
        }
        
    }
})
 
bot.launch();