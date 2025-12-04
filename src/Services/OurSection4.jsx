import img from "../assets/faq_about_image.webp";
import img2 from "../assets/chart_image_1.webp";
import img3 from "../assets/shape_nate_13.svg";
import dollar1 from "../assets/shape_dollar_1.webp";
import dollar2 from "../assets/shape_dollar_2.webp";
import React, { useState } from "react";
import { motion } from "framer-motion";

const cardFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger effect
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const faqs = [
  {
    question: "What investment services do you offer?",
    answer:
      "We recommend a diversified portfolio tailored to your individual needs, This may include stocks, bonds, mutual funds, ETFs, real estate.",
  },
  {
    question: "What types of investment do you recommend?",
    answer:
      "We recommend a diversified portfolio tailored to your individual needs, This may include stocks, bonds, mutual funds, ETFs, real estate.",
  },
  {
    question: "How do i get started with investing?",
    answer:
      "We recommend a diversified portfolio tailored to your individual needs, This may include stocks, bonds, mutual funds, ETFs, real estate.",
  },
  {
    question: "What is your approach to risk management?",
    answer:
      "We recommend a diversified portfolio tailored to your individual needs, This may include stocks, bonds, mutual funds, ETFs, real estate.",
  },
];
function OurSection4(){
     // ✅ Define the missing state
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

   const faqFade = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
    return(
        <section className="bg-[#023436ff] lg:h-260 h-330  overflow-hidden px-[20px] lg:hidden block">
          
            <div className="lg:pt-70 pt-20 flex flex-col flex-col-reverse lg:flex-row justify-center lg:gap-45 gap-25 relative items-center">
                <div className="absolute left-10 top-70 hidden lg:block"><img src={dollar2} alt="" className="w-15" /></div>
                <div className="absolute right-220 top-140 blur-[2px]"><img src={dollar1} alt="" className="w-15"/></div>
                  <div className="absolute bottom-[-260px] right-[-280px] hidden lg:block"><img src={img3} alt="" className="w-145"/></div>
<div className="relative"><img src={img} alt="" className="w-140" />
<div className="absolute top-40 left-[-10px]"><img src={img2} alt="" className="lg:w-45 w-30"/></div>

</div>


 


 <div className="max-w-xl mx-auto lg:mx-0 space-y-4">
    <div>
        <motion.h1 className="lg:text-[46px] text-[30px] font-semibold text-white "
         initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
        >have a question look here</motion.h1>
                <motion.p className="text-[18px] text-[#C6C6C6]   pt-2  mt-5"
                 initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
                >For quick answers, visit our FAQ section. Can't find what you need? Contact our support team.</motion.p>
                </div>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                className="border border-t-0 border-l-0 border-r-0 border-b-gray-700 bg-[#023436ff]   w-80 lg:w-140 overflow-hidden transition-all duration-300"
             initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }} >
            
                {/* Questions */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center  py-3 bg-[#023436ff] transition"
                >
                  <span className=" text-white text-[22px] lg:font-bold text-start pt-5 bg-[#023436ff]">
                    {faq.question}
                  </span>
                  <span className="transition-all duration-300 text-2xl font-bold text-white">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] py-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden  text-[15px] text-[#C6C6C6] bg-[#023436ff]">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
            </div>
        </section>
    )
}
export default OurSection4