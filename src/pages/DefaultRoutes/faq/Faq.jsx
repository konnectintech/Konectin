import React, { useState } from 'react'
import { arrowUp, arrowDown } from '../../../assets';
import { FAQ } from '../resume/resumeData'

const Faq = () => {

    const [isOpen, setOpen] = useState();

    const handleFAQ = (index) => {
        setOpen((prev) => (prev === index ? null : index));
    };


  return (
    <div className='flex flex-col gap-4 p-16 bg-slate-200'>
        <font className='flex text-2xl font-black '>Frequently Asked Questions</font>
        <font className='flex text-sm font-black pb-4 '>Check out some of these frequently asked questions about profiles</font>
        {
            FAQ.length > 0 && FAQ.map((value, index) => {
                return(
                    <div
                        className="flex rounded-lg items-center border-red-600 bg-white md:w-1/2 p-2"
                        onClick={() => handleFAQ(index)}
                        key={index}
                    >
                        
                        <div className="flex flex-col gap-2 w-full">
                            <div className="cursor-pointer select-none text-md font-semibold flex justify-between w-full">
                                {value.question}?
                                <div className=" cursor-pointer rounded-sm flex items-center justify-center text-center text-xl font-semibold px-2">
                                {isOpen !== index ? <img src={arrowDown} className='w-5 h-5' alt='scroll down' /> : <img src={arrowUp} className='w-5 h-5' alt='scroll up' />}
                                </div>
                            </div>
                            {isOpen === index && (
                                <div className="text-sm w-[80%]">{value.answer}</div>
                            )}
                        </div>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Faq;
