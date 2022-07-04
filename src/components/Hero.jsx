import React from 'react'

import driving from '../assets/driving2.png'

const Hero = () => {
    return (
        <>
            <div name='home'>
                <div className='w-full h-screen absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay blur-sm' src={driving} alt="/" />
                </div>
                <div className='h-screen flex flex-row'>
                    <div className='flex flex-col max-w-[1080px] m-auto h-screen ml-14'>                         
                        <div className='grid md:grid-cols-2 text-white m-auto'>              
                            <div className='justify-center md:items-start w-full px-2 py-8'>                    
                                <h1 className='py-3 text-5xl'>Become the driver of your own destiny and get paid</h1>
                                                
                            </div>
                                        
                        </div>
                        <div className='grid md:grid-cols-2 text-white m-auto mt-[-20vh] justify-center md:items-start w-full px-2 py-8'> 
                            <p className='text-2xl text-[#945407]'>This is our Tech brand.</p>
                                                                    
                        </div>
                    </div>
                    
                <div className='min-h-[20vh] mb-0 m-auto w-full flex flex-row -ml-14'>
                    
                    <div className='card w-3/4 bg-[#be8136] text-center'>
                        <p className='text-black'>Get more information about</p>
                        <p className='text-white'>driving and delivering?</p>
                    </div>
                    <div className='card w-1/4'>
                        U+02192
                    </div>
                </div>
                      
                </div>
                
                    </div>
                   
                
                
                           
            
            
        </>

  )
}

export default Hero