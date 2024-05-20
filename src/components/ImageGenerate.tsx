"use client";

import { Button } from '@material-tailwind/react';
import { useState } from 'react';


export default function ImageGenerate() {

    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-zinc-400 p-4 '>
                <form
                    className='flex gap-x-2'
                    onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true);
                        console.log(prompt);
                        try {
                            const res = await fetch('/api/generateImage', {
                                method: 'POST',
                                body: JSON.stringify({ prompt }),
                                headers: {
                                    "Content-Type": "application/json",
                                }
                            });

                            const data = await res.json();
                            console.log(data);
                            setImage(data.url);

                        } catch (error) {
                            console.log(error);
                        }
                        setLoading(false);
                        setPrompt("");
                    }}
                >
                    <input
                        type="text"
                        placeholder="Generate your Image"
                        onChange={(e) => setPrompt(e.target.value)}
                        className="bg-zinc-900 text-white px-3 py-2 my-2 w-full flex-grow "
                        value={prompt}
                    />
                    <Button disabled={loading} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className={`bg-gray-300 shadow-md text-black px-3 py-2 my disabled:opacity-50 disabled:cursor-not-allowed `}>
                        G
                    </Button>
                </form>
                {image && (
                    <img
                        src={image}
                        alt="Generated Image"
                    />
                )}
            </div>
        </div>

    )

}
