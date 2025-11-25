import rectangle from "../assets/icon_rectangle.svg";
import dollar from "../assets/icon_dollar_2.svg";
import man from "../assets/icon_man.svg";
import home from "../assets/icon_home.svg";

import img1 from "../assets/shape_dollar_2.webp";
import img2 from "../assets/shape_dollar_3.webp";
import img3 from "../assets/shape_dollar_6.webp";
import search from "../assets/icon_search.svg";
import chart from "../assets/icon_chart_bar_2.svg";
import discount from "../assets/icon_discount.svg";
import nate from "../assets/shape_nate_8.svg";
import nate2 from "../assets/shape_nate_10.svg";
import { motion } from "framer-motion";
function OurSection3(){
    return(
        <section className="bg-[#023436ff] relative lg:pt-40 pt-20 lg:h-300 h-740 overflow-hidden px-[15px] text-center lg:text-start">
            <div className="absolute top-[-50px] left-[-50px] lg:block hidden"><img src={nate} alt="" /></div>
             <div className="absolute bottom-[-50px] right-[-260px] lg:block hidden"><img src={nate2} alt="" /></div>
            <div>
                 <motion.h1 className="lg:text-[50px] text-[30px] font-semibold text-white flex justify-center "
                   initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                 >What we can help you with</motion.h1>
                    <motion.p className="text-[18px] text-[#C6C6C6] lg:w-150 text-center lg:pt-2 pt-4 mx-auto "
                       initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                    >We're here to assist with your financial goals. From investments to retirement planning, count on us for expert guidance</motion.p>
            </div>

 <div className="flex flex-col lg:flex-row justify-center gap-8 lg:pt-8 pt-13">

  <motion.div className="relative inline-block bg-[#022627ff] lg:w-100 px-[35px] pt-10 rounded-xl h-100 border border-[#033f42ff] hover:border hover:border-[#044e50ff] #044e50ff transition-all duration-700 ease-in-out"
   initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
  >
  <img src={rectangle} alt="" className="" />

  <div className="absolute  justify-center  top-14 left-12">
    <img src={home} alt="" className="w-8" />
  </div>
<div className="mt-4">
  <p href="#" className="lg:text-[26px] text-[22px] font-semibold text-white  text-start hover:text-[#D9FF43] transition-all duration-700 ease-in-out">
Real Estate Investment Advisory</p>

  </div>
  <p className="text-[17px] text-start text-[#C6C6C6]  pt-2 mt-4  ">Real Estate Investment Advisory cater to individuals and organizations.</p>
  <a href="#" className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 mt-12">Read More <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></a>
</motion.div>


  <motion.div className="relative inline-block bg-[#022627ff] lg:w-100 px-[35px] pt-10 rounded-xl lg:h-100 h-110 border border-[#033f42ff] hover:border hover:border-[#044e50ff] #044e50ff transition-all duration-700 ease-in-out"
   initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
  >
  <img src={rectangle} alt="" className="" />

  <div className="absolute  justify-center  top-13 left-12">
    <img src={search} alt="" className="w-9" />
  </div>
<div className="mt-4">
  <p href="#" className="text-[26px] font-semibold text-white text-start hover:text-[#D9FF43] transition-all duration-700 ease-in-out">Investment Research and Analysis</p>
  </div>
  <p className="text-[17px] text-start text-[#C6C6C6]  pt-2 mt-4  ">Our Investment Research and Analysis team uncovers valuable insights.</p>
  <a href="#" className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 mt-12">Read More <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></a>
</motion.div>


  <motion.div className="relative inline-block bg-[#022627ff] lg:w-100 px-[35px] pt-10 rounded-xl h-100 border border-[#033f42ff] hover:border hover:border-[#044e50ff] #044e50ff transition-all duration-700 ease-in-out"
   initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
  >
  <img src={rectangle} alt="" className="" />

  <div className="absolute  justify-center  top-13 left-11">
    <img src={chart} alt="" className="w-10 h-10" />
  </div>
<div className="mt-4">
  <p href="#" className="text-[26px] font-semibold text-white text-start hover:text-[#D9FF43] transition-all duration-700 ease-in-out">Risk Management Solutions</p>
  </div>
  <p className="text-[17px] text-start text-[#C6C6C6]  pt-2 mt-4  ">Our Risk Management Solutions ensure your investments are safeguarded.</p>
  <a href="#" className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 mt-13">Read More <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></a>
</motion.div>

      </div>


<div className="flex flex-col lg:flex-row justify-center gap-8 pt-8">

<motion.div className="relative inline-block bg-[#022627ff] lg:w-100 px-[35px] pt-10 rounded-xl h-100 border border-[#033f42ff]  hover:border #033f42ff hover:border-[#044e50ff] #044e50ff transition-all duration-700 ease-in-out"
 initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img src={rectangle} alt="" className="" />

  <div className="absolute  justify-center  top-13 left-12">
    <img src={dollar} alt="" className="w-9" />
  </div>
<div className="mt-4">
  <p href="#" className="text-[26px] font-semibold text-white text-start hover:text-[#D9FF43] transition-all duration-700 ease-in-out">Financial Planning and Consultation</p>
  </div>
  <p className="text-[17px] text-start text-[#C6C6C6]  pt-2 mt-4  ">We offers personalized guidance to secure your financial future.</p>
  <a href="#" className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 mt-10">Read More <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></a>
</motion.div>


  <motion.div className="relative inline-block bg-[#022627ff] lg:w-100 px-[35px] pt-10 rounded-xl h-100 border border-[#033f42ff] hover:border hover:border-[#044e50ff] #044e50ff transition-all duration-700 ease-in-out"
   initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
  >
  <img src={rectangle} alt="" className="" />

  <div className="absolute  justify-center  top-13 left-10">
    <img src={man} alt="" className="w-10 h-10" />
  </div>
<div className="mt-4">
  <p href="#" className="text-[26px] font-semibold text-white text-start hover:text-[#D9FF43] transition-all duration-700 ease-in-out">Retirement Planning Services</p>
  </div>
  <p className="text-[17px] text-start text-[#C6C6C6]  pt-2 mt-4  ">Secure Your Future with Retirement Planning Services at Finto.</p>
  <a href="#" className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 mt-10">Read More <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></a>
</motion.div>



 <motion.div className="relative inline-block bg-[#022627ff] lg:w-100 px-[35px] pt-10 rounded-xl h-100 border border-[#033f42ff] hover:border hover:border-[#044e50ff] #044e50ff transition-all duration-700 ease-in-out"
  initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
 >
  <img src={rectangle} alt="" className="" />

  <div className="absolute  justify-center  top-13 left-11">
    <img src={discount} alt="" className="w-10 h-10" />
  </div>
<div className="mt-4">
  <p href="#" className="text-[26px] font-semibold text-white text-start hover:text-[#D9FF43] transition-all duration-700 ease-in-out">Tax-Efficient Investing Solutions</p>
  </div>
  <p className="text-[17px] text-start text-[#C6C6C6]  pt-2 mt-4  ">These solutions recognize the impact of taxes on investment performance.</p>
  <a href="#" className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 mt-10">Read More <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></a>
</motion.div>





</div>




        </section>
    )
}
export default OurSection3;