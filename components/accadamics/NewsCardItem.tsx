const NewsCardItem=(props:any)=>{

    const{header,body}=props?.data;

    // console.log("percentage",props);
    return(
        
        <div className=" ml-10  border-r-2 "> 
    <div  className=" font-bold text-emerald-700 lg:w-[16rem] md:w-[6.5rem] lg:text-lg md:text-lg sm:text-lg text-lg  text-left mt-[2rem]  leading-7 subpixel-antialiased ">
     {header}
    </div>
    <div className="  lg:w-[70%] md:w-[75%] w-[80%] tracking-tight subpixel-antialiased font-bold text-emerald-950 ">
    <p> {body}</p>
</div>
</div>

    )

}
export default NewsCardItem;