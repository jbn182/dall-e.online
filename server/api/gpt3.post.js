import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)

export default defineEventHandler( async (event) => {
    var { textGPT } = await readBody(event);

    var image = await openai.createImage({
        prompt: textGPT,
        n: 1,
        size: "1024x1024",
    });

    return {
        result: image.data
    }
})