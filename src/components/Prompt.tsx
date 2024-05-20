"use client";

import Image from "next/image";
import { useChat } from 'ai/react';

export default function Prompt() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id: new Date().toISOString(),
                role: "system",
                content: "Eres un especialista en generar prompts para saber cual es la mejor manera de preguntarle y de estructurar los prompts en chat GPT, contesta especificamente las mejores practicas para esto y da ejemplos "
            }
        ]
    });

    return (
        <div className="flex flex-col items-center justify-between p-24 h-full">
            <div className="overflow-y-auto flex-grow">
                {messages
                    .filter((message) => message.role === "user" || message.role === "assistant")
                    .map((message, index) => (
                        <div className={`chat ${message.role === 'assistant' ? 'chat-end' : 'chat-start'}`} key={index}>
                            <div className="chat-image avatar">
                                <div className="w-10">
                                    <Image alt="User" className="rounded-full" src="https://randomuser.me/api/portraits/lego/4.jpg" fill />
                                </div>
                            </div>
                            <div className="chat-bubble">{message.content}</div>
                        </div>
                    ))}
            </div>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-2">
                    <textarea
                        value={input}
                        onChange={handleInputChange}
                        className="resize-none border rounded-lg py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 max-h-20 min-h-10"
                        placeholder="Genera tu Prompt aquí..."
                    ></textarea>
                    <button
                        className="bg-purple-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300 transform hover:scale-95 active:scale-100"
                        type='submit'>
                        send
                    </button>
                </form>
            </div>
        </div>
    );
}

