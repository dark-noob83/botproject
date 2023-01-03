const {Telegraf}= require('telegraf');
const bot =new Telegraf('5654638506:AAHZyVj5ASXw_cUBAyyADwGCnsj5yfgw9Ok');
const { Keyboard } = require('telegram-keyboard')
const db=[]
const chatId=[]
// for adding keyboard button
const keyboard = Keyboard.make([
    ['پروفایل من👤'],
    ['تماس با مدیر📞'], 
    ['ثبت نام 📜'],
    ['🧔اطلاعات شخص','امار ربات🔥','فوروارد همگانی🧷'],
])

const keyboard1 = Keyboard.make([
  ['پروفایل من👤'],
  ['تماس با مدیر📞'], 
  ['ثبت نام 📜'],
])

// start bot
bot.start(ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'سلام خوش امدید',{
    }) 
    chatId.push(ctx.chat.id);
    // if(ctx.from.username==='Shombosgombolii'){
      ctx.reply('در خدمتم', keyboard.reply())
    // }
    // else{
    //   ctx.reply('در خدمتم', keyboard1.reply())
    // }
            
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
    bot.telegram.sendMessage(ctx.chat.id,`اسم شما : ${name} \n ایدی شما : ${id} \n امتیاز شما : ${emtiaz} \n حساب شما : ${money} \n`)
  });


//   action button for contact with admin
  bot.hears('تماس با مدیر📞',ctx=>{
       bot.telegram.sendMessage(ctx.chat.id,'ایدی ادمین : \n https://t.me/Tiz_par')

// action button for register
  });
  bot.hears('ثبت نام 📜',ctx=>{  
    console.log(ctx.chat.id)
    //5591644774
    bot.telegram.sendMessage(5591644774,'salam')
        bot.telegram.sendMessage(ctx.chat.id,'برای ثبت نام \n نام و نام خانوادگی دارنده کارت \n شماره کارت \n شماره شبا \n را در یک پیام و حتما در یک پیام وارد کنید')
        
  });
  bot.hears('🧔اطلاعات شخص',ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'آیدی فرد موزد نظر را وارد کنید')
  });
  bot.hears('امار تبلیغات🔥',ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'Amar ad')
  })
  bot.hears('فوروارد همگانی🧷',ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'لطفا پیام خود را وارد کنید ')
  })


    bot.on('message',ctx=>{
      if(ctx.message.message_id-2=='ثبت نام 📜'){
        bot.telegram.sendMessage(ctx.chat.id,'salam')
      }


     if(ctx.message.message_id-2=='🧔اطلاعات شخص'){
      find=0;
      for(let i=0;i<db.length;i++){
        if(db[i].id===ctx.message.text-'@'){
          find++;
          bot.telegram.sendMessage(ctx.chat.id,`فرد مورد نظر پیدا شد \n ایدی : ${db[i].id} \n  امتیاز : ${db[i].cout}`)}
      }
      
     
     if(find==0){
      bot.telegram.sendMessage(ctx.chat.id,'فرد مورد نظر پیدا نشد' )
     }
    }
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
                id:ctx.from.username,
                count:1
            })
        }
        
    }
})
 
bot.launch();