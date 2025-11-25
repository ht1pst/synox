import img from "../assets/headerimg.png";
import calling from "../assets/calling.svg";
import arrow from "../assets/arrowdown.svg";
import arrow2 from "../assets/arrowright.svg";
import client from "../assets/client_logo_1.webp";
import img2 from "../assets/hero_image_1.webp";
import herobg1 from "../assets/hero_bg_1.webp";
import nate7 from "../assets/shape_nate_7.svg";
import bread from "../assets/bread.svg";
import dollar1 from "../assets/shape_dollar_1.webp";
import dollar2 from "../assets/shape_dollar_2.webp";
import dollar3 from "../assets/shape_dollar_3.webp";
import dollar4 from "../assets/shape_dollar_4.webp";
import bread2 from "../assets/breadcrumb_shape_pattern_2.svg";

import btn from "../assets/btn_shape.webp";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [showSticky, setShowSticky] = useState(false);
  const [open, setOpen] = useState(false); // MOBILE
 const [mobileMenu, setMobileMenu] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section className="bg-[#022526ff] #022526ff lg:h-228 h-274 sm:h- relative overflow-hidden">
      
      <div className="absolute bottom-0 right-0 lg:hidden block"><img src={herobg1} alt="" /></div>
       <div className="absolute bottom-[-300px] left-[-250px] lg:hidden block "><img src={nate7} alt="" className=""/></div>
<div className="absolute bottom-0 lg:block hidden"><img src={herobg1} alt="" className="" /></div>
<div className="absolute bottom-0 right-0 lg:block hidden"><img src={bread} alt="" /></div>
<div className="absolute bottom-[-235px] left-[-200px] lg:block hidden"><img src={nate7} alt="" className="w-100 object-contain z-20" /></div>
 <div className="absolute right-0 bottom-0 lg:block hidden" ><img src={img2} alt="" className="w-[600px] object-cover" /></div>



<div className="absolute -translate-y-1/2 top-1/2 left-30 lg:block hidden">
     <h1 className="text-[75px] w-160 font-semibold text-white  leading-[100px]">Synox is Secure <span  className="text-[#023436] rounded-sm px-3" style={{ background: "linear-gradient(90deg, #00F1B5, #D9FF43)" }}>Investments</span> for  the Future</h1>
                        <p className="text-[22px] text-[#C6C6C6] w-135  leading-[34px] ">We help clients formulate and implement a long-term, diversified investment strategy based on our  Outsourced CIO (OCIO) operational platform.</p>

<div className="flex items-center mt-15 gap-10">
  {/* Left side: button */}
  <div className="relative">
    <div className="absolute top-0 left-0">
      <img src={btn} alt="" className="w-12" />
    </div>
    <button className="flex bg-[#D9FF43] text-md font-semibold h-16 w-60 rounded-sm items-center justify-center">
      Invest Today
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
        className="ml-2"
      >
        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
      </svg>
    </button>
  </div>

  {/* Right side: client review */}
  <div className="flex items-center gap-5">
    <img src={client} alt="" className="w-[51px]" />
    <div>
      <div className="flex items-center">
        <i className="fa-solid fa-star text-[#08B87F] text-[16px]"></i>
        <i className="fa-solid fa-star text-[#08B87F] text-[16px]"></i>
        <i className="fa-solid fa-star text-[#08B87F] text-[16px]"></i>
        <i className="fa-solid fa-star text-[#08B87F] text-[16px]"></i>
        <i className="fa-solid fa-star-half-stroke text-[#08B87F] text-[16px]"></i>
        <p className="pl-3 font-semibold text-white">4.8</p>
      </div>
      <p className="text-[15px] text-[#C6C6C6] font-semibold mt-1">
        26 Reviews
      </p>
    </div>
  </div>
