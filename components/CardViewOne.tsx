import { BookCopy, Camera, ChevronsRight, MoveDown } from 'lucide-react';
import React, { useState } from 'react';
import { buttonVariants } from './ui/Button';

export default function CardViewOne(): JSX.Element {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <div className="relative lg:max-w-[60.5%] md:w-full sm:w-full h-auto  bg-white shadow-lg rounded-none overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-500 " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            
            <div className=" my-[2rem] mx-[10%] border-b-[1px] border-opacity-25  border-slate-500">
                <div className='flex text-4xl    '>
                    <div className='lg:text-[50%] md:text-[50%] sm:text-[50%] text-[50%] font-black w-auto size-lg lg:pt-10  md:pt-10 sm:pt-8 pt-8  text-green-700'>
                    THIS IS
                    </div>
                    <div className='font-black lg:text-[5.5rem] md:text-[4.5rem] sm:text-[4.5rem] text-[4.5rem] w-auto text-slate-500 opacity-25'>
                          _________
                    </div>
    
                </div>

                <div className=" font-extrabold text-emerald-900 tracking-tighter  xl:text-6xl  lg:text-6xl md:text-5xl sm:text-4xl text-4xl leading-[4rem] w-[80%] border-b-8 border-slate-500 border-opacity-35  ">
                    {''}GREYHOUND NATION
                    </div>
                    
                    
                <p className="text-gray-700 lg:text-base md:text-base pt-[2rem] pb-[2rem] w-auto ">{''}Our diverse, vibrant, close-knit community. Our spirit,
                 traditions, and campus culture. All of these aspects define the Loyola experience.</p>
            </div>
            <div className="flex lg:px-16 px-10 pb-10  w-[100%] ">
                <div className='justify-center bg-emerald-900 rounded-full text-primary-foreground  px-4 py-4' >
                        <Camera/>

                </div>
                <div className=' lg:pt-4 pt-2 px-2 text-emerald-900 font-bold underline-offset-4  hover:underline'>
                    See the Greyhound Nation in Photos
                </div>
                <div className=' text-emerald-800  font-bold lg:pt-4 pt-2'>
                    <ChevronsRight/>
                </div>


              
              
          
            </div>
        </div>
    );
}


