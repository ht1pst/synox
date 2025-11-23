import img1 from "../assets/policy_image_1.webp";
import img2 from "../assets/policy_image_2.webp";
import img3 from "../assets/policy_image_3.webp";
import lock from "../assets/icon_lock.svg";
import odo from "../assets/icon_odomitter.svg";
import users from "../assets/icon_users.svg";
import nate2 from "../assets/shape_nate_7.svg";
import nate3 from "../assets/shape_nate_11.svg";
import img12 from "../assets/shape_dollar_2.webp";
import img from "../assets/headerimg.png";
import calling from "../assets/calling.svg";
import arrow from "../assets/arrowdown.svg";
import arrow2 from "../assets/arrowright.svg";
import client from "../assets/client_logo_1.webp";

import herobg1 from "../assets/hero_bg_1.webp";
import nate7 from "../assets/shape_nate_7.svg";
import bread from "../assets/bread.svg";
import dollar1 from "../assets/shape_dollar_1.webp";
import dollar2 from "../assets/shape_dollar_2.webp";
import dollar3 from "../assets/shape_dollar_3.webp";
import dollar4 from "../assets/shape_dollar_4.webp";
import btn from "../assets/btn_shape.webp";
function Section4(){
   return(
    <section className="bg-[#023436ff] lg:h-230 h-500 relative overflow-hidden px-[15px]">
        <div className="absolute bottom-[-300px] right-[-130px] z-20 lg:block hidden "><img src={nate2} alt="" className="w" /></div>
         <div className="absolute bottom-[-350px] left-[-270px] z-20 lg:block hidden "><img src={nate3} alt="" className="w" /></div>
         <div className="absolute top-0 left-30 z-20 lg:block hidden "><img src={img12} alt="" className="w-13" /></div>
        <div>
<div>
    <h1 className="lg:text-[50px] text-[30px] font-semibold text-white flex justify-center ">Safety First</h1>
    <p className="lg:text-[20px] text-[18px] text-[#C6C6C6] lg:w-150 text-center pt-2 mx-auto ">Safety First is our motto at Synox prioritizing your financial security. Trust us for stability as you pursue your goals.</p>
</div>

<div className="flex flex-col lg:flex-row items-center gap-8 justify-center  pt-10 ">
<div className="bg-[#022627ff] lg:w-100 lg:h-132 h-140 flex flex-col gap-10 px-[35px] py-[40px] rounded-2xl">
    <img src={lock} alt="" className="w-7" />
    <p  className="text-[26px] font-semibold text-white">Secure transactions with two-factor authentication</p>
    <img src={img1} alt="" className="lg:w-[290px] w-[300px] mx-auto" />
</div>

<div className="relative bg-[#022627ff] lg:w-100 h-142 flex flex-col gap-10   rounded-2xl">
 <div
  className="absolute bottom-0 w-full h-90 opacity-90  rounded-b-xl"
  style={{
    background:
      "linear-gradient(180deg, rgba(144, 186, 202, 0) 0%, rgba(86, 127, 137, 0.33) 13.62%, rgba(1, 42, 43, 0.53) 36.66%, #567f36 68.97%, #d9ff43 98.5%)",
  }}
></div>
    <img src={img2} alt="" className="lg:w-100 rounded-t-xl " />
    <div className="px-[35px]">
    <img src={users} alt="" className="w-7 relative pt-5" />
    </div>
    <p  className="text-[26px] font-semibold text-white relative px-[35px]">Trusted by 40+ million Investors worldwide</p>
</div>


<div className="bg-[#022627ff] relative lg:w-100 h-132 flex flex-col gap-10 px-[35px] py-[35px] rounded-2xl">
    <div className="absolute bottom-0 right-0">
         <img src={img3} alt="" className="lg:w-[300px] w-[310px] " />
    </div>
    <img src={odo} alt="" className="w-7" />
    <p  className="text-[26px] font-semibold text-white">Data security with no compromises</p>
   
</div>


</div>

        </div>
    </section>
   )
}
export default Section4