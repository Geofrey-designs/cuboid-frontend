import React from 'react'



function Ourapp() {
  return (
    <div className='sm:m-auto max-w-screen-lg max-h-[1080px] md:mx-auto lg:flex flex-row place-items-center h-screen space-x-60'>
      {/* <div className='flex flex-row place-items-center h-screen'> */}
      
        <div class="card rounded-none min-w-[32px] max-w-xs">
          <p className='text-lg text-[#FB8006]'>DOWNLOAD OUR APP</p>
          <p className='text-xl text-[#FB8006]'>DOWNLOAD ON SMARTPHONE</p>
        </div>
        <div className='lg:flex flex-row'>
        <div class="card rounded-none align-middle">
          <img src='https://lun-eu.icons8.com/a/9-V0ef9Iik-tRumrHo1gWQ/5SB0eMTlCUeDa7y5ECcJug/playstore2.png'/>
          
        </div>
        <div class="card rounded-none max-w-xs">
          <img src='https://lun-eu.icons8.com/a/9-V0ef9Iik-tRumrHo1gWQ/3xeF591HLEGjT1VMa3o4pg/appstore.png' />
        </div>
        </div>
      


      {/* </div> */}
    </div>
          
      
            
  
  )
}

export default Ourapp