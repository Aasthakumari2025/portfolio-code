import React from 'react'

const FAQ = () => {

  const data = [
    {
      "ques": " What is the delivery time for your services?"
    },
    {
      "ques": " What is the delivery time for your services?"
    },
    {
      "ques": " What is the delivery time for your services?"
    },
    {
      "ques": " What is the delivery time for your services?"
    },
    {
      "ques": " What is the delivery time for your services?"
    },
    {
      "ques": " What is the delivery time for your services?"
    },
  ]
  return (
    <div id='faq' className='w-[80%] m-auto lg:py-[50px] py-[20px]'>

      {/* heading of the FAQ div*/}
      <h1 className='lg:text-[72px] text-[60px] font-bold py-[30px] border-b-2 border-black'>Frequently Asked
        Questions</h1>

      <div className='mt-[80px]'>
        {data.map((item,index) =>
        <div className='py-8 border-b-2 border-black flex justify-between' key={index}>
          <div className='flex gap-3 items-center'>
            <span className='font-bold rounded-full bg-black text-white px-2 py-1'>Q:</span>
          <span className='font-bold lg:text-[28px] text-[18px]'>{item.ques}</span>
          </div>
          <button className='font-bold text-[25px] text-white px-4 py-2 items-center bg-primary-50'>+</button>
          
        </div>
        )}
      </div>

    </div>
  )
}

export default FAQ