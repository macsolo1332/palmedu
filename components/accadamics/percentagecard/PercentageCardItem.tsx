const PercentageCardItem=(props:any)=>{

    const{head,body}=props?.data;

    // console.log("percentage",props);
    return(
        <div className="flex  ">
        <div className="pb-10"> 
    <div  className=" font-bold text-emerald-700 lg:w-[16rem] md:w-[6.5rem] lg:text-5xl md:text-2xl sm:text-2xl text-2xl  text-left mt-[2rem]  ml-6 leading-7 subpixel-antialiased ">
     {head}
    </div>
    <div className=" mx-[2rem] lg:mt-[2rem] lg:w-[17rem] md:w-[80%] tracking-tight subpixel-antialiased ">
    <p> {body}</p>
</div>
</div>
</div>
    )

}
export default PercentageCardItem;