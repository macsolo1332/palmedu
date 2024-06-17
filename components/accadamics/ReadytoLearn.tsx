import { Play } from "lucide-react";
import Image from "next/image";

const ReadytoLearn = () => {
  return (
    <div className="relative w-full h-full">
      {/* Image component */}
      
                    <img src="https://cdn.loyola.edu/project/core/extensions/institutional/home/images/science-lab-min.jpg" alt="" />
      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black">
        <div className="mt-[14rem]">

        <div className='justify-center bg-emerald-900 hover:bg-emerald-600 text-primary-foreground  pl-6 pb-5 pt-5 pr-[3rem] rounded-full  w-[1rem] text-4xl ml-[9rem] my-[2rem] ' >
          
            <Play width={'2rem'} height={'2rem'}  />
          
                       
        </div>

        <div className=" text-slate-50 text-6xl font-black w-[40rem] ml-[9rem] border-t-[13px] border-b-[13px] border-gray-600  border-opacity-40 ">
            <p className="my-[2rem]">READY TO LEARN, LEAD, AND SERVE IN OUR DIVERSE AND CHANGING WORLD</p>

        </div>
        </div>
      </div>
    </div>
  );
};

export default ReadytoLearn;
