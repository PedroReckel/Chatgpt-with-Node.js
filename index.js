let OpenAI = require('openai');

let dotenv = require('dotenv');
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "O que faz um programador?" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();