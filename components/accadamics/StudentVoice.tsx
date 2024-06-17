import Link from "next/link"
import { buttonVariants } from "../ui/Button"
import { Kanban } from "lucide-react"
import Image from "next/image"

const StudentVoice=()=>{
    return(
        

    <div className="relative bg-emerald-900 w-full h-[60rem] justify-items-center ">
        {/* <div className="absolute pb-0   bottom-0 left-0 right-0 w-[50rem] h-[30rem] bg-emerald-800 opacity-10  rotate-45" > </div> */}
{/* <div className=" max-w-full "> */}

<div className=" rounded-full border-spacing-3 justify-items-center  py-[4rem] item-center md:mx-[35%]    "> 

<img src="https://cdn.loyola.edu/project/core/extensions/institutional/home/images/amber-d-sm-min.jpg"
 alt=""
 width="287"
 height="287"
 
 className=" align-middle  justify-center rounded-full   md:w-[20rem]  sm:mx-4 "  />
</div>

<div className="   text-[1.2rem] text-slate-50 tracking-tight subpixel-antialiased  mb-10">
    <p className="text-center justify-center item-center"> <span className="font-bold text-emerald-600">AMBER, ’22,</span> ENGLISH/COMMUNICATION INTERDICIPLINARY MAJOR, WRITING MINOR</p>
</div>
    
    <div className="relative left-[15%] right-[15%] w-[70%]">

<div  className="  justify-items-center  mb-[3rem] font-bold text-[2.7rem] tracking-tighter leading-[2.75rem] text-slate-50   ">
<p className="text-center justify-items-center  "> " I have made lifelong friendships and relationships that I would have never imagined before coming to Loyola. The university and the people here have helped shape me into the person I am now."
</p>  
</div>

</div>





</div>


// </div>

          

       
       
    )

}
export default StudentVoice