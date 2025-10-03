import React from 'react'

const MySkills = () => {
  return (
    <div id='skills' className='w-[80%] m-auto py-[40px]'>
        {/* heading of the mySkills div*/}
            <h1 className='lg:text-[72px] text-[60px] font-bold py-[30px] border-b-2 border-black'>My Set Skills</h1>

            <div className='py-[40px]'>
                <ul className='grid lg:grid-cols-4 grid-cols-2 w-full gap-[20px]'>
                    <li className='flex justify-center'><button className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>UX Design</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>UI Design</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>Product Design</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-primary-100 border-black rounded-full px-5 py-2'>Front Developmentsign</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-primary-100 border-black rounded-full px-5 py-2'>Project Management</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>Product Design</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>Workshop</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-primary-100 border-black rounded-full px-5 py-2'>Design Sprint</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-primary-100 border-black rounded-full px-5 py-2'>Interaction Design</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>User Testing</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-primary-100 border-black rounded-full px-5 py-2'>Usability Testing</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-primary-100 border-black rounded-full px-5 py-2'>UX Research</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>Leadership</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-primary-100 border-black rounded-full px-5 py-2'>Mantoring</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>No-Code</button></li>
                    <li className='flex justify-center'><button  className=' border-2 text-white font-semibold bg-black border-black rounded-full px-5 py-2'>Graphic Design</button></li>
                </ul>
            </div>

    </div>
  )
}

export default MySkills