import { Kanban } from "lucide-react";
import DropdownDiv from "./buttondiv/DropdownDiv";
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

const FutureGreyhounds=(props:any)=>{
    // const{Data }=props?.data;
    return(
        <div className="pt-[2rem] pb-[8rem] bg-[#0d4b34] px-[10%] " >

        

        <div className="  " > 
        <div  className="lg:flex md:flex "> 
        
        <div  className=" flex  w-[20rem] lg:w-6 md:w-[20rem]  mb-4 font-bold text-white   ">
          FUTURE GREYHOUNDS
          <div className="text-emerald-600 mt-0 lg:mt-6 md:mt-0 sm:mt-0 "> <Kanban/> </div>
          </div>

          



          <div className=" lg:mt-[4rem] md:mt-[4rem] sm:mt-0 mt-0  ml-0  grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3  gap-4  "> 
          {menuData.map((data: any) => {
              return (         
            <div className="   pr-[2rem]   " key={data.key}>
            <DropdownDiv data={data} />         
          </div>
            )
          })}
          
        </div>

        <div className=" md:mx-[4rem] lg:mx-[4rem] mx-0 my-[3rem] lg:my-0 md:my-0  lg:border-l-8  md:border-l-8     border-slate-400">

        <div className=" ml-[2rem] ">

        <div  className=" flex   w-6  mb-4 font-bold text-white  ">
          CURRENT GREYHOUNDS
          <div className="text-emerald-600 mt-6 "> <Kanban/> </div>
          </div>

          <div className="font-black leading-7 lg:text-xl md:text-2xl sm:text-2xl text-xl text-slate-100 mt-6">
            <a href=""> <div>Students</div></a>
            <a href=""><div>faculty&Staff</div></a>
            <a href=""><div>Alumini</div></a>
            <a href=""><div>parents</div></a>
            
          </div>

          </div>


        </div>
            
            
            
              </div>
           
        
      
      </div>
      </div>
    )

}
export default FutureGreyhounds;