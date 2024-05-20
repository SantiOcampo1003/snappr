import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req: Request) {

    const { messages } = await req.json();
    const response = await openai.createChatCompletion({
        model: 'gpt-4-turbo',
        stream: true,
        temperature: 0.9,
        messages,
    });

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)

}