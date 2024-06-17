import Link from "next/link";
import { buttonVariants } from "../ui/Button";

const LearnAboutLoyola =(props:any)=>{    
    const{ title,submenu}=props?.data;
 return(
    <div  className=" ">
        <div  className=" lg:hidden font-bold  bg-slate-100 text-emerald-600 w-[16rem] text-3xl  mt-[1rem]  text-left  ml-6 leading-7 subpixel-antialiased ">
             {title}   
        </div>
        {submenu.map((menu : any)=> {                       
            return (
             <div className="  " key={menu.title}>

                 

             <Link
                         className={buttonVariants({
                             size: 'sm',
                             variant:'link2',
                             className:' w-[18rem] mr-[2rem]  mt-[1.5rem] subpixel-antialiased  border-b-[1px] border-slate-400',
                         })}
                         href={menu.link}
                         target='_blank'>
                        {menu.name}
                     </Link>
             </div>
            )
        })}
       
        {/* <div>
        <Link
                    className={buttonVariants({
                        size: 'sm',
                        variant:'link2',
                        className:' w-full subpixel-antialiased  border-b-[1px] border-slate-400',
                        
                    })}
                    href=''
                    target='_blank'>
                    Virtual Tour{' '}
                </Link>
        </div>
        <div className="text-left" >
        <Link
                    className={buttonVariants({
                        size: 'sm',
                        variant:'link2',
                        className:' w-full subpixel-antialiased  border-b-[1px] border-slate-400',
                    })}
                    href=''
                    target='_blank'>
                    Send Me Information{' '}
                </Link>
        </div>
        <div className="text-left" >
        <Link
                    className={buttonVariants({
                        size: 'sm',
                        variant:'link2',
                        className:'w-full subpixel-antialiased  border-slate-400',
                    })}
                    href=''
                    target='_blank'>
                    Speak to an Admission Counselor{' '}
                </Link>
        </div> */}

    </div>
    
    
    
 )
}
export default LearnAboutLoyola;