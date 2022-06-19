import React from 'react'

import driving from '../assets/driving2.png'

const Hero = () => {
    return (
        <>
            <div name='home'>
                <div className='w-full h-screen absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={driving} alt="/" />
                </div>
                <div className='flex flex-row max-w-[1080px] m-auto'>
                <div className='w-full'>          
                    <div className='grid md:grid-cols-2 m-auto text-white place-items-center h-screen m-auto'>              
                        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>                    
                            <h1 className='py-3 text-5xl'>Become the driver of your own destiny and get paid</h1>
                            <p className='text-2xl text-[#FB8006]'>This is our Tech brand.</p>                
                        </div>               
                    </div>                                              
                </div>
                 {/* cards start */}
                 <div className=''>
                    <div className='flex flex-row h-[10px] absolute bottom-0 right-0'>
                <div className='card'>
                    

                    </div>
                    <div className='card'>
                    this is a card

                    </div>
                    </div>
                    </div>
                    {/* Cards end */}
                    </div>
                   
                
                
                </div>           
            
            
        </>

  )
}

export default Hero