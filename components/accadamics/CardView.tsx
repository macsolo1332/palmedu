import { BookCopy, MoveDown, MoveRight } from 'lucide-react';
import React, { useState } from 'react';

export default function CardView(props: any): JSX.Element {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const cardcont=props?.data;
    const {...styles}=props
    
    
    
    return (
        <div className="relative   sm:h-[100%]  md:h-[100%]  mx-auto my-4  bg-white shadow-2lg shadow-black rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:bg-emerald-600 text-emerald-950 hover:text-slate-50  "   onMouseEnter={() => setIsHovered(true) } onMouseLeave={() => setIsHovered(false)} style={{...styles}}>
            <img className="w-full h-auto" src= {cardcont.image} alt="" />
            <div className=' '>
            <div className=" py-0 pb-4 mx-[5%] ">
               
            

                <div className="font-extrabold md:w-[80%] sm:w-[80%]   text-4xl leading-8  mt-[1.5rem] mb-[1.5rem] " >
                    {cardcont.header}
                    </div>
                <p className="  text-base pb-[1.2rem]  ">{cardcont.body}</p>
            </div>
            <div className=" flex px-8 pt-4  mb-3  mx-[5%]  border-t-4  border-green-700 ">
                <span className='font-semibold text-sm mt-1    '>
                    { cardcont.footer }
                </span>
                <span className='  mt-[0.1rem] animate-spin translate-x-6'>
                    {isHovered ? <MoveRight/> : ''}
                </span>
              
            </div>
            </div>
        </div>
    );
}


