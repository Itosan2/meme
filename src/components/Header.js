import React from 'react'
import memeLogo from '../img/troll-face.png'


export default function Header(){
    return(
        <div className='header--container'>
            <div className='logo--box'>
                <img className='logo--img' src={memeLogo} alt='troll face'></img>
                <div className='logo--text'>Meme Generator</div>
            </div>    
            <div className='header--text'>React Course - Project 3</div>
        </div>
    )
}