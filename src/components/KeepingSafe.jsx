import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const KeepingSafe = () => {
  return (
    <div name='KeepingSafe' className='w-full my-32 bg-[#EFE8E8] h-screen'>
      <div className='max-w-[1080px] mx-auto px-2'>
        <p className='text-2xl py-8 text-center text-[#FB8006]'>
          KEEPING YOU SAFE
        </p>
        <h2 className='text-5xl font-bold text-center pb-5'>WHEREVER YOU ARE</h2>
        

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4'>

          <div className='flex'>            
            <div className='text-center'>
              <h3 className='text-5xl text-center text-[#FB8006]'>Commitment</h3>
              <h3 className='font-bold text-lg text-gray-500 pt-6'>to Safety</h3>
              <p className='text-lg pt-4'>
                In our Community Guidelines, we strive to help to create
                 a safe and secure environment for our users with every safety feature and standard.
              </p>
            </div>
          </div>
          <div className='flex'>
            
            <div className='text-center'>
              <h3 className='text-5xl text-[#FB8006]'>Customer</h3>
              <h3 className='font-bold text-lg text-gray-500 pt-6'>satisfaction</h3>
              <p className='text-lg pt-4'>
                Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.
              </p>
            </div>
          </div>
          <div className='flex'>
            
            <div className='text-center'>
              <h3 className='text-[#FB8006] text-5xl'>Driving</h3>
              <h3 className='font-bold text-lg text-gray-500 pt-6'>the UK</h3>
              <p className='text-lg pt-4'>
                If you are away from home, you can request a trip through the app.  
              </p>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default KeepingSafe;
