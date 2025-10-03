import React from 'react'
import bottles from '../assets/bottles.png'
import stack from '../assets/stack.png'
import iphone from '../assets/iphone.png'

const Works = () => {
    return (
        <div id='works' className='w-[80%] m-auto mb-[100px]'>
            {/* small paragraph*/}
            <p className='text-[30px] font-bold leading-[35px]'>
                I thrive on the challenge of transforming complex concepts into intuitive and visually appealing designs. My process involves a meticulous blend of creativity and usability, ensuring that each project not only looks stunning but also enhances the overall user experience.
            </p>

            {/*My SECTION WORKS*/}
            <div className='mt-[60px]'>
                <div className=' py-[30px] mb-[30px] border-b-2 border-black md:flex justify-between items-center'>
                    <h1 className='text-[72px] font-bold'>My Selected Works</h1>
                    <button className='w-[200px] rounded-full h-[40px]  font-bold border-2 border-black transition-transform duration-500 hover:scale-110'>View all works</button>
                </div>



                <div>
                    <div className='lg:flex gap-[20px] justify-around'>
                        <div className='max-w-[881px]'>
                            <img className='border-b-2 border-black pb-[20px]' src={bottles} />

                            <span className='flex justify-between py-[30px]'>
                                <h3 className='text-[24px] font-semibold'>PureForm</h3>
                                <p className='text-gray-500'>July 2025</p>
                            </span>
                        </div>


                        <div>
                            <div className='border-b-2 max-w-[431px] border-black pb-[20px]'>
                                <img src={stack} />

                                <p className='py-[40px]'>Discover the perfect blend of functionality and
                                    aesthetics with our cutting-edge product designs.
                                    Embrace innovation and style as our creations
                                    seamlessly integrate into your daily life. Elevate your
                                    experience with intuitive designs that cater to your
                                    needs and elevate your living spaces. Experience the
                                    art of simplicity and modernity with our thoughtfully
                                    crafted product line.</p>
                            </div>

                            <div className='flex justify-between py-[30px]'>
                                <h3 className='text-[24px] font-semibold'>SharpHorizons</h3>
                                <p className='text-gray-500'>July 2025</p>
                            </div>
                        </div>

                    </div>

                     <div className='lg:flex lg:flex-row-reverse gap-[20px] justify-around'>
                        <div className='max-w-[881px]'>
                            <img className='border-b-2 border-black pb-[20px]' src={iphone} />

                            <span className='flex justify-between py-[30px]'>
                                <h3 className='text-[24px] font-semibold'>SmoothEdge</h3>
                                <p className='text-gray-500'>July 2025</p>
                            </span>
                        </div>


                        <div>
                            <div className='border-b-2 max-w-[431px] border-black pb-[20px]'>
                                <img src={iphone} />
                            </div>

                            <div className='flex justify-between py-[30px]'>
                                <h3 className='text-[24px] font-semibold'>SmoothEdge</h3>
                                <p className='text-gray-500'>July 2025</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Works