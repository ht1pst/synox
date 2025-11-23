import img1 from "../assets/avatar_image_1.webp";
import img2 from "../assets/avatar_image_2.webp";
import img3 from "../assets/avatar_image_3.webp";
import img12 from "../assets/shape_dollar_2.webp";
import img13 from "../assets/shape_dollar_5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import React, { useState, useEffect } from "react";

function Section5() {
  const cards = [
    {
      baseImg: img1,
      description:
        "'Been with Synox for years, couldn't be happier. Their tailored plan exceeded expectations. Thanks to their guidance, my portfolio grew significantly.'",
      name: "Hawthorn Sage",
      title: "Our Investors",
    },
    {
      baseImg: img2,
      description:
        "'Choosing Synox was one of my best decisions. Their transparent approach keeps me reassured about my investments.'",
      name: "Reynolds Anthony",
      title: "Our Investors",
    },
    {
      baseImg: img3,
      description:
        "'I've worked with many firms, but none impressed me like Synox. Their expertise and commitment are unmatched.'",
      name: "Rosemary Violet",
      title: "Our Investors",
    },


     {
      baseImg: img1,
      description:
        "'Been with Synox for years, couldn't be happier. Their tailored plan exceeded expectations. Thanks to their guidance, my portfolio grew significantly.'",
      name: "Hawthorn Sage",
      title: "Our Investors",
    },
     {
      baseImg: img2,
      description:
        "'Choosing Synox was one of my best decisions. Their transparent approach keeps me reassured about my investments.'",
      name: "Reynolds Anthony",
      title: "Our Investors",
    },
     {
      baseImg: img3,
      description:
        "'I've worked with many firms, but none impressed me like Synox. Their expertise and commitment are unmatched.'",
      name: "Rosemary Violet",
      title: "Our Investors",
    },




    

    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  const [itemsPerView, setItemsPerView] = useState(3);

useEffect(() => {
  const updateItems = () => {
    if (window.innerWidth < 640) {
      setItemsPerView(1);     // mobile: 1 slide per view
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2);     // tablet: 2 slides per view
    } else {
      setItemsPerView(3);     // desktop: 3 slides per view
    }
  };

  updateItems();
  window.addEventListener("resize", updateItems);
  return () => window.removeEventListener("resize", updateItems);
}, []);


  return (
    <section className="bg-[#022627ff] lg:pt-30 pt-21 h-260 relative overflow-hidden px-[15px] lg:px-[45px]">
        <div className="absolute left-10 top-100"><img src={img12} alt="" className="w-15 blur-[2px]" /></div>
        <div className="absolute right-10 bottom-20"><img src={img13} alt="" className="w-15 blur-[2px]" /></div>
      {/* blurred circle background */}
      <div className="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-[#ffc107] rounded-full blur-[120px] opacity-30"></div>

      <div>
        <h1 className="lg:text-[50px] text-[30px] font-semibold text-white text-center lg:text-start flex justify-center">
          What Investors Say About Us
        </h1>
        <p className="text-[18px] text-[#C6C6C6] lg:w-160 text-center pt-2 mx-auto">
          Investors praise our transparent approach, personalized guidance, and
          user-friendly platform. At Synox, their trust is our greatest
          endorsement.
        </p>
      </div>

      {/* Carousel */}
<Swiper
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="mySwiper"
>
  {cards.map((card, i) => (
    <SwiperSlide key={i}>
      <div className="bg-[#022627ff] h-110 py-30 w-[100%]  relative rounded-xl block lg:hidden border-t-[#D9FF43] border-l-0 border-r-0 border-b-[#D9FF43] border flex flex-col justify-center text-center w-[90%] mx-auto mt-20">
        
        {/* The floating image */}
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2">
          <img
            src={card.baseImg}
            alt=""
            className="rounded-full w-20"
          />
        </div>

        {/* Description */}
        <p className="lg:text-[20px] text-[18px] px-[15px] lg:font-bold font-thin text-white  text-center mx-auto">
          {card.description}
        </p>

        {/* Name */}
        <p className="text-md text-white font-semibold flex justify-center mt-20">
          {card.name}
        </p>

        {/* Title */}
        <p className="text-[12px] text-[#C6C6C6] flex justify-center">
          {card.title}
        </p>

      </div>
    </SwiperSlide>
  ))}
</Swiper>



<Swiper
  spaceBetween={20}
  slidesPerView={3}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="mySwiper"
>
  {cards.map((card, i) => (
    <SwiperSlide key={i}>
      <div className="bg-[#022627ff] h-110 py-30   relative rounded-xl lg:block hidden   flex flex-col justify-center text-center w-[90%] mx-auto mt-20">
        
        {/* The floating image */}
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2">
          <img
            src={card.baseImg}
            alt=""
            className="rounded-full w-20"
          />
        </div>

        {/* Description */}
        <p className="lg:text-[20px] text-[18px] px-[15px] lg:font-bold font-thin text-white  text-center mx-auto">
          {card.description}
        </p>

        {/* Name */}
        <p className="text-md text-white font-semibold flex justify-center mt-20">
          {card.name}
        </p>

        {/* Title */}
        <p className="text-[12px] text-[#C6C6C6] flex justify-center">
          {card.title}
        </p>

      </div>
    </SwiperSlide>
  ))}
</Swiper>

      

      {/* Dots */}
    

    </section>
  );
}

export default Section5;
