import { Kanban } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "../ui/Button"
import FourImageGallery from "./FourImageGallery"

const LoyolaDifference =()=>{
    
    return(
    <div className=" w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2  gap-2">  
    <div className="relative  ">

        <div  className=" flex w-[40%]  mb-[3rem] font-bold text-black  ">
          THE LOYOLA DIFFERENCE
          <div className="text-emerald-600  "> <Kanban/> </div>
        </div>
        <div  className="   w-[80%] mb-[3rem] font-bold text-5xl tracking-tighter leading-[2.75rem] text-emerald-800   ">
          MORE THAN READY. LOYOLA READY.
          
        </div>

        <div className="  w-[80.5%] tracking-tight subpixel-antialiased ">
            <p> We believe a Jesuit education acquired at Loyola University 
                Maryland best prepares you for academic achievement, the new
                 world of work, and a balanced, flourishing, and purposeful life.
                  From our strong academic programs to the thoughtful mentorship
                   and guidance from faculty, coaches, and mentors, Loyola will
                    help you discover your true potential. You’ll graduate ready
                     for anything—and ready for everything.</p>
        </div>

        <div className="  w-[28.5rem] mt-[4rem]   tracking-tight subpixel-antialiased">
        <Link
                    className={buttonVariants({
                        size: 'mm',
                        variant:'simpleboxbutton',
                        className:'transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300',
                    })}
                    href='/app'
                    target='_blank'>
                    Explire the Greyhound Experience{' '}
                </Link>
        </div>

    </div>
    <div className="w-[95%] h-[95%]">
        <FourImageGallery/>
    </div>

    </div>
    )
}
export default LoyolaDifference
