import React from 'react'

function Blog() {
  return (
      <div name='blog'>
        <div className='grid place-content-center'>
        <h1 className='class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight 
            dark:text-slate-200font-black'>Blog posts</h1>
        </div>
        {/* cards*/}
        <div className="md:h-full flex items-center">
          <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {/* card 1 */}
              <div className='p-4 sm:w-full lg:w-1/4'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <img class="lg:h-48 md:h-24 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"></img>
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    
                    <h1 class="text-2xl font-semibold mb-3">Blog post</h1>
                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                                  2021</h2>
                    
                  </div>
                </div>
            </div>
            {/* card 2 */}
             <div className='p-4 sm:w-full lg:w-1/4'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <img class="lg:h-48 md:h-24 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"></img>
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    
                    <h1 class="text-2xl font-semibold mb-3">Blog post</h1>
                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                                  2021</h2>
                    
                  </div>
                </div>
            </div>
            {/* card 3 */}
            <div className='p-4 sm:w-full lg:w-1/4'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <img class="lg:h-48 md:h-24 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"></img>
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    
                    <h1 class="text-2xl font-semibold mb-3">Blog post</h1>
                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                                  2021</h2>
                    
                  </div>
                </div>
            </div>
            {/* card 4 */}
            <div className='p-4 sm:w-full lg:w-1/4'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <img class="lg:h-48 md:h-24 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"></img>
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    
                    <h1 class="text-2xl font-semibold mb-3">Blog post</h1>
                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                                  2021</h2>
                    
                  </div>
                </div>
            </div>
            {/* card 5 */}
            <div className='p-4 sm:w-full lg:w-1/4'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <img class="lg:h-48 md:h-24 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"></img>
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    
                    <h1 class="text-2xl font-semibold mb-3">Blog post</h1>
                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                                  2021</h2>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>               
      </div>
      






    </div>  

    
          
    
  )
}

export default Blog