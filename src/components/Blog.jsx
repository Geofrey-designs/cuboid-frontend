import React from 'react'
import driving from '../assets/driving2.png'


function Blog() {
  return (
      <div name='blog' className='max-w-screen-md mx-auto'>
        <h1 className='font-bold text-4xl text-center pt-5'>News</h1>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          
    {/* start of cards */}
    {/* <!--Card 1--> */}
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img class="w-full" src={driving} alt="Mountain"/>
      <div class="px-6 py-4">
        {/* <div class="font-bold text-xl mb-2">Mountain</div> */}
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio!
        </p>
        <p className='pt-4 italic text-[#3538d6]'>date goes here</p>

      </div>
      
    </div>
    {/* <!--Card 2--> */}
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img class="w-full" src={driving} alt="River"/>
      <div class="px-6 py-4">
        {/* <div class="font-bold text-xl mb-2">River</div> */}
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio!
          </p>
          <p className='pt-4 italic text-[#3538d6]'>date goes here</p>
      </div>
      
    </div>

    {/* <!--Card 3--> */}
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img class="w-full" src={driving} alt="Forest"/>
      <div class="px-6 py-4">
        {/* <div class="font-bold text-xl mb-2">Forest</div> */}
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio!
        </p>
        <p className='pt-4 italic text-[#3538d6]'>date goes here</p>
      </div>    
     
    </div>

     {/* <!--Card 4--> */}
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img class="w-full" src={driving} alt="Forest"/>
      <div class="px-6 py-4">
        {/* <div class="font-bold text-xl mb-2">Forest</div> */}
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio!
        </p>
        <p className='pt-4 italic text-[#3538d6]'>date goes here</p>
      </div>    
     
    </div>
    {/* <!--Card 5--> */}
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img class="w-full" src={driving} alt="Forest"/>
      <div class="px-6 py-4">
        {/* <div class="font-bold text-xl mb-2">Forest</div> */}
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio!
        </p>
        <p className='pt-4 italic text-[#3538d6]'>date goes here</p>
      </div>    
     
    </div>


    {/* end of cards */}


    
  </div>
</div>
     

    
          
    
  )
}

export default Blog