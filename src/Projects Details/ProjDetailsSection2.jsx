import img from "../assets/project_details_image_1.webp";
import check from "../assets/icon_check.svg";
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


function ProjDetailsSection2(){
    return(
        <section className="lg:pt-40 relative pt-30 lg:h-630 h-1000 px-[20px] overflow-hidden">
              <div className="absolute lg:bottom-[-460px] bottom-[-320px] lg:right-[-300px] right-[-250px]"><img src={nate5} alt="" className="w-120" /></div>
                      <div className="absolute lg:bottom-[-520px] bottom-[-400px] lg:left-[-300px] left-[-300px]"><img src={nate6} alt="" className="w-150" /></div>
<div className="lg:px-30">
    <div className="">

        
  <motion.img
  src={img}
  alt=""
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
/>


     <motion.h1 className="lg:text-[50px] text-[30px] font-semibold text-[#012A2B] lg:mt-15 mt-6"
       initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
     >Tax Planning Strategies for Optimal Business.</motion.h1>

    <motion.p  className="lg:text-[20px] text-[18px] text-[#6B6B6B] lg:mt-5 mt-2 leading-relaxed"
      initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
    >Tax planning is a crucial aspect of effective financial management for any business seeking to maximize profitability and minimize tax liabilities. Implementing strategic tax planning strategies ensures that businesses can optimize their financial resources, enhance cash flow, and maintain compliance with tax regulations. By proactively identifying opportunities for deductions, structure their operations to minimize tax burdens while maximizing legitimate tax savings.</motion.p>

    <motion.p className="lg:text-[20px] text-[18px] text-[#6B6B6B] lg:mt-5 mt-2 leading-relaxed"
      initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
    >Moreover, careful tax planning enables businesses to adapt to changing tax laws and regulations, ensuring continued financial stability and growth. From utilizing tax-efficient investment vehicles to timing income and expenses strategically, businesses can leverage various tactics to achieve optimal tax outcomes</motion.p>

<div className=" top-8 border-1 border-l-0 border-r-0 border-t-0 border-gray-200  w-[85%] mt-10"></div>
    </div>
</div>
<motion.div className="flex flex-col lg:flex-row justify-center lg:gap-35 gap-5 mt-5"
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
    <h1 className="text-[#012A2B] lg:text-[20px] text-[18px] flex items-center gap-2">CLIENT: <span className="text-[#6B6B6B] text-[18px]">Synox</span></h1>
    <h1 className="text-[#012A2B] lg:text-[20px] text-[18px] flex items-center gap-2 ">SERVICES: <span className="text-[#6B6B6B] text-[18px] ">Tax Planning</span></h1>
    <h1 className="text-[#012A2B] lg:text-[20px] text-[18px] flex items-center gap-2 ">COMPLETED DATE: <span className="text-[#6B6B6B]  text-[18px]">20-11-2024</span></h1>
    <h1 className="text-[#012A2B] lg:text-[20px] text-[18px] flex items-center gap-2 ">LOCATION: <span className="text-[#6B6B6B] text-[18px] ">New York,NY,USA</span></h1>
</motion.div>


<div className="lg:px-30 relative">
    <motion.h1 className="lg:text-[40px] text-[30px] text-[#012A2B] mt-12"
     initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
    >Project Requirement</motion.h1>


    <motion.p className="lg:text-[20px] text-[18px] text-[#6B6B6B] mt-5 leading-relaxed"
     initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
    >Our client seeks comprehensive tax planning services to optimize their business's financial management and minimize tax liabilities effectively. They aim to enhance profitability, compliance with relevant tax regulations.</motion.p>


    <motion.div className="flex flex-col lg:flex-row mt-6 lg:gap-80 gap-5"
     initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
    >
        <div>
        <p className="lg:text-[20px] text-[18px] text-[#6B6B6B] flex items-center gap-5"><span><img src={check} alt="" /></span>Customized Tax Planning</p>
         <p className="lg:text-[20px] text-[18px] text-[#6B6B6B] flex items-center gap-5 mt-4"><span><img src={check} alt="" /></span>Proactive Tax Management</p>
          <p className="lg:text-[20px] text-[18px] text-[#6B6B6B] flex items-center gap-5 mt-4"><span><img src={check} alt="" /></span>Adaptability to Tax Changes</p>
          <p className="lg:text-[20px] text-[18px] text-[#6B6B6B] flex items-center gap-5 mt-4"><span><img src={check} alt="" /></span>Ethical and Legal Integrity</p>
        </div>

        <div>
         <p className="lg:text-[20px] text-[18px] text-[#6B6B6B] flex items-center gap-5"><span><img src={check} alt="" /></span>Strategic Timing of Income</p>
         <p className="lg:text-[20px] text-[18px] text-[#6B6B6B] flex items-center gap-5 mt-4"><span><img src={check} alt="" /></span>Comprehensive Compliance Support</p>
        <p className="lg:text-[20px] text-[18px] text-[#6B6B6B] flex items-center gap-5 mt-4"><span><img src={check} alt="" /></span>Post-migration Support</p>
        <p className="lg:text-[20px] text-[18px] text-[#6B6B6B] flex items-center gap-5 mt-4"><span><img src={check} alt="" /></span>Tax-Efficient Investment Strategies</p>
        </div>
    </motion.div>
</div>

<div className="lg:px-30 relative">
<motion.h1 className="lg:text-[40px] text-[30px] text-[#012A2B] mt-12"
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>solution & Result</motion.h1>
 <motion.p className="lg:text-[20px] text-[18px] text-[#6B6B6B] mt-5 leading-relaxed"
  initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
 >Implementing our comprehensive tax planning strategies, tailored to the specific needs and objectives of our client's business, yielded significant benefits and outcomes. By customizing tax planning approaches and proactively managing their tax investment obligations, we helped the client optimize their financial management and minimize tax liabilities effectively.</motion.p>

 <motion.p className="lg:text-[20px] text-[18px] text-[#6B6B6B] mt-5 leading-relaxed"
  initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
 >Through strategic timing of income and expenses, we maximized tax savings while ensuring compliance with relevant regulations, allowing the client to enhance profitability and improve cash flow. Our proactive opportunities for deductions,</motion.p>
</div>


<div className="lg:px-30 ">
   <motion.h1 className="lg:text-[40px] text-[30px] text-[#012A2B] mt-12"
    initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
   >Our Similar Projects</motion.h1> 


 <div className="flex flex-col lg:flex-row justify-center gap-5 mt-7 relative">

 <motion.div className="group lg:w-105 lg:h-110   relative overflow-hidden rounded-xl cursor-pointer"
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


                <motion.div className="group lg:w-105 lg:h-110  relative overflow-hidden rounded-xl cursor-pointer"
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



                <motion.div className="group lg:w-105 lg:h-110  relative overflow-hidden rounded-xl cursor-pointer"
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


</div>
        </section>
    )
}
export default ProjDetailsSection2;