const {Telegraf}= require('telegraf');

const bot =new Telegraf('5654638506:AAHZyVj5ASXw_cUBAyyADwGCnsj5yfgw9Ok');
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
    
    if (ctx.message.new_chat_members==undefined) {
        console.log('kesi add nashod')
    }
    else{
        g=0
        for (let index = 0; index < db.length; index++) {
            if (db[index].name==ctx.from.id) {
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
        
        
        for (let i = 0; i< db.length; i++) {
            
            const element = db[i];
            console.log(element.count)
        }
    }
})

bot.launch();
