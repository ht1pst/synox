import img from "../assets/headerimg.png";
import calling from "../assets/calling.svg";
import arrow from "../assets/arrowdown.svg";
import nate from "../assets/shape_nate.svg";
import img2 from "../assets/footer_bg_1.webp";
import bread1 from "../assets/breadcrumb_shape_pattern_1.svg"
import bread2 from "../assets/breadcrumb_shape_pattern_2.svg"
import dollar1 from "../assets/shape_dollar_1.webp";
import dollar2 from "../assets/shape_dollar_2.webp";
import dollar3 from "../assets/shape_dollar_3.webp";
import dollar4 from "../assets/shape_dollar_4.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function DetailsHero(){

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
    return(
        <section className=" lg:h-120 h-100 relative overflow-hidden">
            <div className="absolute w-[100%]  "><img src={img2} alt="" className=" h-120 w-full object-cover" /></div>
            
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
             
    
<div className="relative lg:pt-30 pt-20">
    <div className="absolute top-15 left-15 lg:block hidden"><img src={dollar1} alt="" className="w-14 blur-[4px]" /></div>
     <div className="absolute top-25 right-50 lg:block hidden"><img src={dollar2} alt="" className="w-16 " /></div>
      <div className="absolute bottom-[-110px] left-65 lg:block hidden"><img src={dollar3} alt="" className="w-10 " /></div>
      <div className="absolute bottom-[-110px] right-100 "><img src={dollar4} alt="" className="w-8 blur-[3px] " /></div>
     <div className="absolute left-0 lg:bottom-[-140px] bottom-[-195px] "><img src={bread1} alt="" className="lg:w-full w-50" /></div>
      <div className="absolute right-0 lg:bottom-[-140px] bottom-[-195px] "><img src={bread2} alt="" className="lg:w-full w-50" /></div>
    <div className="absolute top-[-640px] opacity-10"><img src={nate} alt="" /></div>
    <motion.h1 className="lg:text-[70px] text-[42px] text-white flex justify-center   "
     initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
    >Service Details</motion.h1>
   <motion.div className="flex justify-center gap-2"
    initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
   >
    <a href="#" className="text-[#C6C6B6] text-[22px] ">Home</a>
    <a href="#" className="text-[#C6C6B6] lg:text-[22px] text-[20px">_</a>
    <a href="#" className="text-[#C6C6C6] text-[22px] "> Service Details</a>
   </motion.div>
</div>

        </section>
    )
}
export default DetailsHero;