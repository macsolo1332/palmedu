import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "../ui/Button";
import { ChevronLeft } from "lucide-react";
import LearnAboutLoyola from "../accadamics/LearnAboutLoyola";

const DropdownDiv = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const{header, menu, title1 }=props?.data;

  

  const toggleDropdownOpen = () => {
    setIsOpen(!isOpen);
  };
// console.log('data', props?.data);
  return (
    <div>
      
      {!isOpen && (
        <div
        className=
           "lg:mt-4 xl:w-[100%]   lg:w-[110%] w-full   xl:h-[7rem]  lg:h-[6.5rem] md:h-[6rem] sm:h-[6rem] h-[7rem]  rounded-none tracking-tighter  font-bold  leading-6 text-2xl text-left px-11 justify-center bg-[#0d4b34] text-primary-foreground hover:bg-[#0c432f] border-4 border-[#209765] inline-flex items-center"
        
        
        onClick={toggleDropdownOpen} 
      >
        {header}
      </div>

      )}

      {isOpen && (
        <div className="  w-full h-[40rem] left-0 ">
          <div className="absolute w-full h-[12rem] left-0 bg-[#0d4b34]">
            {/* ... rest of the hidden content ... */}
            <div className="flex text-slate-100 font-extrabold text-6xl w-[50rem]">
              <div
                className={buttonVariants({
                  size: "ssm",
                  variant: "backbutton",
                  className: "mt-2 lg:w-[4.1rem] lg:h-[3.9rem] md:w-[3.1rem] md:h-[2.9rem] sm:w-[3.1rem] sm:h-[3.1rem] w-[3.1rem] h-[3.1rem]   rounded-full ml-[8%]",
                })}
                onClick={toggleDropdownOpen}
              >
                <ChevronLeft />
              </div>
              <div className="ml-5 w-[50%]  lg:text-6xl md:text-5xl text-3xl ">{header} </div>
            </div>
      
            
{/* dropdown content  */}

            <div  className=" lg:flex hidden font-bold ml-[9rem] text-[#22a871] w-[full] text-3xl  mt-[1rem]  text-left   leading-7 subpixel-antialiased ">
            {title1.map((menuData : any) => { 
              return(
                
                <div className="  w-[20rem] mr-[5rem] " key={menuData.titlename} >
                <div>{menuData.titlename}</div>

                </div>
                
              )
              
            })
            }
              
        </div>
            

            <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-2 px-[8%] pb-[10%] bg-slate-100 ">
              {menu.map((menuData : any) => {                             
                return (
                  <div key={menuData.key}>
                  <LearnAboutLoyola data={menuData} />
                </div>
                )
              })}
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownDiv;