</div>


                        
</div>



      {/* ORIGINAL HEADER (DESKTOP) — NOT TOUCHED */}
      <header className="h-20 relative w-full z-20">
                  
                          <div className="flex items-center  justify-between lg:px-[120px] px-[20px] lg:py-[40px] pt-6">
                  
                            <div className="flex gap-2  items-center">
                              <img src={img} alt="" className="w-6 h-6" />
                              <h1 className="font-semibold text-2xl text-white">SYNOX</h1>
                            </div>
                  
                            {/* DESKTOP NAV (unchanged) */}
                            <nav className="hidden lg:flex gap-10">
                              <Link to="/" className="text-[18px] font-semibold text-white flex">
                                Home <img src={arrow} alt="" />
                              </Link>
                  
                              {/* Services dropdown */}
                              <div className="relative group">
                                <div className="flex items-center gap-2 cursor-pointer text-[18px] font-semibold text-white">
                                  Services
                                  <img src={arrow} alt="" />
                                </div>
                  
                                <div className="absolute mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-white p-3 rounded-lg shadow-lg w-60 h-25 z-50 transition-opacity duration-200">
                                  <ul>
                                    <li>
                                      <Link to="/our" className="block hover:bg-gray-700 hover:text-white rounded text-[#012A2B] px-5 h-10 py-2">
                                        Our Services
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/details" className="block hover:bg-gray-700 hover:text-white rounded text-[#012A2B] px-5 h-10 py-2">
                                        Services Details
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                  
                              {/* Projects */}
                              <div className="relative group">
                                <div className="flex items-center gap-2 cursor-pointer text-[18px] font-semibold text-white">
                                  Projects
                                  <img src={arrow} alt="" />
                                </div>
                  
                                <div className="absolute mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-white p-3 rounded-lg shadow-lg w-60 h-25 z-50 transition-opacity duration-200">
                                  <ul>
                                    <li>
                                      <Link to="/projects" className="block hover:bg-gray-700 hover:text-white rounded text-[#012A2B] px-5 h-10 py-2">
                                        Our Projects
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/details2" className="block hover:bg-gray-700 hover:text-white rounded text-[#012A2B] px-5 h-10 py-2">
                                        Projects Details
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                  
                              <Link to="/pricing" className="text-[18px] font-semibold text-white flex">
                                Pricing <img src={arrow} alt="" />
                              </Link>
                            </nav>
                  
                            <div className="hidden lg:flex gap-3 bg-[#093e25ff] items-center h-10 w-65 justify-center">
                              <img src={calling} alt="" className="w-4" />
                              <h1 className="text-[17px] font-bold text-white">
                                Hotline:(800)555-0199
                              </h1>
                            </div>
                  
                            {/* ========== MOBILE HAMBURGER (NEW) ========== */}
                           <div className="bg-[#07340dff] #07340dff flex justify-center items-center h-10 rounded-sm w-10">
                            <button
                              className="lg:hidden  text-white "
                              onClick={() => setMobileMenu(!mobileMenu)}
                            >
                              {mobileMenu ? (
                                // CLOSE ICON
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              ) : (
                                // HAMBURGER
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                              )}
                            </button>
                            </div>
                          </div>
                  
                          {/* ========== MOBILE NAV (SLIDE DOWN) ========== */}
                          <div className="flex justify-center mt-5">
                          <div
                            className={`lg:hidden bg-[#022627] w-[93%]  rounded-xl text-[#093e25ff] bg-white overflow-hidden transition-all duration-300 ${mobileMenu ? "max-h-96 py-4" : "max-h-0 py-0"}
                            }`}
                          >
                            <ul className="px-6 space-y-4 text-[16px] font-semibold">
                  
                              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                  
                              <li>
                                <details className="text-[#093e25ff]">
                                  <summary className="cursor-pointer flex items-center justify-between" >Services <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></summary>
                                  <ul style={{ listStyle: "none" }} className=" space-y-2 h-25 w-75 gap-3 px-6 mt-3 flex flex-col justify-center text-[#093e25ff] border border-gray-200 rounded-lg">
                                    <li><Link to="/our" onClick={() => setOpen(false)}>Our Services</Link></li>
                                    <li><Link to="/details" onClick={() => setOpen(false)}>Services Details</Link></li>
                                  </ul>
                                </details>
                              </li>
                  
                              <li>
                                <details className="text-[#093e25ff]">
                                  <summary className="cursor-pointer flex items-center justify-between" >Projects <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></summary>
                                   <ul style={{ listStyle: "none" }} className=" space-y-2 h-25 w-75 gap-3 px-6 mt-3 flex flex-col justify-center text-[#093e25ff] border border-gray-200 rounded-lg">
                                    <li><Link to="/projects" onClick={() => setOpen(false)}>Our Projects</Link></li>
                                    <li><Link to="/details2" onClick={() => setOpen(false)}>Projects Details</Link></li>
                                  </ul>
                                </details>
                              </li>
                  
                              <li><Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
                  
                              <li className="pt-4 hidden lg:block">
                                <div className="flex gap-3 bg-[#093e25ff] items-center h-10 w-65 justify-center rounded">
                                  <img src={calling} alt="" className="w-4" />
                                  <h1 className="text-[17px] font-bold text-white">
                                    Hotline:(800)555-0199
                                  </h1>
                                </div>
                              </li>
                            </ul>
                          </div>
                          </div>
                        </header>
                 
                       {/* ===== YOUR STICKY HEADER (UNCHANGED) ===== */}
                      <div
                   className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-500 
                   ${showSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
                 >
                     <div className="h-17 relative w-full z-20">
                 
                         <div className="flex items-center  justify-between lg:px-[120px] px-[20px] lg:py-[40px] lg:pt-5 pt-4">
                 
                           <div className="flex gap-2  items-center">
                             <img src={img} alt="" className="w-6 h-6" />
                             <h1 className="font-semibold text-2xl text-black">SYNOX</h1>
                           </div>
                 
                           {/* DESKTOP NAV (unchanged) */}
                           <nav className="hidden lg:flex gap-10">
                             <Link to="/" className="text-[18px] font-semibold text-[#022526ff] flex">
                               Home <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#022526ff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                             </Link>
                 
                             {/* Services dropdown */}
                             <div className="relative group">
                               <div className="flex items-center gap-2 cursor-pointer text-[18px] font-semibold text-[#022526ff]">
                                 Services
                                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#022526ff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                               </div>
                 
                               <div className="absolute mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-white p-3 rounded-lg shadow-lg w-60 h-25 z-50 transition-opacity duration-200">
                                 <ul>
                                   <li>
                                     <Link to="/our" className="block hover:bg-gray-700 hover:text-white rounded  px-5 h-10 py-2">
                                       Our Services
                                     </Link>
                                   </li>
                                   <li>
                                     <Link to="/details" className="block hover:bg-gray-700 hover:text-white rounded  px-5 h-10 py-2">
                                       Services Details
                                     </Link>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                 
                             {/* Projects */}
                             <div className="relative group">
                               <div className="flex items-center gap-2 cursor-pointer text-[18px] font-semibold text-[#022526ff]">
                                 Projects
                                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#022526ff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                               </div>
                 
                               <div className="absolute mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-white p-3 rounded-lg shadow-lg w-60 h-25 z-50 transition-opacity duration-200">
                                 <ul>
                                   <li>
                                     <Link to="/projects" className="block hover:bg-gray-700 hover:text-white rounded text-[#012A2B] px-5 h-10 py-2">
                                       Our Projects
                                     </Link>
                                   </li>
                                   <li>
                                     <Link to="/details2" className="block hover:bg-gray-700 hover:text-white rounded text-[#012A2B] px-5 h-10 py-2">
                                       Projects Details
                                     </Link>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                 
                             <Link to="/pricing" className="text-[18px] font-semibold text-[#022526ff] flex">
                               Pricing <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#022526ff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                             </Link>
                           </nav>
                 
                           <div className="hidden lg:flex gap-3 bg-[#093e25ff] items-center h-10 w-65 justify-center">
                             <img src={calling} alt="" className="w-4" />
                             <h1 className="text-[17px] font-bold text-white">
                               Hotline:(800)555-0199
                             </h1>
                           </div>
                 
                           {/* ========== MOBILE HAMBURGER (NEW) ========== */}
                           <div className="bg-[#093e25ff] flex justify-center items-center h-10 rounded-sm w-10">
                           <button
                             className="lg:hidden  text-white "
                             onClick={() => setOpen(!open)}
                           >
                             {open ? (
                               // CLOSE ICON
                               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                               </svg>
                             ) : (
                               // HAMBURGER
                               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                               </svg>
                             )}
                           </button>
                           </div>
                         </div>
                 
                         {/* ========== MOBILE NAV (SLIDE DOWN) ========== */}
                         <div className="flex justify-center mt-8">
                         <div
                           className={`lg:hidden bg-[#022627] w-[93%]  rounded-xl text-[#093e25ff] bg-white overflow-hidden transition-all duration-300 ${
                             open ? "max-h-96 py-4" : "max-h-0 py-0"
                           }`}
                         >
                           <ul className="px-6 space-y-4 text-[16px] font-semibold">
                 
                             <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                 
                             <li>
                               <details className="text-[#093e25ff]">
                                 <summary className="cursor-pointer flex items-center justify-between" >Services <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></summary>
                                 <ul style={{ listStyle: "none" }} className=" space-y-2 h-25 w-75 gap-3 px-6 mt-3 flex flex-col justify-center text-[#093e25ff] border border-gray-200 rounded-lg">
                                   <li><Link to="/our" onClick={() => setOpen(false)}>Our Services</Link></li>
                                   <li><Link to="/details" onClick={() => setOpen(false)}>Services Details</Link></li>
                                 </ul>
                               </details>
                             </li>
                 
                             <li>
                               <details className="text-[#093e25ff]">
                                 <summary className="cursor-pointer flex items-center justify-between" >Projects <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></summary>
                                  <ul style={{ listStyle: "none" }} className=" space-y-2 h-25 w-75 gap-3 px-6 mt-3 flex flex-col justify-center text-[#093e25ff] border border-gray-200 rounded-lg">
                                   <li><Link to="/projects" onClick={() => setOpen(false)}>Our Projects</Link></li>
                                   <li><Link to="/details2" onClick={() => setOpen(false)}>Projects Details</Link></li>
                                 </ul>
                               </details>
                             </li>
                 
                             <li><Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
                 
                             <li className="pt-4 hidden lg:block">
                               <div className="flex gap-3 bg-[#093e25ff] items-center h-10 w-65 justify-center rounded">
                                 <img src={calling} alt="" className="w-4" />
                                 <h1 className="text-[17px] font-bold text-white">
                                   Hotline:(800)555-0199
                                 </h1>
                               </div>
                             </li>
                           </ul>
                         </div>
                         </div>
                       </div>
                 </div>

      {/** … (I am not touching this part, it stays as you wrote it) **/}

      <div className="lg:pt-10 pt-9 px-[13px] flex flex-col relative lg:hidden block">
 <div className="absolute bottom-0 right-[-20px]"><img src={bread2} alt="" /></div>
<div>
 <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="text-[41px] w-[100%] font-semibold text-white leading-[54px] justify-center text-center"
>
  Synox is Secure{" "}
  <span
    className="text-[#023436] rounded-sm px-3"
    style={{ background: "linear-gradient(90deg, #00F1B5, #D9FF43)" }}
  >
    Investments
  </span>{" "}
  for the Future
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="text-[17px] text-[#C6C6C6] w-[100%] leading-[28px] text-center mt-2"
>
  We help clients formulate and implement a long-term, diversified investment
  strategy based on our Outsourced CIO (OCIO) operational platform.
</motion.p>
</div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
  className="relative flex justify-center lg:mt-12 mt-10"
>
  <button className="flex bg-[#D9FF43] relative text-md font-semibold rounded-lg h-18 w-60 rounded-sm items-center justify-center">
    Invest Today
    <div className="absolute top-0 left-[0px]">
      <img src={btn} alt="" className="w-14 h-18 rounded-l-lg" />
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000000"
      className="ml-2"
    >
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
    </svg>
  </button>
</motion.div>


<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
  className="flex justify-center lg:mt-10 mt-7 items-center gap-3 relative"
>
  <img src={client} alt="" className="w-[51px]" />

  <div>
    <div className="flex items-center gap-[2px]">
      <i className="fa-solid fa-star text-[#08B87F] text-[16px]"></i>
      <i className="fa-solid fa-star text-[#08B87F] text-[16px]"></i>
      <i className="fa-solid fa-star text-[#08B87F] text-[16px]"></i>
      <i className="fa-solid fa-star text-[#08B87F] text-[16px]"></i>
      <i className="fa-solid fa-star-half-stroke text-[#08B87F] text-[16px]"></i>
      <p className="pl-3 font-semibold text-white">4.8</p>
    </div>

    <p className="text-[20px] text-[#C6C6C6] font-thin mt-1 pl-5">
      26 Reviews
    </p>
  </div>
</motion.div>




                        


<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
  className="flex justify-center mt-15 mx-auto relative"
>
  <img src={img2} alt="" />
</motion.div>

      </div>

    </section>
  );
}

export default Hero;
