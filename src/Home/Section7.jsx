import img1 from "../assets/team_member_image_1.webp";
import img2 from "../assets/team_member_image_2.webp";
import img3 from "../assets/team_member_image_3.webp";
import img4 from "../assets/team_member_image_4.webp";
import { motion } from "framer-motion";
function Section7(){
    return(
        <section className="relative bg-[#022627ff]  lg:h-105 h-520 relative ">
            <div className="px-[15px]">


                <div>
     <motion.h1 className="lg:text-[50px] text-[30px] text-center font-semibold text-white flex justify-center"
     
      initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
     >
         Meet Our Leadership Team
        </motion.h1>

        <motion.p className="text-[18px] text-[#C6C6C6] lg:w-160 text-center pt-2 mx-auto " 
        initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
        >
        Meet our leadership team at Synox With expertise in finance, technology, and strategy, they drive our success forward.
        </motion.p>
</div>

<div className="flex flex-col lg:flex-row justify-center gap-5 mt-5 lg:mt-0 pt-10">
    {/* 01 */}
<motion.div className="bg-[#022627ff] mx-auto lg:mx-0 z-30 lg:w-75 w-[100%] lg:h-110 h-120 border border-[#05332bff] #084940ff  hover:border-[#084940ff] rounded-xl  transition-all duration-700 ease-in-out pt-3 "

initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="flex justify-center">
    <img src={img1} alt="" className="lg:w-70 w-[95%]  hover:border-[] rounded-xl  transition-all duration-700 ease-in-out"/>
    </div>
    <h1 className="flex justify-center font-semibold text-white lg:text-[27px] text-[22px]  mt-7 ">Serhiy Yaroslav</h1>
    <p className="flex justify-center text-[18px] text-[#C6C6C6]">Investment Analys</p>
    <div className="flex justify-center gap-5 mt-5 lg:mt-0 ">


      <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
  <i className="fa-solid fa-phone-volume fa-fw text-white group-hover:text-black"></i>
</a>

        <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
            <i className="fa-brands fa-linkedin-in fa-fw text-white group-hover:text-black"></i>
            </a>


        <a href="#"  className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
            <i className="fa-brands fa-instagram fa-fw text-white group-hover:text-black"></i>
            </a>
    </div>
</motion.div>

  {/* 02 */}
<motion.div className="bg-[#022627ff] mx-auto lg:mx-0 z-30 lg:w-75 w-[100%] lg:h-110 h-120 border border-[#042e26ff] #055447f hover:border-[#084940ff] rounded-xl  transition-all duration-700 ease-in-out pt-3"
initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
     <div className="flex justify-center">
    <img src={img2} alt="" className="lg:w-70 w-[95%] hover:border-[] rounded-xl  transition-all duration-700 ease-in-out"/>
    </div>
    <h1 className="flex justify-center font-semibold text-white lg:text-[27px] text-[22px]  mt-7">Pavlo Bohdan</h1>
    <p className="flex justify-center text-[18px] text-[#C6C6C6]">Financial Advisor</p>
    <div className="flex justify-center gap-5 mt-5 lg:mt-0 ">
         <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
  <i className="fa-solid fa-phone-volume fa-fw text-white group-hover:text-black"></i>
</a>

        <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
            <i class="fa-brands fa-linkedin-in fa-fw text-white group-hover:text-black"></i>
            </a>


        <a href="#"  className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
            <i class="fa-brands fa-instagram fa-fw text-white group-hover:text-black"></i>
            </a>
    </div>
</motion.div>

  {/* 03 */}
<motion.div className="bg-[#022627ff] mx-auto lg:mx-0 z-30 lg:w-75 w-[100%] lg:h-110 h-120 border border-[#042e26ff] #055447f hover:border-[#084940ff] rounded-xl  transition-all duration-700 ease-in-out pt-3"
initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
     <div className="flex justify-center">
    <img src={img3} alt="" className="lg:w-70 w-[95%] hover:border-[] rounded-xl  transition-all duration-700 ease-in-out"/>
    </div>
    <h1 className="flex justify-center font-semibold text-white lg:text-[27px] text-[22px]  mt-7">Emma Sophia</h1>
    <p className="flex justify-center text-[18px] text-[#C6C6C6]">Fund Manager</p>
    <div className="flex justify-center gap-5 mt-5 lg:mt-0 ">
        <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
  <i className="fa-solid fa-phone-volume fa-fw text-white group-hover:text-black"></i>
</a>

        <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
            <i class="fa-brands fa-linkedin-in fa-fw text-white group-hover:text-black"></i>
            </a>


        <a href="#"  className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
            <i class="fa-brands fa-instagram fa-fw text-white group-hover:text-black"></i>
            </a>
    </div>
</motion.div>

  {/* 04 */}
<motion.div className="bg-[#022627ff] mx-auto lg:mx-0 z-30 lg:w-75 w-[100%] lg:h-110 h-120 border border-[#042e26ff] #055447f hover:border-[#084940ff] rounded-xl  transition-all duration-700 ease-in-out pt-3"
initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
     <div className="flex justify-center">
    <img src={img4} alt="" className="lg:w-70 w-[95%] hover:border-[] rounded-xl  transition-all duration-700 ease-in-out"/>
    </div>
    <h1 className="flex justify-center font-semibold text-white lg:text-[27px] text-[22px]  mt-7">Jordan Eugenio</h1>
    <p className="flex justify-center text-[18px] text-[#C6C6C6]">Retirement Planner</p>
    <div className="flex justify-center gap-5 mt-5 lg:mt-0 ">
         <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
  <i className="fa-solid fa-phone-volume fa-fw text-white group-hover:text-black"></i>
</a>

        <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
            <i class="fa-brands fa-linkedin-in fa-fw text-white group-hover:text-black"></i>
            </a>


        <a href="#"  className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]">
            <i class="fa-brands fa-instagram fa-fw text-white group-hover:text-black"></i>
            </a>
    </div>
</motion.div>


</div>
</div>

        </section>
    )
}
export default Section7