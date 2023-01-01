const {Telegraf}= require('telegraf');

const bot =new Telegraf('5654638506:AAHZyVj5ASXw_cUBAyyADwGCnsj5yfgw9Ok');

bot.start(ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'salam khosh amadid',{

    })
})



bot.launch();
