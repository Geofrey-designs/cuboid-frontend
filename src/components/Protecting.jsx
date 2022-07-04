import React from 'react'
import image from '../assets/carimage.png'

function Protecting() {
  return (
    <div className='bg-[#EFE8E8] w-full h-screen'>
        <div className='flex lg:flex-row md:flex-col lg:max-w-[1080px] place-content-center pt-10 m-auto lg:space-x-[80px]'>
            <div className='md:max-w-[500px] md:min-w-[500px]'>
                <div>
                    <h3 className='font-bold  pt-10 pb-10'>Protecting <u className='text-[#FB8006]'>our workers</u></h3>
                    <p>You will be assured to earn at least the National Living Wage by driving with Cuboid, 
                        in addition to having access to our industry-leading worker protections, including 
                        Holiday Pay and access to a pension plan, if eligible. 
                        With additional protections, you can earn on your own schedule.</p>
                </div>
                <ul>
                    <li>National Living Wage.</li>
                    <li>Holiday Pay & Pension Plan.</li>
                    <li>Earn on your own time.</li>
                </ul>
                
            </div>
            <div className='object'>
                <img src={image}/>
            </div>

        </div>

    </div>
  )
}

export default Protecting