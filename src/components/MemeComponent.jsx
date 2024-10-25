import React, { useEffect, useState } from "react";

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })

    const [memesData, setMemesData] = useState({})

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(memesData => setMemesData({memes: memesData.data.memes}))
    }, [])
  
    function memeImage() {
        const newImage = memesData.memes[Math.floor(Math.random() * memesData.memes.length)].url
        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                randomImage: newImage
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState =>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function reset(){
        setMeme({
            topText: "",
            bottomText: "",
            randomImage: "",
        })
    }

    return (
        <>
            <div className="meme-form">
                <div className="meme-inputs-div">

                    <div className="meme-inputs">
                        
                        <label>Top Text</label>
                        <input 
                        type="text" 
                        placeholder="Top Text" 
                        value={meme.topText}
                        onChange={handleChange}
                        name="topText"
                        />
                    </div>

                    <div className="meme-inputs">
                        
                        <label>Bottom Text</label>
                        <input 
                        type="text" 
                        placeholder="Bottom Text" 
                        value={meme.bottomText}
                        onChange={handleChange}
                        name="bottomText"
                        />

                    </div>
                </div>
                <button onClick={memeImage}>Get a new meme image 🖼</button>
                <button onClick={reset}>Reset</button>
            </div>
            {meme.randomImage && 
                <div className='memeImage'>
                    <img src={meme.randomImage} alt="Generated Meme Image" />
                    <h2 className="top-text">{meme.topText}</h2>
                    <h2 className="bottom-text">{meme.bottomText}</h2>
                </div>
            }
        </>
    )
}