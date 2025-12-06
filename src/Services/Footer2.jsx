import img from "../assets/footer_bg_1.webp";
import email from "../assets/icon_email.svg";
import logo from "../assets/site_logo_white.svg";
import calling from "../assets/icon_calling_2.svg";
import email2 from "../assets/icon_email_2.svg";
import google from "../assets/google_play.webp";
import app from "../assets/app_store.webp";
import img13 from "../assets/shape_dollar_5.webp";
import img14 from "../assets/shape_dollar_3.webp";
import nate from "../assets/shape_nate_2.svg";
import shape from "../assets/shape_finto.svg";
function Footer2(){
    return(
        <section className="relative lg:h-200 h-450 overflow-hidden bg-[#012628ff] #012628ff">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-6"><img src={shape} alt="" /></div>
            <div className="absolute bottom-[-430px] left-[-390px]"><img src={nate} alt="" /></div>
            <div className="relative" >

<div className="flex flex-col lg:flex-row justify-center items-center lg:gap-75 pt-20 px-[20px]">
<h1 className="lg:text-[50px] text-[32px] leading-tight font-semibold text-white flex justify-center"> Subscribe for daily update</h1>
    <div className="flex items-center relaive">
  
     <div className="relative mt-5 flex">
      <img src={email} alt="" className="absolute  top-[22px] left-5" />
    <input
      type="text"
      placeholder="Email address"
      className="lg:w-80 w-70 h-15 bg-[#023436ff]  text-white px-13   pr-4 py-2 outline-none rounded-l-md"
    />
    <div className="w-15 bg-[#D9FF43] rounded-r-md flex items-center h-15 justify-center">
     <i className="fa-solid fa-paper-plane  text-black "></i>
     </div>
    </div>
    
     </div>
  </div>


<div className="flex flex-col lg:flex-row justify-center lg:gap-33 gap-10 mt-20 relative px-[15px]">
    <div className="absolute left-10 top-10 hidden lg:block"><img src={img13} alt="" className="w-15" /></div>
     <div className="absolute bottom-10 right-10"><img src={img14} alt="" className="w-15" /></div>
<div>
    <img src={logo} alt="" />
    <div className="flex items-center gap-3 mt-10">
        <img src={calling} alt="" />
        <a href="#" className="text-white font-bold text-[18px]">+(1) 1230 452 8759</a>
    </div>

    <div className="flex items-center gap-3 mt-4">
        <img src={email2} alt="" />
        <p className="font-bold text-[20px] text-white lg:mt-4">synox@mail.com</p>
    </div>

    <p className="text-[#C6C6C6] mt-10 text-[18px] lg:w-70">Waterloo, Macquarie Park NSW 2113, Australia</p>
</div>


<div className="flex flex-col gap-4">
    <p className="text-[#C6C6C6] text-[16px] font-semibold">Quick Link</p>
    <div className="border border-l-0 border-r-0 border-t-0 text-gray-700"></div>
    <a href="#" className="text-white text-[18px] font-bold mt-3 lg:mt-0">Gold Investments</a>
    <a href="#" className="text-white  text-[18px] font-bold">Property Investment</a>
    <a href="#" className="text-white  text-[18px] font-bold">Gold Investments</a>
    <a href="#" className="text-white  text-[18px] font-bold">Product Salute</a>
    <a href="#" className="text-white  text-[18px] font-bold">Digital Investment</a>
</div>


<div className="flex flex-col gap-4">
    <p className="text-[#C6C6C6] text-[16px] font-semibold">Information</p>
    <div className="border border-l-0 border-r-0 border-t-0 text-gray-700"></div>
    <a href="#" className="text-white  text-[18px] font-bold mt-3 lg:mt-0">Career</a>
    <a href="#" className="text-white  text-[18px] font-bold">Privacy Policy</a>
    <a href="#" className="text-white  text-[18px] font-bold">Terms & condition</a>
    <a href="#" className="text-white  text-[18px] font-bold">Refund & News</a>
    <a href="#" className="text-white  text-[18px] font-bold">Awards & Partners</a>
</div>


<div className="flex flex-col gap-4 ">
    <p className="text-[#C6C6C6] text-[16px] font-semibold">Download App</p>
    <div className="border border-l-0 border-r-0 border-t-0 text-gray-700"></div>
    <p className="text-[#C6C6C6] text-[18px] font-semibold w-60 lg:mt-0 mt-3">Available in any kind of ready version</p>
    <img src={app} alt=""  className="w-50 mt-5"/>
    <img src={google} alt="" className="w-50" />
</div>
</div>

<div className="border border-b-0 border-r-0 border-l-0 border-gray-700 mx-auto w-[90%] mt-30"></div>
<div className="flex flex-col lg:flex-row text-center lg:text-start justify-between  pt-10 lg:px-20  ">
    <div><p className="text-[16px] text-white lg:px-0 px-10">Copyright © 2024 Synox, All rights reserved.</p></div>
    <div className="flex gap-3 items-center justify-center lg:justify-start mt-4 lg:mt-0">
        <p className="text-[16px] text-white">Follow Us -</p>
        
        
   <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]"><i class="fa-brands fa-x-twitter fa-solid text-white group-hover:text-black"></i></a>

    <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]"><i class="fa-brands fa-facebook-f fa-solid text-white group-hover:text-black"></i></a>

     <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:[background:linear-gradient(0deg,#00F1B5,#D9FF43)]"><i class="fa-brands fa-linkedin-in fa-solid text-white group-hover:text-black"></i></a>
    </div>
</div>

            </div>
        </section>
        
    )
}
export default Footer2;

