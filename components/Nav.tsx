
import React from 'react'

import Link from 'next/link';
import { buttonVariants } from './ui/Button';
import { Menu, Search } from 'lucide-react';
import Image from 'next/image';



interface Props{
    openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
  return(

    <div className='w-[100%]  top-0 h-[12%] bg-transparent border-solid   shadow-sm  saturate-[70%]' >
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            
        <div className="flex-[0.6]">
                <Link href='/' className=' font-semibold cursor-pointer  rounded-3xl flex-[0.6]  text-[25px] '>
                    <Image
                        alt=""
                        src='/loyolaimgbg.png'
                        width="330"
                        height="200"
                        className="  "
                    />
                </Link>
                </div>
            <a href="#"> <div className='nav-link ' >VISIT</div></a>
            <a href="#"> <div className='nav-link '>APPLY</div></a>
            <a href="#"><div className='nav-link '>GIVE</div></a>
            
            <div onClick={openNav}>
            <Link
                    className={buttonVariants({
                        size: 'lg',
                        variant:'menubutton',
                        className: ' mt-1 ml-4',
                    })}
                    href='/app'
                    target='_blank'>
                    MENU{' '}
                    <Search className='ml-2 h-5 w-5' />
                    <Menu className='h-5 w-5' />
                </Link>
            </div>
        </div>
    </div>

  )
}
export default Nav
