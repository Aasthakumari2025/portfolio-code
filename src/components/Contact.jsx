import React from 'react'
import first from '../assets/first.png';
import sec from '../assets/sec.png';
import third from '../assets/third.png';



const Contact = () => {
    return (
        <div id='contact' className='mt-[300px] bg-black w-full  min-h-[150vh]  pb-[30px] relative'>


            <div className='w-[80%] absolute top-[-100px] left-1/10'>

                {/* top of footer*/}
                <div className=" border-2 items-center rounded-[5%] bg-gradient-to-t from:primary-100 pl-[30px] to-primary-50   grid lg:grid-cols-2 grid-cols-1 p-[20px]">
                    <div className="grid grid-cols-3 gap-4">
                        {/* First image in row 1, columns 1-2 */}
                        <img className="col-span-2 col-start-1 row-start-1" src={first} alt="First" />

                        {/* Second image in row 2, columns 1-2 */}
                        <img className="col-span-2 col-start-2 row-start-2" src={sec} alt="Second" />

                        {/* Third image in row 3, column 1 */}
                        <img className="col-span-1 col-start-1 row-start-3" src={third} alt="Third" />
                    </div>

                    <div>
                        <h1 className='lg:text-[72px] text-[60px] font-bold py-[20px] border-b-2 max-w-[500px]'>Get in touch
                            with us!</h1>

                        <div className='flex mt-9 items-center justify-between max-w-[500px]'>
                            <span className='spave-y-2 font-bold'>
                                <p>send message</p>
                                <a href='#'>@gmail.com</a>
                            </span>

                            <span className='space-y-2 font-bold'>
                                <p>give us a call now</p>
                                <a href=''>(91)4637788329</a>
                            </span>
                        </div>
                    </div>
                </div>

                {/* bottom of footer */}

                <div className=' mt-[80px]'>
                    <div className='w-full flex justify-between font-bold border-b-2 border-white py-[30px] text-white lg:text-2xl' >
                        <div>Ava Green</div>
                        <div className='flex max-w-[500px] gap-[10px]  lg:justify-between'>
                            <p>Navigation</p>
                            <p>Templates</p>
                        </div>

                    </div>

                    <div className='w-full gap-[10px] py-[40px] border-b-2 border-white flex justify-between'>
                        <div className='text-gray-500'>
                            <p className='flx flex-wrap'>Transforming Your Design Vision into Reality</p>
                            <p className='text-yellow-400'>Let’s stay in touch</p>
                        </div>

                        <div className='flex  max-w-[500px] lg:justify-between gap-[10px] text-gray-500'>
                            <ul className='space-y-4'>
                                <li> <a href='#home'>Home</a></li>
                                <li> <a href='#works'>Works</a></li>
                                <li> <a href='#faq'>FAQ page</a></li>
                                <li> <a href='#blog'>blog</a></li>
                                <li> <a href='#contact'>contact us</a></li>
                                <li> <a href='#skills'>Skills</a></li>
                                <li> <a href='#feature'>Features</a></li>
                            </ul>

                            <ul className='space-y-4'>
                                <li>Style-Guide</li>
                                <li>Licenses</li>
                                <li>Changelog</li>
                                <li>404</li>
                                <li>Password</li>

                            </ul>

                        </div>
                    </div>

                    <div className='text-gray-500 lg:flex  justify-between mt-[30px]'>
                        <span className=''>
                            <a href='# '>Copyright ©Ava Green</a>
                        </span>
                        <span className='flex'>
                            <span className='border-r-1 border-white px-2'><a href='#'>Facebook</a></span>
                            <span className='border-r-1 border-white px-2'><a href='#'>Twiter</a></span>
                            <span className='border-r-1 border-white px-2'><a href='#'>Linkdin</a></span>
                            <span className='px-2'><a href='#'>Instagram</a></span>
                        </span>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default Contact