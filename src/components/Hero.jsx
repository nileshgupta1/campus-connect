import React from 'react'
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <div className='hero-back w-full h-96 '>
            <div className='text-center text-5xl text-white p-4 mt-4'>
            <Typewriter
                onInit={(typewriter) => {
                    ["Welcome","Create Your Gate Pass","Send Your Complaints", "& Many More", "Campus Connect"].map((char)=>{
                        if(char !=="Campus Connect"){
                        typewriter.typeString(char)
                        .pauseFor(1000)
                        .deleteAll()
                        .start()
                        } else {
                            typewriter.typeString(char)
                            .start()
                            .stop()
                        }
                    })
                }}
            />
            </div>
        </div>
    )
}

export default Hero