const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();
const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({   

    apiKey: "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",

}); 

const openai = new OpenAIApi(configuration);
const bot = new TelegramApi(process.env.TOKEN, {polling: true})


const start = () => {

    bot.on('message', msg => {

        const opts = {

            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [["Расписание на сегодня"],["Расписание на неделю"]]
            }
        };

        const text = msg.text;
        const chatId = msg.chat.id;


        if (text === '/start') {

            return bot.sendMessage(chatId, 'Чем могу помочь?');

        } else {

            const response = openai.createCompletion({

                model: 'text-davinci-003',
                prompt: text,
                top_p: 1,
                temperature: 0.6,
                frequency_penalty: 0.5,
                max_tokens: 3000

            }).then((res) => {

                bot.sendMessage(chatId, res.data.choices[0].text);
            })

        }

        
    })

}


start();




