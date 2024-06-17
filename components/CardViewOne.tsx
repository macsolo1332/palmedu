import { BookCopy, Camera, ChevronsRight, MoveDown } from 'lucide-react';
import React, { useState } from 'react';
import { buttonVariants } from './ui/Button';

export default function CardViewOne(): JSX.Element {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <div className="max-w-[42.5rem] h-[34rem] mx-auto  bg-white shadow-lg rounded-none overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-500 " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            
            <div className=" my-[2rem] mx-[6rem] border-b-[1px] border-opacity-25  border-slate-500">
                <div className='flex py-[0.5rem]  text-4xl    '>
                    <div className='text-[1.5rem] font-black w-auto size-[1rem] pt-10 pr-3 text-green-700'>
                    THIS IS
                    </div>
                    <div className='font-black text-[5.5rem] text-slate-500 opacity-25'>
                          ________
                    </div>
    
                </div>

                <div className=" font-extrabold text-emerald-900 tracking-tighter  divide-y-8 text-[4.5rem] leading-[4rem] w-[30rem] mt-[1.5rem] border-b-8 border-slate-500 border-opacity-35  ">
                    {''}GREYHOUND NATION
                    </div>
                    
                    
                <p className="text-gray-700 text-base pt-[2rem] pb-[2rem]  ">{''}Our diverse, vibrant, close-knit community. Our spirit,
                 traditions, and campus culture. All of these aspects define the Loyola experience.</p>
            </div>
            <div className="flex px-[6rem] pt-4   ">
                <div className='justify-center bg-emerald-900 rounded-full text-primary-foreground  px-2 py-2' >
                        <Camera/>

                </div>
                <div className=' pt-2 px-2 text-emerald-900 font-bold underline-offset-4  hover:underline'>
                    See the Greyhound Nation in Photos
                </div>
                <div className=' text-emerald-800  font-bold  pt-2'>
                    <ChevronsRight/>
                </div>


              
              
          
            </div>
        </div>
    );
}


