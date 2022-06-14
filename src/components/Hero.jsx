import React from 'react'

import driving from '../assets/driving2.png'

const Hero = () => {
    return (
        <>
            <div>
                <div className='w-full h-[700px] absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={driving} alt="/" />
                </div>
                <div name='home' className='w-full h-screen flex flex-col justify-between'>          
                    <div className='grid md:grid-cols-2 max-w-[1000px] m-auto text-white'>              
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>                    
                        <h1 className='py-3 text-5xl'>Become the driver of your own destiny and get paid</h1>
                        <p className='text-2xl text-orange-400'>This is our Tech brand.</p>                
                    </div>               
                    </div>                               
                </div>
                <div className='card round-none bottom-0 right-0 absolute flex flex-row h-1/4 w-2/4 pb-0 mb-0'>
                    <div class="bg-[#945407] w-3/4">
                        <div>
                            <p>Get more information about</p>
                            <p>driving and delivering?</p>
                        </div>    
                    </div>
                    <div class="bg-[#D3D3D3] w-1/4">
                        this is card that is used 2                        
                    </div>
                </div>           
            </div>
            
        </>

  )
}

export default Hero