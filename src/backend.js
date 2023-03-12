const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {Configuration, OpenAIApi} = require('openai');

const config = new Configuration({
    apiKey: "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",
})

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
    const { prompt } = req.body
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        max_tokens: 2048,
        temperature: 0,
        prompt
    })
    res.send(completion.data);
})

const port = 8080
app.listen(port, ()=> {
    console.log(`Server listening on ${port}`)
})