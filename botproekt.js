const TelegramApi = require('node-telegram-bot-api');

const bot = new TelegramApi('5812002140:AAHnDcjR9HRWRVYwUql4rgabDbyCtyMxw3g', {polling: true})

const raspisanie = {




    monday: ['Понедельник:','Кл.час','Алгебра','Биология','География','Русский язык','История','Черчение','Физ-ра',],
    thuesday: ['Вторник:','Физика','Химя','Литература','Обществознание','Англиский язык','Геометрия','Информатика(1)',],
    wensday: ['Среда:','Информатика(2)','Родной Русский','География','Англиский язык','Алгебра','Литература','Физика',],
    thursday:['Четверг:','Русский язык','Физика','Геометрия','Химя','ОБЖ','Англиский язык','ПД',],
    friday:['Пятница:','Физ-ра','История','Биология','Немецкий язык','Алгебра','Литература',],

}

const print = day => { 

    let result = day[0]+'\n' 

    for (let i=1; i<day.length; i++){

        result+=day[i]+'\n'

    }
    return result 
}






bot.on('message', msg => {

    const text = msg.text 

    const chatId = msg.chat.id 

    if(text==='/start'){

        bot.sendMessage(chatId,'Привет, я твой бот помошник для школы')

        bot.sendSticker(chatId,'CAACAgIAAxkBAAIBt2PgBOJCQK-GhAy9uHQCvt99qGk2AAKsFQACZj4ISetkezw6-wqpLgQ')
    }     

    if(text==='Расписание'){

    const thuesdayR = print(raspisanie.thuesday)

    const mondayR = print(raspisanie.monday)

    const wensdayR = print(raspisanie.wensday)

    const thursdayR = print(raspisanie.thursday)

    const fridayR = print(raspisanie.friday)

        bot.sendMessage(chatId,mondayR)

        bot.sendMessage(chatId,thuesdayR) 

        bot.sendMessage(chatId,wensdayR)

        bot.sendMessage(chatId,thursdayR)
        
        bot.sendMessage(chatId,fridayR)


    }


})

    



