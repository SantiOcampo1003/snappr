"use client";

import { useState } from 'react';


export default function ImageGenerate() {

    const [prompt, setPrompt] = useState('')
    return (
        <div>
            <form onSubmit={async (e) => {
                e.preventDefault()
                console.log(prompt)
                const res = await fetch('/api/generateImage', {
                    method: 'POST',
                    body: JSON.stringify({ prompt }),
                    headers:{
                        "Content-Type":"application/json",
                        
                    }
                })

                const data = await res.json()
                console.log(data)

            }} >
                <input
                    type="text"
                    placeholder="Wite your prompt"
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-zinc-900 text-white px-3 py-2 my-2"
                    value={prompt}
                />
                <button>
                    Generate Image
                </button>
            </form>
        </div>
    )


}
