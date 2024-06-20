import Image from "next/image";

const FourImageGallery = ()=>{
    return(
        <div className="  lg:h-[100%] md:h-[100%] sm:h-[100%] h-[100%] lg:w-[100%]  md:w-[100%] sm:w-[100%] w-[100%] bg-slate-100">
            <div className=" flex h-[50%] w-[100%]">
                <div className="mt-3 ml-3">
                <Image
                        alt=""
                        src='/student-science-min.jpg'
                        width="232"
                        height="247"
                        className="d-inline-block align-top"
                    />
                </div>
                <div className="ml-3 mt-3">
                <Image
                        alt=""
                        src='/students-professor-sellinger-min.jpg'
                        width="357"
                        height="222"
                        className="d-inline-block align-top"
                    />
                </div> 
            </div>
            
            <div className="flex h-[50%] w-[100%] ">
            <div className="mt-3 ml-3">
                <Image
                        alt=""
                        src='/humanities-students-min.jpg'
                        width="357"
                        height="222"
                        className="d-inline-block align-top"
                    />
                </div>
                <div className="ml-3 mt-3">
                <Image
                        alt=""
                        src='/athletes-greyhound-min.jpg'
                        width="232"
                        height="247"
                        className="d-inline-block align-top"
                    />
                </div>
            </div>
            

        </div>
    )
}
export default FourImageGallery;