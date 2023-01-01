const {Telegraf}= require('telegraf');
const bot =new Telegraf('5654638506:AAHZyVj5ASXw_cUBAyyADwGCnsj5yfgw9Ok');
const { Keyboard } = require('telegram-keyboard')

const db=[]
const keyboard = Keyboard.make([
    ['پروفایل من👤'],
    ['تماس با مدیر📞'], 
    ['ثبت نام 📜'],
])
bot.start(ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'سلام خوش امدید',{
    })
    
  //ctx.reply('dar khedmatm', keyboard.inline()) 
         ctx.reply('در خدمتم', keyboard.reply())   
})




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
  bot.hears('تماس با مدیر📞',ctx=>{
    
        bot.telegram.sendMessage(ctx.chat.id,'ایدی ادمین : \n https://t.me/Arman3831')
    
  });
  bot.hears('ثبت نام 📜',ctx=>{
        
        bot.telegram.sendMessage(ctx.chat.id,'register')
    
  });
bot.on('message',ctx=>{
    // console.log(ctx.message)
    


//  if (ctx.message.text==='👤پروفایل من'||
//     ctx.message.text==='تماس با مدیر📞'||
//     ctx.message.text==='ثبت نام 📜')
//     {
//         ctx.reply('dar khedmatm', keyboard.inline()) 
//          ctx.reply('dar khedmatm', keyboard.reply())   
//     }

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