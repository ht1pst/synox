import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import nate2 from "../assets/shape_nate_8.svg";
import img1 from "../assets/shape_dollar_2.webp";
import img2 from "../assets/shape_dollar_3.webp";
import img3 from "../assets/shape_dollar_6.webp";
import rectangle from "../assets/icon_rectangle.svg";
import search from "../assets/icon_search.svg";
import chart from "../assets/icon_chart_bar_2.svg";
import dollar from "../assets/icon_dollar_2.svg";
import man from "../assets/icon_man.svg";
import { motion } from "framer-motion";

function Section3(){
    return(
        <section className="bg-[#023436ff] lg:h-320 h-620 px-[20px] overflow-hidden">
            <div className="lg:pt-30 pt-22 relative">
                <div>
                   <motion.h1
  initial={{ opacity: 0, y: 40 }}          // start invisible and slightly lower
  whileInView={{ opacity: 1, y: 0 }}      // slide up when in view
  viewport={{ once: true, amount: 0.3 }}  
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="lg:text-[50px] text-[30px] font-semibold text-white flex justify-center lg:text-start text-center"
>
  What we can help you with
</motion.h1>
                  <motion.p
  initial={{ opacity: 0, y: 40 }}          // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}      // slide up when in view
  viewport={{ once: true, amount: 0.3 }}  
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // slight delay after heading
  className="lg:text-[20px] text-[18px] text-[#C6C6C6] lg:w-150 text-center pt-2 mx-auto"
>
  We're here to assist with your financial goals. From investments to retirement planning, count on us for expert guidance
</motion.p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-center pt-10">
                    <motion.div
  className="lg:w-206 lg:h-100 h-80 lg:px-15 px-[40px] lg:py-20 py-13 rounded-xl relative"
  style={{ background: "linear-gradient(-45deg, #00F1B5, #D9FF43)" }}
  initial={{ opacity: 0, y: 40 }}           // start below and invisible
  whileInView={{ opacity: 1, y: 0 }}       // slide up into view
  viewport={{ once: true, amount: 0.3 }}   // only animate once
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="absolute top-[-30px] right-[-100px] z-20 opacity-20 lg:block hidden">
    <img src={nate2} alt="" className="w-70" />
  </div>
  <div className="absolute bottom-25 right-65 lg:block hidden">
    <img src={img2} alt="" className="w-15" />
  </div>
  <div className="absolute top-10 right-40 blur-[2px] lg:block hidden">
    <img src={img1} alt="" className="w-11" />
  </div>
  <div className="absolute bottom-8 right-5 blur-[2px] lg:block hidden">
    <img src={img3} alt="" className="w-12" />
  </div>

  <h1 className="lg:text-[50px] text-[36px] leading-[42px] font-semibold text-[#012A2B] lg:w-120">
    The best service we offer for you
  </h1>

  <button className="flex bg-[#012A2B] text-lg text-white font-semibold lg:h-16 h-14 w-50 rounded-sm mt-7 items-center justify-center gap-2">
    More Services  
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff">
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
    </svg>
  </button>
</motion.div>


                   <motion.div
  className="relative inline-block bg-[#022627ff] lg:w-100 px-[40px] pt-10 rounded-xl h-100"
  initial={{ opacity: 0, y: 40 }}           // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}       // slide up into view
  viewport={{ once: true, amount: 0.3 }}   // animate only first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img src={rectangle} alt="" className="" />

  <div className="absolute justify-center top-12 left-13">
    <img src={search} alt="" className="w-10" />
  </div>

  <div className="mt-6">
    <a
      href="#"
      className="lg:text-[26px] text-[21px] font-semibold text-white hover:text-[#D9FF43] transition-all duration-700 ease-in-out"
    >
      Investment Research and Analysis
    </a>
  </div>

  <p className="text-[18px] text-[#C6C6C6] pt-2 lg:mt-8 mt-5">
    Our Investment Research and Analysis team uncovers valuable insights.
  </p>

  <a
    href="#"
    className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 lg:mt-6 mt-10"
  >
    Read More{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#ffffffff"
    >
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
    </svg>
  </a>
</motion.div>


      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 pt-8">


  <motion.div
  className="relative inline-block bg-[#022627ff] lg:w-100 px-[40px] pt-10 rounded-xl h-100"
  initial={{ opacity: 0, y: 40 }}           // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}       // slide up into view
  viewport={{ once: true, amount: 0.3 }}   // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img src={rectangle} alt="" className="" />

  <div className="absolute justify-center top-13 left-12">
    <img src={chart} alt="" className="w-10" />
  </div>

  <div className="mt-6">
    <a
      href="#"
      className="lg:text-[26px] text-[21px] font-semibold text-white hover:text-[#D9FF43] transition-all duration-700 ease-in-out"
    >
      Risk Management Solution
    </a>
  </div>

  <p className="text-[18px] text-[#C6C6C6] pt-2 lg:mt-8 mt-5">
    Our Risk Management Solutions ensure your investments are safeguarded.
  </p>

  <a
    href="#"
    className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 lg:mt-6 mt-10"
  >
    Read More{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#ffffffff"
    >
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
    </svg>
  </a>
</motion.div>

  <motion.div
  className="relative inline-block bg-[#022627ff] lg:w-100 px-[40px] pt-10 rounded-xl h-100"
  initial={{ opacity: 0, y: 40 }}           // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}       // slide up into view
  viewport={{ once: true, amount: 0.3 }}   // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img src={rectangle} alt="" className="" />

  <div className="absolute justify-center top-13 left-13">
    <img src={dollar} alt="" className="w-9" />
  </div>

  <div className="mt-6">
    <a
      href="#"
      className="lg:text-[26px] text-[21px] font-semibold text-white hover:text-[#D9FF43] transition-all duration-700 ease-in-out"
    >
      Financial Planning and Consultation
    </a>
  </div>

  <p className="text-[18px] text-[#C6C6C6] pt-2 lg:mt-8 mt-5">
    We offer personalized guidance to secure your financial future.
  </p>

  <a
    href="#"
    className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 lg:mt-6 mt-10"
  >
    Read More{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#ffffffff"
    >
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
    </svg>
  </a>
</motion.div>


  <motion.div
  className="relative inline-block bg-[#022627ff] lg:w-100 px-[40px] pt-10 rounded-xl h-100"
  initial={{ opacity: 0, y: 40 }}           // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}       // slide up into view
  viewport={{ once: true, amount: 0.3 }}   // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img src={rectangle} alt="" className="" />

  <div className="absolute justify-center top-13 left-12">
    <img src={man} alt="" className="w-10 h-10" />
  </div>

  <div className="mt-6">
    <a
      href="#"
      className="lg:text-[26px] text-[21px] font-semibold text-white hover:text-[#D9FF43] transition-all duration-700 ease-in-out"
    >
      Retirement Planning Services
    </a>
  </div>

  <p className="text-[18px] text-[#C6C6C6] pt-2 lg:mt-8 mt-5">
    Secure Your Future with Retirement Planning Services at Synox.
  </p>

  <a
    href="#"
    className="flex gap-2 text-lg font-semibold text-white underline underline-offset-7 lg:mt-6 mt-10"
  >
    Read More{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#ffffffff"
    >
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
    </svg>
  </a>
</motion.div>




      </div>
            </div>
        </section>
    )
}
export default Section3;