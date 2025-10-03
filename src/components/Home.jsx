import React from 'react'
import hero from '../assets/hero-img.png'

const Home = () => {
    return (
        <div id='home' className="Home">
            {/* HEADER */}
            <div className="header fixed top-0 left-0 w-full bg-white z-50 flex items-center py-[20px] border-b-2 border-black justify-around">

                {/*logo*/}
                <h1 className='text-[35px] font-bold font-sans'><a href='#home'>Ava Green</a></h1>

                {/* navn link */}
                <div>
                    <ul className='lg:flex hidden gap-[20px] font-bold text-[20px]'>
                        <li><a href='#works'>Works</a></li>
                        <li><a href='#feature'>Features</a></li>
                        <li><a href='#faq'>FAQ</a></li>
                        <li><a href='#blog'>News</a></li>
                        <li><a href='#contact'>Let's Talk</a></li>
                    </ul>
                </div>
            </div>
            <div className="hero_sec  py-[60px]">
                <div className='w-[80%] items-center m-auto grid grid-cols-1 lg:grid-cols-2'>
                    <div className='order-2 space-y-6  lg:order-1'>
                        <div>
                            <h1 className="lg:text-[72px] text-4xl   font-bold ">Hello,I'm 👋</h1>
                            <h1 className="lg:text-[72px] text-4xl   font-bold "> Ava Green</h1>

                        </div>

                        <p className='lg:w-[450px] mb-[30px] text-gray-500'>With a keen eye for aesthetics and a love for creating user-centric designs, I am a dedicated UI/UX designer committed to elevating digital experiences. My journey in the design realm is fueled by the belief that thoughtful and user-friendly interfaces can make a significant impact on how people interact with technology.</p>

                        <button type="button" className="text-white mt-4 w-[200px] bg-black transform transition-transform duration-500 hover:scale-110 hover:bg-black/90 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm md:px-9 md:py-3 px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                        >Get Hire Me</button>


                    </div>

                    <div className="order-1 lg:order-2">
                        <img className='transition-transform duration-500  hover:scale-110' src={hero} />
                    </div>
                </div>
                <hr className=' h-[5px] bg-blabk w-[80%] m-auto'></hr>
            </div>
        </div>
    )
}

export default Home