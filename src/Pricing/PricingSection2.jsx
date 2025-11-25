import img1 from "../assets/icon_doc.svg";
import img2 from "../assets/icon_chart_5.svg";
import img3 from "../assets/icon_headphone_2.svg";
import { motion } from "framer-motion";
function PricingSection2(){
    return(
        <section className="lg:h-200  h-320 pt-20 px-[15px]">
             <div className="flex flex-col lg:flex-row justify-center gap-10 pt-10 ">
                <motion.h1 className="lg:text-[45px] text-[30px] text-[#212529] lg:w-150 leading-none font-semibold"
                   initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
                >Celebrating Features discover What Sets Us</motion.h1>


                <motion.p className="lg:text-[20px] text-[18px] text-[#6c757d]  lg:w-150 leading-normal"
                   initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
                >Our team of experts, with their diverse backgrounds and specialized skills, collaborate seamlessly to deliver tailored solutions that exceed expectations, Furthermore, our cutting-edge.</motion.p>
            </div>


            <div className="flex flex-col lg:flex-row justify-center lg:gap-48 gap-10 mt-20">


<motion.div
initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
>
    <div className="bg-[#012A2B] h-15 w-15 flex justify-center items-center  rounded-full relative">
    <img src={img1} alt="" />
    </div>
    <h1 className="text-[25px] text-[#012A2B] mt-6">Rich Documentation</h1>
    <p className="text-[18px] text-[#6B6B6B] w-75 mt-2">Our commitment to providing you with unparalleled support.</p>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
>
    <div className="bg-[#012A2B] h-15 w-15 flex justify-center items-center  rounded-full relative">
    <img src={img2} alt="" />
    </div>
    <h1 className="text-[25px] text-[#012A2B] mt-6">Fastest Delivery</h1>
    <p className="text-[18px] text-[#6B6B6B] w-75 mt-2">Fastest Delivery typically refers to service or process that emphasizes.</p>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
>
    <div className="bg-[#012A2B] h-15 w-15 flex justify-center items-center  rounded-full relative">
    <img src={img3} alt="" />
    </div>
    <h1 className="text-[25px] text-[#012A2B] mt-6">Lifetime Support</h1>
    <p className="text-[18px] text-[#6B6B6B] w-75 mt-2">Lifetime Support refers to a by a product or service provider.</p>
</motion.div>


            </div>
        </section>
    )
}
export default PricingSection2;