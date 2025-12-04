import img1 from "../assets/project_image_1.webp";
import img2 from "../assets/project_image_2.webp";
import img3 from "../assets/project_image_3.webp";
import img4 from "../assets/project_image_4.webp";
import img5 from "../assets/project_image_5.webp";
import img6 from "../assets/project_image_6.webp";
import img7 from "../assets/project_image_7.webp";
import dollar3 from "../assets/shape_dollar_3.webp";
import nate5 from "../assets/shape_nate_5.svg";
import nate6 from "../assets/shape_nate_6.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function ProjectsSection2(){
    return(
        <section className="lg:h-460 h-710 relative lg:pt-30 pt-16 overflow-hidden px-[20px]">
            <div className="relative">
            <div className="absolute right-20 top-35"><img src={dollar3} alt="" className="w-15" /></div>
          <div className="absolute bottom-[-460px] lg:right-[-300px] right-[-340px]"><img src={nate5} alt="" /></div>
          <div className="absolute bottom-[-520px] left-[-300px]"><img src={nate6} alt="" /></div>
             <div className="flex flex-col lg:justify-center justify-center lg:gap-20 gap-7 pt-10">
                <motion.h1 className="lg:text-[45px] text-[30px] text-[#212529] lg:w-150 leading-none font-semibold leading-tight"
                 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                >Checkout our latest Completed project</motion.h1>
                <motion.p className="lg:text-[20px] text-[18px] text-[#6c757d]  lg:w-160 leading-normal mt-5"
                initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                >At Synox, we prioritize data for smarter investments. Our approach relies on thorough analysis of market trends, economic indicators, and company performance.</motion.p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-7 lg:mt-20 mt-16 relative">
                 <motion.div className="group lg:w-105 lg:h-110 h-90 relative overflow-hidden rounded-xl cursor-pointer"
                 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                 >
               
                 {/* Image */}
                 <img
                   src={img1}
                   alt=""
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               
                 {/* Dark overlay for dimming */}
                 <div className="
                   absolute inset-0 bg-black 
                   opacity-0 group-hover:opacity-40 
                   transition-opacity duration-300
                 "></div>
               
                 {/* Text on image */}
                <div
  className="
    absolute bottom-4 left-4 right-4
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white flex flex-col
  "
>
  <a
    href="#"
    className="
      text-[22px] text-[#2b2f32] font-semibold bg-white rounded-lg h-13 w-65
      flex items-center px-4
      transition-all duration-300
    "
  >
    Finance Consultancy
  </a>

  <a
    href="#"
    className="
      text-[16px] text-[#2b2f32] mt-1 font-semibold bg-white rounded-lg h-10 w-25
      flex items-center justify-center
      opacity-0 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    Advisory
  </a>
</div>
               </motion.div>
                
                

                  <motion.div className="group lg:w-215 lg:h-110 relative overflow-hidden rounded-xl cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                  >
               
                 {/* Image */}
                 <img
                   src={img2}
                   alt=""
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               
                 {/* Dark overlay for dimming */}
                 <div className="
                   absolute inset-0 bg-black 
                   opacity-0 group-hover:opacity-40 
                   transition-opacity duration-300
                 "></div>
               
                 {/* Text on image */}
                <div
  className="
    absolute bottom-4 left-4 right-4
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white flex flex-col
  "
>
  <a
    href="#"
    className="
      text-[22px] text-[#2b2f32] font-semibold bg-white rounded-lg h-13 w-75
      flex items-center justify-center px-4
      transition-all duration-300
    "
  >
    Tax Planning for Business
  </a>

  <a
    href="#"
    className="
      text-[16px] text-[#2b2f32] mt-1 font-semibold bg-white rounded-lg h-10 w-25
      flex items-center justify-center
      opacity-0 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    Advisory
  </a>
</div>

               
               </motion.div>

            </div>


            {/* 02 */}

            <div className="flex flex-col lg:flex-row justify-center gap-7 mt-7 relative">
 <motion.div className="group lg:w-105 lg:h-110 h-90 relative overflow-hidden rounded-xl cursor-pointer"
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
 >
               
                 {/* Image */}
                 <img
                   src={img3}
                   alt=""
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               
                 {/* Dark overlay for dimming */}
                 <div className="
                   absolute inset-0 bg-black 
                   opacity-0 group-hover:opacity-40 
                   transition-opacity duration-300
                 "></div>
               
                 {/* Text on image */}
                <div
  className="
    absolute bottom-4 left-4 right-4
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white flex flex-col
  "
>
  <a
    href="#"
    className="
      text-[22px] text-[#2b2f32] font-semibold bg-white rounded-lg h-13 w-70
      flex items-center px-4
      transition-all duration-300
    "
  >
   Minimizing Tax Burden
  </a>

  <a
    href="#"
    className="
      text-[16px] text-[#2b2f32] mt-1 font-semibold bg-white rounded-lg h-10 w-25
      flex items-center justify-center
      opacity-0 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    Advisory
  </a>
</div>
               </motion.div>


                <motion.div className="group lg:w-105 lg:h-110 h-90 relative overflow-hidden rounded-xl cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                >
               
                 {/* Image */}
                 <img
                   src={img4}
                   alt=""
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               
                 {/* Dark overlay for dimming */}
                 <div className="
                   absolute inset-0 bg-black 
                   opacity-0 group-hover:opacity-40 
                   transition-opacity duration-300
                 "></div>
               
                 {/* Text on image */}
                <div
  className="
    absolute bottom-4 left-4 right-4
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white flex flex-col
  "
>
  <a
    href="#"
    className="
      text-[22px] text-[#2b2f32] font-semibold bg-white rounded-lg h-13 w-65
      flex items-center px-4
      transition-all duration-300
    "
  >
   Retirement Planning
  </a>

  <a
    href="#"
    className="
      text-[16px] text-[#2b2f32] mt-1 font-semibold bg-white rounded-lg h-10 w-25
      flex items-center justify-center
      opacity-0 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    Advisory
  </a>
</div>
               </motion.div>



                <motion.div className="group lg:w-105 lg:h-110 h-90 relative overflow-hidden rounded-xl cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                >
               
                 {/* Image */}
                 <img
                   src={img5}
                   alt=""
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               
                 {/* Dark overlay for dimming */}
                 <div className="
                   absolute inset-0 bg-black 
                   opacity-0 group-hover:opacity-40 
                   transition-opacity duration-300
                 "></div>
               
                 {/* Text on image */}
                <div
  className="
    absolute bottom-4 left-4 right-4
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white flex flex-col
  "
>
  <a
    href="#"
    className="
      text-[22px] text-[#2b2f32] font-semibold bg-white rounded-lg h-13 w-65
      flex items-center px-4
      transition-all duration-300
    "
  >
    Investment Portfolio
  </a>

  <a
    href="#"
    className="
      text-[16px] text-[#2b2f32] mt-1 font-semibold bg-white rounded-lg h-10 w-25
      flex items-center justify-center
      opacity-0 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    Advisory
  </a>
</div>
               </motion.div>
            </div>


 {/*03*/}
<div className="flex flex-col lg:flex-row justify-center gap-7 mt-7 relative">

   <motion.div className="group lg:w-215 lg:h-110 relative overflow-hidden rounded-xl cursor-pointer"
   initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
   >
               
                 {/* Image */}
                 <img
                   src={img6}
                   alt=""
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               
                 {/* Dark overlay for dimming */}
                 <div className="
                   absolute inset-0 bg-black 
                   opacity-0 group-hover:opacity-40 
                   transition-opacity duration-300
                 "></div>
               
                 {/* Text on image */}
                <div
  className="
    absolute bottom-4 left-4 right-4
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white flex flex-col
  "
>
  <a
    href="#"
    className="
      text-[22px] text-[#2b2f32] font-semibold bg-white rounded-lg h-13 w-90
      flex items-center px-4
      transition-all duration-300
    "
  >
   Employee Financial Education
  </a>

  <a
    href="#"
    className="
      text-[16px] text-[#2b2f32] mt-1 font-semibold bg-white rounded-lg h-10 w-25
      flex items-center justify-center
      opacity-0 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    Advisory
  </a>
</div>
               </motion.div>



                  <motion.div className="group lg:w-105 lg:h-110 h-90 relative overflow-hidden rounded-xl cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                  >
               
                 {/* Image */}
                 <img
                   src={img7}
                   alt=""
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               
                 {/* Dark overlay for dimming */}
                 <div className="
                   absolute inset-0 bg-black 
                   opacity-0 group-hover:opacity-40 
                   transition-opacity duration-300
                 "></div>
               
                 {/* Text on image */}
                <div
  className="
    absolute bottom-4 left-4 right-4
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white flex flex-col
  "
>
  <a
    href="#"
    className="
      text-[22px] text-[#2b2f32] font-semibold bg-white rounded-lg h-13 w-65
      flex items-center px-4
      transition-all duration-300
    "
  >
   Finance Consultancy
  </a>

  <a
    href="#"
    className="
      text-[16px] text-[#2b2f32] mt-1 font-semibold bg-white rounded-lg h-10 w-25
      flex items-center justify-center
      opacity-0 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    Advisory
  </a>
</div>
               </motion.div>



</div>
</div>
        </section>
    )
}
export default ProjectsSection2