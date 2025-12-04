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
import { motion } from "framer-motion";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
function Section2(){
      const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // 👈 runs only once
    threshold: 0.3,    // start when 30% of element is visible
  });      

     

    return(
        <section className=" lg:h-340 h-580 bg-[#022627ff] relative overflow-hidden px-[20px]">
            <div className="absolute lg:top-[-200px] top-[-160px] lg:left-[-400px] left-[-460px]  "><img src={nate} alt="" className="" /></div>
              <div className="absolute lg:top-0 top-20 lg:right-[-200px]  right-[-270px]  "><img src={nate2} alt="" className="" /></div>
       <div className="lg:pt-30 pt-22 relative">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center"
  >
    <h1 className="text-[18px] text-white gap-2 font-bold decoration-[#D9FF43] underline-offset-10 flex justify-center">
      TRUSTED BY <span className="text-[#D9FF43]">100k+ INVESTORS</span>
    </h1>

    <div className="border flex justify-center mx-auto w-72 text-[#D9FF43] border-[1px] mt-2"></div>
  </motion.div>
</div>

         <motion.div
  className="flex justify-center lg:gap-10 gap-5 lg:pt-10 pt-15"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.15, // each logo animates 0.15s after the previous
      },
    },
  }}
>
  {[img1, img2, img3, img4, img5, img6, img7].map((logo, index) => (
    <motion.img
      key={index}
      src={logo}
      alt=""
      className={`lg:w-[150px] w-[100px] lg:h-[30px] h-[20px] ${index >= 3 ? "lg:block hidden" : ""}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  ))}
</motion.div>

<div className="flex flex-col   justify-center relative items-center    lg:pt-50 pt-20">
     <div className="absolute top-1/2 right-30 z-20 hidden "><img src={chart} alt="" className="w-40" /></div>
     <div className="absolute bottom-[-50px] right-10 hidden lg:block "><img src={dollar5} alt="" className="w-15" /></div>
             <div className="absolute bottom-60 right-170 "><img src={dollar3} alt="" className="w-15" /></div>
    <div>
  <motion.img
    src={shape}
    alt="Shape"
    className="w-175 lg:bottom-[-40px] bottom-[-15px] absolute left-1/2 -translate-x-1/2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  />
</div>
         <div>
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="lg:text-[50px] text-[30px] font-semibold text-white leading-tight w-[100%] lg:w-120 mt-10"
>
  We Value Data for Informed Investing
</motion.h1>

           <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="lg:text-[20px] text-[18px] text-[#C6C6C6] font-thin lg:leading-[34px] leading-[30px] w-[100%] lg:w-130 pt-5"
>
  At synox, we prioritize data for smarter investments. Our approach relies on thorough analysis of market trends, economic indicators, and company performance.
</motion.p>
            
            <div ref={ref} className="flex lg:gap-10 gap-18 lg:pt-10 pt-7">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
  >
    <h1 className="text-white lg:text-5xl text-[30px] font-semibold">
      {inView && <CountUp start={150} end={200} duration={4} />}K+
    </h1>
    <p className="lg:text-[20px] text-[16px] text-[#C6C6C6]">Projects Done</p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // stagger second block
  >
    <h1 className="text-white lg:text-5xl text-[30px] font-semibold">
      {inView && <CountUp end={27} duration={2} />}+
    </h1>
    <p className="lg:text-[20px] text-[16px] text-[#C6C6C6]">Years Experience</p>
  </motion.div>
</div>

            <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative lg:mt-10 mt-12"
>
  <div className="absolute top-0 left-0">
    <img src={btn} alt="" className="w-15 h-18 rounded-b-xl" />
  </div>
  <button className="flex bg-[#D9FF43] text-md font-semibold h-18 w-55 rounded-sm items-center justify-center">
    About Us
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000000"
      className="ml-2"
    >
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
    </svg>
  </button>
</motion.div>

            
         </div>

         <div className="relative mt-10">
             <div className="absolute top-10 left-10  "><img src={dollar3} alt="" className="w-12" /></div>
             <div className="absolute top-30 right-3 z-20  "><img src={chart} alt="" className="w-22" /></div>
             
<motion.img
  src={mac}
  alt="Mac"
  className="w-160"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
/>
         </div>
</div>


<div className="flex flex-col lg:flex-row relative justify-center lg:gap-4 gap-7 lg:mt-30 mt-23">
   

<motion.div
  initial={{ opacity: 0, y: 40 }}       // start slightly lower and invisible
  whileInView={{ opacity: 1, y: 0 }}   // slide up into place
  viewport={{ once: true, amount: 0.3 }} 
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex flex-col lg:flex-row relative justify-center lg:gap-4 gap-7 lg:mt-30 mt-23"
>
  {/* Decorative Dollar Image */}
  <motion.img
    src={dollar3}
    alt=""
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="absolute bottom-[-40px] left-22 hidden lg:block w-10"
  />

  {/* Card */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // stagger
    className="lg:w-105 lg:h-45 h-70 px-[30px] py-[40px] lg:rounded-xl rounded-2xl bg-[#023436ff] hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out"
  >
    <div className="flex flex-col lg:flex-row items-start gap-5">
      <img src={bag} alt="" className="lg:w-8 w-13" />
      <h1 className="text-2xl font-semibold text-white">Funding & Investment</h1>
    </div>
    <p className="text-[18px] text-[#C6C6C6] pt-5">
      At Synox we excel funding & investing, guiding strategic decisions.
    </p>
  </motion.div>
</motion.div>


     <motion.div
  initial={{ opacity: 0, y: 40 }}       // start invisible and lower
  whileInView={{ opacity: 1, y: 0 }}   // slide up into place
  viewport={{ once: true, amount: 0.3 }} 
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // slight delay for stagger
  className="lg:h-45 h-70 px-[30px] py-[40px] lg:rounded-xl rounded-2xl bg-[#023436ff] hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out"
>
  <div className="flex flex-col lg:flex-row items-start gap-5">
    <img src={overlay} alt="" className="lg:w-8 w-13" />
    <h1 className="text-2xl font-semibold text-white">Capital Transparency</h1>
  </div>
  <p className="text-[18px] text-[#C6C6C6] pt-5">
    We prioritize capital transparency. Our commitment ensures clarity.
  </p>
</motion.div>

    <motion.div
  initial={{ opacity: 0, y: 40 }}        // start invisible and slightly lower
  whileInView={{ opacity: 1, y: 0 }}    // slide up into place
  viewport={{ once: true, amount: 0.3 }} 
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }} // staggered delay
  className="lg:h-45 h-78 px-[30px] py-[40px] lg:rounded-xl rounded-2xl bg-[#023436ff] hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out"
>
  <div className="flex flex-col lg:flex-row items-start gap-5">
    <img src={dollar2} alt="" className="lg:w-8 w-13" />
    <h1 className="text-2xl font-semibold text-white">Secure Investment Plan</h1>
  </div>
  <p className="text-[18px] text-[#C6C6C6] pt-5">
    Our Secure Investment Plan at Synox ensures stability and growth.
  </p>
</motion.div>

</div>

        </section>
    )
}
export default Section2;