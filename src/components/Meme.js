import React from 'react'
import memeData from '../memesData'

export default function Meme(){
    // const [memeImage,setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImg:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


     /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below: METHOD 2
    */

    // Async method
    // React.useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMemes(data.data.memes)
    // }, [])

    // handle Async method in React  METHOD 2
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    //     return () => {
    //     -- put the clean up function here --    
    //     }
    // }, [])


    function getMeme(){
        // const memeArray = allMemes -- when getting the array from memesData.js --
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImg:url
        }))
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }


    return(
        <div className='meme--container'>
            <div className='form'>

                <input 
                    className='form--input' 
                    type="text" 
                    placeholder='Shut up'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                >    
                </input>

                <input 
                    className='form--input' 
                    type='text' 
                    placeholder='and take my money'
                     name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                >        
                </input>

                <button 
                    className='form--btn' 
                    onClick={getMeme}
                >
                    Get a new meme image 🖼
                </button>
                
            </div>
            <div className='meme'>
                <img className='memeImage' src={meme.randomImg}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>    
        </div>

    )
}