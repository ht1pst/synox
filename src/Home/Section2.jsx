import img1 from "../assets/client_logo_2.webp"
import img2 from "../assets/client_logo_3.webp"
import img3 from "../assets/client_logo_4.webp"
import img4 from "../assets/client_logo_5.webp"
import img5 from "../assets/client_logo_6.webp"
import img6 from "../assets/client_logo_7.webp"
import img7 from "../assets/client_logo_8.webp"
import mac from "../assets/mac_image_1.webp"
import btn from "../assets/btn_shape.webp";
import shape from "../assets/shape_circle_1.webp";
import dollar3 from "../assets/shape_dollar_3.webp";
import dollar5 from "../assets/shape_dollar_5.webp";
import chart from "../assets/chart_image_1.webp";
import bag from "../assets/icon_dollar_bag.svg";
import dollar2 from "../assets/icon_dollar_2.svg";
import overlay from "../assets/icon_overlap.svg";
import nate from "../assets/shape_nate_9.svg";
import nate2 from "../assets/shape_nate_8.svg";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
function Section2(){
      const [count, setCount] = useState(0);
      

      useEffect(() => {
    let start = 150;
    const end = 200;    // your final number
    const duration = 4000; // animation duration (4 seconds)
    const increment = end / (duration / 10); // 16ms per frame

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, []);

    return(
        <section className=" lg:h-340 h-550 bg-[#022627ff] relative overflow-hidden px-[15px]">
            <div className="absolute lg:top-[-200px] top-[-160px] lg:left-[-400px] left-[-460px]  "><img src={nate} alt="" className="" /></div>
              <div className="absolute top-0 right-[-200px]  "><img src={nate2} alt="" className="" /></div>
        <div className="lg:pt-30 pt-22 relative ">
            
            <h1 className="text-[18px] text-white relative   font-bold underline decoration-[#D9FF43] underline-offset-10 flex justify-center">TRUSTED BY  <span className="text-[#D9FF43]">100k+ Investors</span></h1>
           </div>
           <div className="flex justify-center lg:gap-10 gap-5 lg:pt-10 pt-15">
            <img src={img1} alt="" className="lg:w-[150px] w-[100px]  lg:h-[30px] h-[20px]" />
            <img src={img2} alt="" className="lg:w-[150px] w-[100px] lg:h-[30px] h-[20px]" />
            <img src={img3} alt="" className="lg:w-[150px] w-[100px] lg:h-[30px] h-[20px]"/>
            <img src={img4} alt="" className="w-[150px] h-[30px] lg:block hidden"/>
            <img src={img5} alt="" className="w-[150px] h-[30px] lg:block hidden"/>
            <img src={img6} alt="" className="w-[150px] h-[30px] lg:block hidden"/>
            <img src={img7} alt="" className="w-[150px] h-[30px] lg:block hidden"/>
           </div>
<div className="flex flex-col   justify-center relative items-center    lg:pt-50 pt-20">
     <div className="absolute top-1/2 right-30 z-20 hidden "><img src={chart} alt="" className="w-40" /></div>
     <div className="absolute bottom-[-50px] right-10 hidden lg:block "><img src={dollar5} alt="" className="w-15" /></div>
             <div className="absolute bottom-60 right-170 "><img src={dollar3} alt="" className="w-15" /></div>
     <div><img src={shape} alt="" className="w-175 lg:bottom-[-40px] bottom-[-15px] absolute left-1/2 -translate-x-1/2 " /></div>
         <div>
<h1 className="lg:text-[50px] text-[30px] font-semibold text-white leading-tight w-[100%] lg:w-120 mt-10">We Value Data for  Informed Investing</h1>
            <p className="lg:text-[20px] text-[18px] text-[#C6C6C6] font-thin  lg:leading-[34px] leading-[30px] w-[100%] lg:w-130 pt-5 ">At synox, we prioritize data for smarter investments. Our  approach relies on thorough analysis of market trends,  economic indicators, and company performance.</p>
            
            <div className="flex gap-10 pt-10 ">
<div>
    <h1 className="text-white lg:text-5xl text-[30px] font-semibold"> <CountUp end={200} duration={4} start={150} />K+</h1>
    <p className="lg:text-[20px] text-[16px] text-[#C6C6C6]">Projects Done</p>
</div>
<div>
    <h1 className="text-white lg:text-5xl text-[30px] font-semibold"> <CountUp end={27} duration={2} />+</h1>
    <p className="lg:text-[20px] text-[16px] text-[#C6C6C6]">Years Experience</p>
</div>
            </div>
            <div className="relative mt-10">
  <div className="absolute top-0 left-0 "><img src={btn} alt="" className="w-15" /></div>
<button className="flex bg-[#D9FF43] text-md font-semibold h-16 w-55 rounded-sm items-center justify-center">About Us <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
</button>
</div>
            
         </div>

         <div className="relative mt-10">
             <div className="absolute top-10 left-10  "><img src={dollar3} alt="" className="w-12" /></div>
             <div className="absolute top-30 right-3 z-20  "><img src={chart} alt="" className="w-22" /></div>
             
<img src={mac} alt="" className="w-160" />
         </div>
</div>


<div className="flex flex-col lg:flex-row relative justify-center gap-4 mt-30">
    <div className="absolute bottom-[-40px] left-22 hidden lg:block "><img src={dollar3} alt="" className="w-10" /></div>
    <div className=" lg:w-105   lg:h-45 h-70  px-[30px] py-[40px] lg:rounded-xl rounded-2xl bg-[#023436ff] #023436ff hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out">
<div className="flex flex-col lg:flex-row lg:tems-center items-start gap-5">
    <img src={bag} alt="" className="lg:w-8 w-13" />
    <h1 className="text-2xl font-semibold text-white">Funding & Investment</h1>
</div>
<p className="text-[18px] text-[#C6C6C6] pt-5">At Synox we excel funding & investing, guiding strategic decisions.</p>
    </div>

     <div className="  lg:h-45 h-70   px-[30px] py-[40px] lg:rounded-xl rounded-2xl bg-[#023436ff] #023436ff  hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out">
<div className="flex flex-col lg:flex-row lg:tems-center items-start gap-5">
    <img src={overlay} alt="" className="lg:w-8 w-13" />
    <h1 className="text-2xl font-semibold text-white">Capital Transparency</h1>
</div>
<p className="text-[18px] text-[#C6C6C6] pt-5">We prioritize capital transparency Our commitment ensures clarity.</p>
    </div>


     <div className="  lg:h-45 h-78   px-[30px] py-[40px] lg:rounded-xl rounded-2xl bg-[#023436ff] #023436ff  hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out">
<div className="flex flex-col lg:flex-row lg:tems-center items-start gap-5">
    <img src={dollar2} alt="" className="lg:w-8 w-13" />
    <h1 className="text-2xl font-semibold text-white">Secure Investment Plan</h1>
</div>
<p className="text-[18px] text-[#C6C6C6] pt-5">Our Secure Investment Plan at Synox ensures stability and growth.</p>
    </div>
</div>

        </section>
    )
}
export default Section2;