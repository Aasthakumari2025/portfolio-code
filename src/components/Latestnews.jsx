import React from 'react'

const Latestnews = () => {
    const List = [
        {
            "date" : "April 23, 2025",
            "heading" : "Unleashing Webflow's Creative Power",
            "para" : "Elevate your brand's online presence with our cutting-edge Webflow design services."
        },
         {
            "date" : "March 23, 2025",
            "heading" : "Where Design Meets Functionality",
            "para" : "Explore how we blend artistic ingenuity with innovative technology to craft captivating digital experiences."
        },
         {
            "date" : "August 23, 2024",
            "heading" : "Exploring Webflow's Canvas",
            "para" : "Discover how our Webflow expertise turns design concepts into dynamic, user-friendly websites."
        },
         {
            "date" : "August 23, 4",
            "heading" : "Revolutionizing Digital Design",
            "para" : "Dive into our latest projects, where aesthetics and functionality harmonize seamlessly."
        },
    ]
  return (
    <div id='blog' className='w-[80%] mb-[100px] m-auto'>
        {/* heading of the feature div*/}
            <h1 className='lg:text-[72px] text-[60px] font-bold py-[30px] border-b-2 border-black'>Latest news</h1>

            <div className='grid md:grid-cols-2 gap-12 grid-cols-1'>
             {
                List.map((item,index) =>
                    <div key={index} className='border-b-2 space-y-5 py-[30px] pr-[20px]'>
                        <span className='flex gap-[10px] items-center'>
                             <p className='px-3 py-1 rounded-full border-2 font-semibold'>3 min</p>
                             <p className='text-grey-500'>{item.date}</p>
                        </span>

                        <h1 className='text-2xl font-bold w-full '>{item.heading}</h1>
                        <p>{item.para}</p>
                        <button className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>Learn more</button>
                       
                    </div>
                )
             }
            </div>
    </div>
  )
}

export default Latestnews