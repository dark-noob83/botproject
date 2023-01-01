const {Telegraf}= require('telegraf');
const bot =new Telegraf('5654638506:AAHZyVj5ASXw_cUBAyyADwGCnsj5yfgw9Ok');
const { Keyboard ,Key} = require('telegram-keyboard')

const db=[]

bot.start(ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'سلام خوش امدید',{
    })
})


bot.command('member',ctx=>{
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id,"list of memebers")
})


bot.on('message',ctx=>{
    // console.log(ctx.message)
    const keyboard = Keyboard.make([
    Key.callback('پروفایل من👤','profile'),
    Key.callback('تماس با مدیر📞','admin'), 
    Key.callback('ثبت نام 📜','register'),
  ]).inline()


  if (ctx.message.text==='👤پروفایل من'||
    ctx.message.text==='تماس با مدیر📞'||
    ctx.message.text==='ثبت نام 📜'){
    //    ctx.reply('dar khedmatm', keyboard.inline()) 
       ctx.reply('dar khedmatm', keyboard.reply())   
  }


  bot.action('profile',ctx=>{
    console.log('salam')
  })


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
