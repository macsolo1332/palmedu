import { Card } from "@/components/ui/card";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import PercentageCardItem from "./PercentageCardItem";

const PercentageCard=(props: any)=>{
    
    
    

    return(
            
      <div className='  mt-[7%] ' >
      <Card  className="  lg:mx-[10%] md:mx-[10%] sm:mx-[10%] mx-[10%]  bg-slate-100  shadow-lg  h-full  lg:max-w-6xl " >
          <div className=" mx-[8%] mt-[5rem]  border-b-[4px] border-double border-slate-300" >
          </div>

          <div className="font-extrabold text-green-900 ml-[8%] pt-[4rem] tracking-tight  ">
              VALUE & OUTCOMES

          </div>
             
      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3  gap-2  mx-[7%] border-b-[1px] border-slate-400 ">
         
  {props.data.map((data: any)=>{
      return(
        <div className="" key={data.key}>
  <PercentageCardItem data={data} />

  </div>
      )
    })}


          </div>

          <ol className='my-8    pb-[2rem]  md:flex md:space-x-0 space-y-0'>
    <li className=' ml-[6%] mr-[2%]'>
    <div className='     pb-0 pl-2 pt-0'>
        <div className=' justify-center bg-emerald-900 rounded-full text-primary-foreground h-10 w-10  px-2 py-2' >
        <LinkIcon/>
        </div>
        </div>
      
      </li>
      <li className='  ml-[2rem] mr-[2rem]'>
    <div className='   border-zinc-300  pl-4    pb-0 md:pr-4  md:pt-1'>
        <span  className='text-sm font-semibold w-[6rem]  text-green-900 underline-offset-1 hover:underline decoration-[1.5px] '>
          <a href="/app">Learn about the value of a Loyola degree</a>
        </span>
        </div>
      
      </li>
      <li className='ml-[2rem] mr-[2rem] '>
    <div className='  border-zinc-300 py-1 pl-4  md:border-l-2  md:pb-0 md:pl-4 md:pt-1'>
        <span  className='text-sm font-semibold w-[6rem]  text-green-900 underline-offset-1 hover:underline decoration-[1.5px] '>
          <a href="/app">Discover the endless potential for Loyola graduates</a>
        </span>
        </div>
      
      </li>
      </ol>

           
          



    
      
      
           
      </Card>
  </div>
    )
}
export default PercentageCard;