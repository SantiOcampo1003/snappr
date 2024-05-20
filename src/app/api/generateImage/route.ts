import { NextResponse } from "next/server";
import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)


export async function POST(request: Request) {

    const body = await request.json()
    const promptString = body.prompt;

    if (!promptString) {
        return NextResponse.json('the prompt is necesary', {
            status: 400
        })
    }

    const aiResponse = await openai.createImage({
        prompt: promptString,
        size: "512x512",
        response_format: "url",
    })
    const data = (await aiResponse.json()) as ResponseTypes["createImage"]

    const url = data.data?.[0]?.url

    console.log({ url })
    return NextResponse.json({ url })
}    