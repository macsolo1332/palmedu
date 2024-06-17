import { ArrowRightSquareIcon, Menu, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from '@/components/ui/Button'

const Nvbr = () => {
    return (
        <div className=' mt-8 h-[12vh] bg-transparent shadow-sm w-[100%]  top-0 '>
            <div className='flex items-center justify-between w-[85%] mx-auto h-[100%]'>
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
                

                <Link
                    className={buttonVariants({
                        size: 'lg',
                        variant:'ghost',
                        className:' md:block',
                    })}
                    href='/app'
                    target='_blank'>
                    VISIT{' '}
                </Link>
                <Link
                    className={buttonVariants({
                        size: 'lg',
                        variant:'ghost',
                        className:' md:block',
                    })}
                    href='/app'
                    target='_blank'>
                    APPLY{' '}
                </Link>
                <Link
                    className={buttonVariants({
                        size: 'lg',
                        variant:'ghost',
                        className:' md:block',
                    })}
                    href='/app'
                    target='_blank'>
                    GIVE{' '}
                </Link>

                <Link
                    className={buttonVariants({
                        size: 'lg',
                        variant:'menubutton',
                        className: 'mt-1 ml-4',
                    })}
                    href='/app'
                    target='_blank'>
                    MENU{' '}
                    <Search className='ml-2 h-5 w-5' />
                    <Menu className='h-5 w-5' />
                </Link>
            </div>
        </div>
    )
}

export default Nvbr
