import img from "../assets/faq_about_image.webp";
import img2 from "../assets/chart_image_1.webp";
import img3 from "../assets/shape_nate_13.svg";
import dollar1 from "../assets/shape_dollar_1.webp";
import dollar2 from "../assets/shape_dollar_2.webp";
import React, { useState } from "react";


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
function Section8(){
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
        <section className="bg-[#023436ff] lg:h-260 h-380  overflow-hidden px-[15px]">
          
            <div className="pt-70 flex flex-col flex-col-reverse lg:flex-row justify-center lg:gap-45 gap-25 relative items-center">
                <div className="absolute left-10 top-70 hidden lg:block"><img src={dollar2} alt="" className="w-15" /></div>
                <div className="absolute right-220 top-140 blur-[2px]"><img src={dollar1} alt="" className="w-15"/></div>
                  <div className="absolute bottom-[-260px] right-[-280px]"><img src={img3} alt="" className="w-145"/></div>
<div className="relative"><img src={img} alt="" className="w-140" />
<div className="absolute top-40 left-[-10px]"><img src={img2} alt="" className="lg:w-45 w-30"/></div>

</div>


 


 <div className="max-w-xl mx-auto lg:mx-0 space-y-4">
    <div>
        <h1 className="lg:text-[46px] text-[30px] font-semibold text-white ">have a question look here</h1>
                <p className="text-[18px] text-[#C6C6C6]   pt-2  mt-5">For quick answers, visit our FAQ section. Can't find what you need? Contact our support team.</p>
                </div>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                className="border border-t-0 border-l-0 border-r-0 border-b-gray-700 bg-[#023436ff]   w-80 lg:w-140 overflow-hidden transition-all duration-300"
              >
            
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
              </div>
            );
          })}
        </div>
            </div>
        </section>
    )
}
export default Section8