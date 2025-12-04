
import dollar3 from "../assets/shape_dollar_3.webp";
import bag from "../assets/icon_dollar_bag.svg";
import dollar2 from "../assets/icon_dollar_2.svg";
import overlay from "../assets/icon_overlap.svg";
import ohome from "../assets/icon_home.svg";
import { motion } from "framer-motion";
function OurSection2(){

    
    return(
        <section className="pt-30 lg:h-160 h-350 px-[20px]">
            <div className="flex flex-col lg:flex-row justify-center lg:gap-50 gap-10">
                <motion.h1 className="lg:text-[50px] text-[30px] text-[#212529] lg:w-150 leading-none font-semibold"
                 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                >why our services are better than others?</motion.h1>
                <motion.p className="lg:text-[20px] text-[18px] text-[#6c757d]  lg:w-130"
                 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
                >Our services stand out because we prioritize quality and value above all else. With a relentless customer satisfaction, innovative solution.,</motion.p>
            </div>

            <div className="flex flex-col lg:flex-row relative justify-center gap-7 lg:mt-30 mt-12">
              
                < motion.div className=" lg:w-105   lg:h-45 h-70 px-[35px] py-[30px] rounded-2xl bg-[#023436ff] #023436ff hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out"
                initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                >
            <div className="flex flex-col lg:flex-row lg:items-center items-start gap-5">
                <img src={bag} alt="" className="lg:w-8 w-14" />
                <h1 className="text-2xl font-semibold text-white">Funding & Investment</h1>
            </div>
            <p className="text-[18px] text-[#C6C6C6] pt-5">At Synox we excel funding & investing, guiding strategic decisions.</p>
                </motion.div>
            
                  <motion.div className=" lg:w-105   lg:h-45 h-68 px-[35px] py-[30px] rounded-2xl bg-[#023436ff] #023436ff hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out"
                  initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                  >
           <div className="flex flex-col lg:flex-row lg:items-center items-start gap-5">
                <img src={overlay} alt=""  className="lg:w-8 w-14" />
                <h1 className="text-2xl font-semibold text-white">Capital Transparency</h1>
            </div>
            <p className="text-[18px] text-[#C6C6C6] pt-5">We prioritize capital transparency Our commitment ensures clarity.</p>
                </motion.div>
            
            
                 <motion.div className=" lg:w-105   lg:h-45 h-78 px-[35px] py-[30px] rounded-2xl bg-[#023436ff] #023436ff hover:border hover:border-[#D9FF43] transition-all duration-700 ease-in-out"
                 initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                 >
            <div  className="flex flex-col lg:flex-row lg:items-center items-start gap-5">
                <img src={dollar2} alt=""  className="lg:w-8 w-14" />
                <h1 className="text-2xl font-semibold text-white">Secure Investment Plan</h1>
            </div>
            <p className="text-[18px] text-[#C6C6C6] pt-5">Our Secure Investment Plan at Synox ensures stability and growth.</p>
                </motion.div>
            </div>





            
        </section>
    )
}
export default OurSection2