import { LinkIcon } from "lucide-react";
import { Card } from "../ui/card"

const NewsCard= ()=>{
    return(
        <div>
             {/* cardview */}
        <div className='mx-auto mb-32 mt-16 max-w-25% sm:mt-0'>
        <Card
         className=" absolute ml-auto mr-auto   max-w-5xl top-[44rem]  h-[5rem]" 
         >
          <ol className='my-8 space-y-2   md:flex md:space-x-8 md:space-y-0'>
          <li className='md:flex-1 ml-[6rem]'>
          <div className='flex flex-col  border-zinc-300 py-1 pl-4 pt-[30rem]  md:pb-0 md:pl-0 md:pt-1'>
              <span className='text-sm font-medium   text-green-900 '>
              <LinkIcon/>
              </span>
              </div>
            
            </li>
            <li className='md:flex-1 ml-[8rem]'>
          <div className='flex flex-col  border-zinc-300 py-1 pl-4 pt-[30rem] md:border-l-2  md:pb-0 md:pl-4 md:pt-1'>
              <span  className='text-sm font-semibold w-[6rem]  text-green-900 underline-offset-1 hover:underline decoration-[1.5px] '>
                <a href="/app">All News</a>
              </span>
              </div>
            
            </li>
            <li className='md:flex-1 ml-[8rem]'>
          <div className='flex flex-col  border-zinc-300 py-1 pl-4 pt-[30rem] md:border-l-2  md:pb-0 md:pl-4 md:pt-1'>
              <span className='text-sm font-semibold w-[6rem]  text-green-900 underline-offset-1 hover:underline decoration-[1.5px] '>
              <a href="/app">All Events</a>
              </span>
              </div>
            
            </li>
            <li className='md:flex-1 ml-[8rem]'>
          <div className='flex flex-col  border-zinc-300 py-1 pl-4 pt-[30rem] md:border-l-2 md:pb-0 md:pl-4 md:pt-1'>
              <span className='text-sm font-semibold w-[6rem]  text-green-900 underline-offset-1 hover:underline decoration-[1.5px] '>
              <a href="/app">Loyola Today</a>
              </span>
              </div>
            
            </li>
            <li className='md:flex-1 ml-[8rem]'>
          <div className='flex flex-col  border-zinc-300 py-1 pl-4 pt-[30rem] md:border-l-2  md:pb-0 md:pl-4 md:pt-1'>
              <span className='text-sm font-semibold w-[27rem]  text-green-900 underline-offset-1 hover:underline decoration-[1.5px]'>
              <a href="/app">Stories</a>
              </span>
              </div>
            
            </li>

          </ol>
          

         </Card>
        <Card
         className=" absolute ml-auto mr-auto  shadow-lg  max-w-5xl top-[35rem]  h-[10rem]" 
         >
        <ol className='my-8 space-y-2   md:flex md:space-x-8 md:space-y-0'>
          {/* News 1 */}
          <li className='md:flex-1 ml-6'>
            <div className='flex flex-col  border-zinc-300 py-2 pl-4   md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium   text-emerald-600'>
                News
              </span>
             
              <span className='mt-2 text-green-900 text-sm font-black'>
              Loyola celebrates the life of the Rev. Frank Haig, S.J., professor emeritus of physics
                
              </span>

            </div>
          </li>
          {/* News 2 */}
          <li className='md:flex-1 ml-6'>
            <div className='flex flex-col border-l-4  border-zinc-300 py-2 pl-4 md:border-l-2  md:pb-0 md:pl-4 md:pt-4'>
              <span className='text-sm font-medium text-emerald-600'>
              News
              </span>
              
              <span className='mt-2 text-green-900 text-sm font-black'>
              Loyola launches new strategic plan, Together We Rise
              </span>
            </div>
          </li>
          {/* News 3 */}
          <li className='md:flex-1 ml-6'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-2 md:border-t-0 md:pb-0 md:pl-4 md:pt-4'>
              <span className='text-sm font-medium text-emerald-600'>
              News
              </span>
              
              <span className='mt-2 text-green-900 text-sm font-black'>
              Loyola’s Baltipreneurs Accelerator Demo Day showcases local entrepreneurs
              </span>
            </div>
          </li>
        </ol>
        </Card>


      </div>
        </div>

        
    )
}
export default NewsCard;