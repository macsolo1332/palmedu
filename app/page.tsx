 'use client'
 import Nvbr from "@/components/Nvbr";
import JSIcon from "@/components/ui/Icons";
import Link from "next/link";
import { buttonVariants } from '@/components/ui/Button'
import { cn } from "@/lib/utils";
import { useState } from "react";
import {  BookCopy, Kanban,  Key,  LinkIcon, MoveDown} from "lucide-react";
import { Card } from "@/components/ui/card";
import DropdownDiv from "@/components/buttondiv/DropdownDiv";
import FourImageGallery from "@/components/accadamics/FourImageGallery";
import LoyolaDifference from "@/components/accadamics/LoyolaDifference";
import PercentageCard from "@/components/accadamics/percentagecard/PercentageCard";
import CardView from "@/components/accadamics/CardView";
import CardViewOne from "@/components/CardViewOne";
import StudentVoice from "@/components/accadamics/StudentVoice";
import ReadytoLearn from "@/components/accadamics/ReadytoLearn";
import NewsCard from "@/components/accadamics/NewsCard";
import BgVideo from "@/components/accadamics/BgVideo";
import FutureGreyhounds from "@/components/FutureGreyhounds";
import Nav from "@/components/Nav";





export default function Home(): JSX.Element {
  const[nav,setNav]=useState(false)
  const openNav =()=>setNav(true)
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const newsCard: any = [{
    key:1,
    link:"#",
    header:"News",
    body:"Loyola celebrates the life of the Rev. Frank Haig, S.J., professor emeritus of physics",

  },
  {
    key:2,
    link:"#",
    header:"News",
    body:"Loyola launches new strategic plan, Together We Rise",

  },
  {
    key:3,
    link:"#",
    header:"News",
    body:"Loyola’s Baltipreneurs Accelerator Demo Day showcases local entrepreneurs",
   
  }
]

  const menuData: any = [{
    key: 1,
    header:"UNDERGRADUATE STUDIES",
    title2:"LEARN ABOUT LOYOLA",
    title1:[{
      titlename:"LEARN ABOUT LOYOLA",
    },{
      titlename:"ACADEMIC PROGRAMS",
    },{
      titlename:"ADMISSION",
    }],
    menu:[{
      key: 1,
      title:"LEARN ABOUT LOYOLA",
      submenu:[{
        name:"Visit Opportunities",
        link:"",
      },
      {
        name:"Virtual Tour",
        link:"",
      },
      {
        name:"Send me information",
        link:"",
      },{
        name:"Speak to an admission Counsselor",
        link:"",
      }]
    },
    {
      key: 2,
      title:"ACADEMIC PROGRAMS",
      submenu:[{
        name:"Majors and Minors",
        link:"",
      },{
        name:"Combined Bachelor/Master Programs",
        link:"",
      },],
      submenu1:{
        title:"Pre-Professional Programs",
        division:[{
        title:"law",
      },
      {
        title:"medical",
      },
      {
        title:"Dental",
      },
      {
        title:"Pre-nursing",
      },
      {
        title:"physician Assistant",
      },
      {
        title:"Othet Pre-Health Tracks",
      }]}
    },{
      key: 3,
      title:"ADMISSION",
      submenu:[{
        name:"First-year Applicants",
        link:"",
      },
      {
        name:"International Applicants",
        link:"",
      },
      {
        name:"Transfer Applicants",
        link:"",
      },{
        name:"Undocumented & DACA Applicants",
        link:"",
      },
      {
        name:"Finantial Aid & Affordability",
        link:"",
      }]
    }],

  },{
    key: 2,
    header:"GRADUATE STUDIES",
    title1:[{
       titlename:"ARTS & SCIENCE",
     },{ 
       titlename:"BUSINESS",
     },{
       titlename:"EDUCATION",
     }],
    menu:[{
      Key: 1,
      title:"ARTS & SCIENCE",
      submenu:[{
        name:"Data Science",
        link:"",
      },{
        name:"Emerging Media",
        link:"",
      },{
        name:"Forensic Pattern Analysis",
        link:"",
      },{
        name:"Biological Forensics",
        link:"",
      },{
        name:"Psychology",
        link:"",
      },{
        name:"Speech-Language Pathology ",
        link:"",
      },{
        name:"Theology",
        link:"",
      }]
      
      
    },{
      key:2,
      title:"BUSINESS",
      submenu:[{
        name:"Professional's MBA",
        link:"",
      },{
        name:"Emerging Leaders MBA",
        link:"",
      },{
        name:"Master of Accounting(MAcc)",
        link:"",
      }]
    },{
      key:3,
      title:"EDUCATION",
      submenu:[{
        name:"Curriculum and Instruction for Social Justice",
        link:"",
      },{
        name:"Educational Technology",
        link:"",
      },{
        name:"Literacy/Reading",
        link:"",
      },{
        name:"Montessori Education",
        link:"",
      },{
        name:"English For Speakers of Other Language(ESOL)",
        link:"",
      }]
    },{
      key:4,
      title:"         ",
      submenu:[{
        name:"Educational Leadership",
        link:"",
      },{
        name:"Kodaly Music Education",
        link:"",
      },{
        name:"Master of Arts in Teaching(MAT)",
        link:"",
      },{
        name:"School Counseling",
        link:"",
      }]
    }],
  },{
    key: 3,
    header:"CONTINUING EDUCATION",
    title1:[{
      titlename:"COURSE TOPICS",
    }],
    menu:[{
      key:1,
      title:"COURSE TOPICS",
      submenu:[{
        name:"Artificial Intellegience",
        link:"",
      },{
        name:"Cybersecurity and CISSP",
        link:"",
      },{
        name:"Emerging Technologies",
        link:"",
      },{
        name:"Human Resources",
        link:"",
      },{
        name:"Management Practices",
        link:"",
      },{
        name:"Operations and Logistics",
        link:"",
      },{
        name:"Software and Applications",
        link:"",
      }]
    },{
      title:"",
      submenu:[{
        name:"Career Building",
        link:"",
      },{
        name:"Data Analytics and Management",
        link:"",
      },{
        name:"Finance and Accounting",
        link:"",
      },{
        name:"Innovation and Entrepreneurship",
        link:"",
      },{
        name:"Manufacturing",
        link:"",
      },{
        name:"PreK-12 Teaching Methods and Management",
        link:"",
      },{
        name:"Sustainability",
        link:"",
      }]

    },{
      title:"",
      submenu:[{
        name:"Communications",
        link:"",
      },{
        name:"Diversity, Equity, Inclusion, and Justice",
        link:"",
      },{
        name:"Fitness and Wellness",
        link:"",
      },{
        name:"Leadership Development",
        link:"",
      },{
        name:"Marketing and Sales",
        link:"",
      },{
        name:"Programming",
        link:"",
      },{
        name:"Test Prep",
        link:"",
      }]
      
    },{
      title:"",
      submenu:[{
        name:"Construction and Residential",
        link:"",
      },{
        name:"Educational Leadership",
        link:"",
      },{
        name:"Graphic Design",
        link:"",
      },{
        name:"Learning Online",
        link:"",
      },{
        name:"Nonprofit Management",
        link:"",
      },{
        name:"Project Management and Agile",
        link:"",
      },{
        name:"Web Design",
        link:"",
      }]
    }]
  }]

  const cardData: any = [
    {
    key:1,
    link:"#",
    cardcont:{
    image:"https://cdn.loyola.edu/project/core/extensions/institutional/home/images/student-calc-min.jpg",
    icon: <BookCopy /> ,
    header:"ACADEMIC RIGOR & EXCELLENCE",
    body:"No matter what you study, the future demands both depth of knowledge and breadth of experience. So does Loyola.",
    footer:"EXPLORE ACADEMICS AT LOYOLA",
    }
  },{
    key:2,
    link:"#",
    cardcont:{
    image:"https://cdn.loyola.edu/project/core/extensions/institutional/home/images/classroom-min.jpg",
    icon: <BookCopy /> ,
    header:"ADVISING & MENTORSHIP",
    body:"Loyola students are individually taught and taught as individuals. Deep, meaningful, and sustained mentorship and guidance are the anchor of a Loyola education.",
    footer:"EXPLORE ADVISING & MENTORSHIP",
    }
  },{
    key:3,
    link:"#",
    cardcont:{
    image:"https://cdn.loyola.edu/project/core/extensions/institutional/home/images/presentation-min.jpg",
    icon: <BookCopy /> ,
    header:"CAREER PREPARATION",
    body:"Discover and forge paths that connect your passions and your values to your talents and professional aspirations.",
    footer:"EXPLORE LOYOLA'S CAREER CENTER ",
  }
  }
]

const cardData1: any = [
  {
  key:1,
  link:"#",
  cardcont:{
  image:"https://cdn.loyola.edu/project/core/extensions/institutional/home/images/presentation2-min.jpg",
  icon: "" ,
  header:"INNOVATION & ENTREPRENEUR- SHIP",
  body:"Loyola is committed to supporting and growing a thriving entrepreneurial ecosystem for our university and our city through academic offerings, dedicated programs and resources for students, and our Nick and Susie Simon Center for Innovation & Entrepreneurship.",
  footer:"EXPLORE INNOVATION & ENTREPRENEURSHIP",
  }
},{
  key:2,
  link:"#",
  cardcont:{
  image:"https://cdn.loyola.edu/project/core/extensions/institutional/home/images/baltimore-min.jpg",
  header:"ANCHORED IN BALTIMORE",
  body:"Loyola University Maryland attracts students who are also attracted to Baltimore: individuals eager to shape their lives—and their city—according to their ideals. Our city provides the ideal extended classroom for Loyola’s exceptional Jesuit liberal arts education.",
  footer:"EXPLORE BALTIMORE",
  }
},{
  key:3,
  link:"#",
  cardcont:{
  image:"https://cdn.loyola.edu/project/core/extensions/institutional/home/images/students-lunch-min.jpg",
  header:"DIVERSITY, EQUITY & INCLUSION",
  body:"We are steadfastly committed to the well-being and success of all members of our campus community. This includes a strong and active commitment to promoting—and celebrating—diversity, equity, and inclusion, so that all persons at Loyola feel a sense of belonging and value.",
  footer:"EXPLORE LOYOLA'S COMMITMENT ",
}
}
]


  const percentageCard: any = [{
    key:1,
    head:"TOP 2%",
    body:"in the nation for long-term return on investment out of 4,500 universities",
  },{
    key:2,
    head:"99%",
    body:"of Loyola graduates are employed, in graduate or professional school, or participating in a year of service within 6-9 months of graduation",
  },{
    key:3,
    head:"TOP 2%",
    body:"for economic value added to the mid-career salary of alumni by the Brookings Institution",
  }
]
  
  

  return (
    <main className="relative  ">
      {/* Video */}
      <div className="relative w-[100%]  sm:w-[100%]  md:h-[51rem]  sm:h-[40rem]">
        <BgVideo/>
        {/* navbar */}
        <div className="absolute top-2 left-0 right-0">
          {/* <Nvbr /> */}
          <Nav openNav={openNav} />
          
        </div>

        {/* colordiv */}
        <div className="absolute top-0 left-0 right-0 w-[100%] sm:h-[1%] bg-emerald-600 " > </div>


        <div className="absolute 2xl:top-[20%] xl:top-[20%]  lg:top-[20%] md:top-[20%]  top-[25%]  left-[calc(50%-6rem)]  lg:w-[16rem] md:w-[15rem] sm:w-[13rem] w-[10rem]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <JSIcon />
          <Link
            href='/app'
            target='_blank'
            className={cn(buttonVariants({
              variant: 'text1',
              size: 'xlg',
            }), 'absolute top-[5%] left-[calc(50%-2.5rem)] right-0')}
          >
            <span className="default-text text-4xl leading-8 font-black " >
              {isHovered ? '' : 'MORE THAN READY'}
            </span>
            <span className="default-text  lg:text-3xl md:text-3xl text-2xl leading-6 font-black " >
              {isHovered ? 'DISCOVER THE LOYOLA DIFFERENCE' : ''}
            </span>
            </Link>

            <div className="">
            <span className="absolute lg:top-[16rem] md:top-[15rem] top-[10rem] mr-10 mx-auto left-[calc(50%-0.75rem)] text-center h-[4rem] w-[10rem] text-3xl text-emerald-500 animate-bounce delay-150 " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {isHovered ? <MoveDown/> :'' }
            </span>

            <div className="absolute top-[70%]  lg:left-[calc(30%)] md:left-[calc(30%)] left-[calc(25%)] h-52 w-[10rem] text-emerald-500">
            <span >
              {isHovered ? '':'SINCE 1852' }
            </span>
            </div>

            </div> 
            
             
            
        </div>
        

        {/* colordiv */}
        <div className=" bottom-0 2xl:flex xl:flex  lg:flex md:flex hidden">
          
        

        {/* <div className="absolute skew-y-3 bottom-10 left-0 right-0 w-full h-[16rem] bg-emerald-800 opacity-10 animate-spin  spin-in-6 duration-5000 " > </div> */}
        <div className="absolute skew-y-3 bottom-0 left-0 right-0 w-full h-[13rem] bg-[#0d4b34] opacity-20 animate-spin spin-in-6 duration-5000" > </div>
        <div className="absolute skew-y-3 bottom-0 left-0 right-0 w-full h-[11rem] bg-[#0d4b34] opacity-35 animate-spin spin-in-6 duration-5000" > </div>
        <div className="absolute bottom-2 left-0 right-0 w-full h-[12rem] bg-[#0d4b34] opacity-50  animate-bounce" > </div>
        <div className="absolute bottom-2 left-0 right-0 w-full h-[12rem] bg-[#0d4b34] opacity-50  animate-bounce" > </div>

        {/* <div className="absolute -skew-y-3  bottom-10 left-0 right-0 w-full h-[16rem] bg-emerald-800 opacity-10 animate-spin spin-out-6 duration-5000" > </div> */}
        <div className="absolute -skew-y-3 bottom-10 left-0 right-0 w-full h-[13rem] bg-[#0d4b34] opacity-20 animate-spin spin-out-6 duration-5000" > </div>
        <div className="absolute -skew-y-3 bottom-10 left-0 right-0 w-full h-[11rem] bg-[#0d4b34] opacity-35 animate-spin spin-out-6 duration-5000" > </div>
        <div className="absolute bottom-2 left-0 right-0 w-full h-[10rem] bg-[#0d4b34] opacity-50  animate-bounce" > </div>
        <div className="absolute bottom-2 left-0 right-0 w-full h-[9.5rem] bg-[#0d4b34] opacity-60   " > </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[9rem] bg-[#0d4b34]  " > </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[6rem] bg-[#0d4b34] " > </div>

        </div>

        <div className=' xl:flex 2xl:flex lg:flex md:flex hidden absolute top-[60%] 2xl:mx-[15%] xl:mx-[10%] lg:mx-[5%] md:mx-[5%] sm:mx-[5%]  mt-16 2xl:w-[100%]  lg:max-w-6xl md:w-[90%] sm:w-[90%] w-[90%] sm:mt-[2rem]  '>
          <NewsCard data={newsCard}/>
          </div>

        
      

      </div>
      <div className='lg:hidden md:hidden sm:flex  top-[60%] bottom-0 lg:mx-[10%] md:mx-[5%] sm:mx-[5%] mx-[5%]  mt-16 lg:max-w-6xl md:w-[90%] sm:w-[90%] w-[90%] sm:mt-[2rem]  '>
          <NewsCard data={newsCard}/>
          </div>

     
        
        
          <div className="relative "> 
          {/* {menuData.map((data: any) => {
              return (         
            <div className=" " key={data.key}>
            <FutureGreyhounds data={data} />       
          </div>
            )
          })} */}
          <FutureGreyhounds data={menuData} />
          
      
        </div> 
   



      <div className=" relative bg-slate-100     w-full ">
      <div className=" border-b-[4px]  border-double border-y-8 border-slate-200" />
      <div className=" border-b-[4px]  border-double border-y-8 border-slate-200" />
      <div className=" border-b-[4px]  border-double border-y-8 border-slate-200" />
      <div className=" border-b-[4px]  border-double border-y-8 border-slate-200" />
      <div className=" border-b-[4px]  border-double border-y-8 border-slate-200" />
    
     
                
        <div className="flex mt-[6rem] ">
        <div>
        <LoyolaDifference/>
        </div>
        

        </div>

        {/* colordiv */}
        <div className="absolute skew-y-3 bottom-10 left-0 right-0 w-full h-[16rem] bg-emerald-800 opacity-10 animate-spin  spin-in-6 duration-5000 " > </div>
        <div className="absolute skew-y-3 bottom-10 left-0 right-0 w-full h-[13rem] bg-emerald-800 opacity-20 animate-spin spin-in-6 duration-5000" > </div>
        <div className="absolute skew-y-3 bottom-10 left-0 right-0 w-full h-[11rem] bg-emerald-950 opacity-35 animate-spin spin-in-6 duration-5000" > </div>
        <div className="absolute bottom-2 left-0 right-0 w-full h-[12rem] bg-emerald-950 opacity-50  animate-bounce" > </div>
        <div className="absolute bottom-2 left-0 right-0 w-full h-[12rem] bg-emerald-950 opacity-50  animate-bounce" > </div>

        <div className="absolute -skew-y-3  bottom-10 left-0 right-0 w-full h-[16rem] bg-emerald-800 opacity-10 animate-spin spin-out-6 duration-5000" > </div>
        <div className="absolute -skew-y-3 bottom-10 left-0 right-0 w-full h-[13rem] bg-emerald-800 opacity-20 animate-spin spin-out-6 duration-5000" > </div>
        <div className="absolute -skew-y-3 bottom-10 left-0 right-0 w-full h-[11rem] bg-emerald-950 opacity-35 animate-spin spin-out-6 duration-5000" > </div>
        <div className="absolute bottom-2 left-0 right-0 w-full h-[10rem] bg-emerald-950 opacity-50  animate-bounce" > </div>
        <div className="absolute bottom-2 left-0 right-0 w-full h-[9.5rem] bg-emerald-950 opacity-60   " > </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[9rem] bg-emerald-950  " > </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[6rem] bg-emerald-950 " > </div>


        <div className=" relative  " >
          {/* {percentageCard.map((data: any)=>{
            return(
              <div className="" key={data.key}>

              <PercentageCard data={data}/>


              </div>
            )
          })} */}
           <PercentageCard data={percentageCard}/>
        
       </div>

       </div>


       <div className=" grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3  gap-4 bg-emerald-950 pt-[8rem]  pb-[7rem] px-[8%] ">
        {cardData.map((data: any) => {
            return (     
              <Link  href="#" >
                  
              <div className="  lg:h-[35rem]  " key={data.key}>
                
                <CardView data={data.cardcont}  /> 
                
              </div>
              </Link>    
          )
          
        })}
          
      
        
  
       </div>
{/* greyhound nation  */}
       {/* <div className="relative  bg-slate-400 w-full h-[60rem]">
        <div className="absolute bg-transparent left-0 w-full h-[50rem]">

          <div className="absolute mx-[9%] mt-[9%] ">

            <CardViewOne/>

          </div>

        </div>
       </div> */}
      <div>
           <StudentVoice/>
      </div>
       

       <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3  gap-4 bg-emerald-950 pt-[8rem]  pb-[7rem] px-[8%] ">
       {cardData1.map((data: any) => {
            return (     
              <Link  href="#" >
                  
              <div className=" lg:h-[40rem] " key={data.key}>
                
                <CardView data={data.cardcont}  /> 
                
              </div>
              </Link>    
          )
        })}
  
       </div>

       <div className="relative ">
        <ReadytoLearn/>
       </div>





       
    </main>
  );
 
  
  
}
