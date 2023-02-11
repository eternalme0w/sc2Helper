require('dotenv').config();
const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
}); 

const openai = new OpenAIApi(configuration);

const response = openai.createCompletion({

    model: 'text-davinci-003',
    prompt: '',
    max_tokens: 900,

}).then((res) => {

	
    console.log(res.data.choices[0].text);
})





