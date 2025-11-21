import nate8 from "../assets/shape_nate_8.svg";
import nate10 from "../assets/shape_nate_10.svg";
import nate7 from "../assets/shape_nate_7.svg";
import nate11 from "../assets/shape_nate_11.svg";
import dollar3 from "../assets/shape_dollar_3.webp";
import dollar2 from "../assets/shape_dollar_2.webp";
import { useState } from "react";
function PricingSection3(){
    const [isOn, setIsOn] = useState(false);
    return(
        <section className="bg-[#023436ff] lg:h-390 h-800 pt-30 relative overflow-hidden px-[15px]">
<div className="absolute top-[-60px] left-[-50px]"><img src={nate8} alt="" /></div>
<div className="absolute  right-25"><img src={dollar3} alt="" className="w-15"/></div>
<div className="absolute  bottom-[-310px] right-[-100px]"><img src={nate7} alt="" /></div>
<div className="absolute  bottom-[-330px] left-[-280px]"><img src={nate11} alt="" /></div>



          <div>
    <h1 className="lg:text-[50px] text-[29px] font-semibold text-white flex justify-center ">We Offered Best Pricing</h1>
    <p className="#D9FF43  text-[18px] text-[#C6C6C6] lg:w-180 text-center pt-2 mx-auto ">We're here to assist with your financial goals. From investments to retirement planning, count on us for expert guidance</p>
</div>  

<div className="flex items-center justify-center lg:gap-7  mt-8">

   <div className="flex gap-2 items-center">
    <p className="bg-[#fd6614ff] #fd6614ff w-12 h-5 rounded-full text-white text-[13px] flex justify-center items-center ">30%</p>
    <h1 className="lg:text-lg text-md font-semibold text-white text-center lg:text-start">Billed Annually</h1>
   </div>

<div>
          <div
            onClick={() => setIsOn(!isOn)}
            className={`w-17 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 
              ${isOn ? "bg-[#012A2B] border border-gray-600" : "bg-[#012A2B] #012425ff border border-gray-600"}`}
          >
            <div
              className={`w-6 h-6 bg-[#D9FF43] rounded-full shadow-md transform transition-all duration-300 
                ${isOn ? "translate-x-9" : "translate-x-0"}`}
            ></div>
          </div>
        </div>


<div><h1 className="lg:text-lg text-md font-semibold text-white text-center lg:text-start">Billed Monthly</h1></div>

</div>


<div className="lg:px-30 mt-13 flex flex-col lg:gap-7 gap-10 relative">
<div className="absolute right-[-270px] top-10 "><img src={nate10} alt="" /></div>
<div className="absolute left-26 top-135 "><img src={dollar2} alt="" className="w-15" /></div>
    {/*01 */}
<div className="flex flex-col lg:flex-row px-[20px] bg-[#012A2B] lg:w-full lg:h-80 h-220  lg:items-center lg:justify-start rounded-xl gap-20 relative">


<div>

    <div
  className="lg:w-80 h-52 bg-[#023436ff] p-13 lg:block hidden "
  style={{
    clipPath: "polygon(0 0, 75% 0%, 100% 50%, 75% 100%, 0 100%)",
  }}
>
    
    <h1 className="lg:text-[50px] text-[30px] text-white"> {isOn ? "$29.00" : "$19.00"}</h1>
    <p className="#D9FF43 font-bold text-[18px] text-white">{isOn ? "Per Month" : "Month (billed annually)"}</p>
</div>


<div
  className="lg:w-80  mx-auto   h-42 bg-[#023436ff] lg:p-13 pt-5  block lg:hidden "
  style={{
    clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
  }}
>
    
    <h1 className="lg:text-[50px] text-[40px] lg:w-60 flex justify-center text-white"> {isOn ? "$29.00" : "$19.00"}</h1>
    <p className="#D9FF43 font-bold lg:text-[18px] text-[16px] flex justify-center text-white">{isOn ? "Per Month" : "Month (billed annually)"}</p>
</div>
</div>



<div className="">
    <h1  className="text-[26px]  text-white lg:w-80">Basic plan: Financial Assessment</h1>
    <div className="border-[#023436ff]  border-1 lg:w-90 mt-10 "></div>
    <div className="mt-10 flex justify-center">
        <button className="bg-[#023436ff] hover:bg-white hover:text-[#023436ff] transition-all duration-700 ease-in-out rounded-lg lg:w-90 w-[100%] h-18 justify-center flex items-center gap-3 text-white text-[18px]">Get The Plan Now <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f4f8f8ff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></span></button>
    </div>
</div>


<div>
    <p className="text-[#C6C6C6] text-[16px]">Features Include:</p>
    <div className="mt-10 flex flex-col gap-2">
    <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Financial Planning</p>


     <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Investment Management</p>


      <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Retirement Planning</p>


       <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2 opacity-20"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Tax Planning</p>


        <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2 opacity-20"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Risk Management</p>
    </div>
</div>


</div>



 {/*02 */}
<div  className="flex flex-col lg:flex-row px-[20px] bg-[#012A2B] lg:w-full lg:h-80 h-220  lg:items-center lg:justify-start rounded-xl gap-20 relative">


<div>

    <div
  className="w-80 h-52 bg-[#D9FF43] p-13 hidden lg:block"
  style={{
    clipPath: "polygon(0 0, 75% 0%, 100% 50%, 75% 100%, 0 100%)",
  }}
>

    
    <h1 className="text-[50px] text-[#023436ff]"> {isOn ? "$59.00" : "$49.00"}</h1>
    <p className="#D9FF43 font-bold text-[18px] text-[#023436ff]">{isOn ? "Per Month" : "Month (billed annually)"}</p>
</div>

<div
  className="lg:w-80  mx-auto   h-42 bg-[#D9FF43] lg:p-13 pt-5  block lg:hidden "
  style={{
    clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
  }}
>
    
    <h1 className="lg:text-[50px] text-[40px] lg:w-60 flex justify-center text-[#023436ff] "> {isOn ? "$59.00" : "$49.00"}</h1>
    <p className="#D9FF43 font-bold lg:text-[18px] text-[16px] flex justify-center text-[#023436ff]">{isOn ? "Per Month" : "Month (billed annually)"}</p>
</div>

</div>

<div>
    <h1  className="lg:text-[26px] text-[25px] text-white ">Team plan: Personalized Financial Plan</h1>
    <div className="border-[#023436ff] border-1 w-90 mt-10 "></div>
     <div className="mt-10 flex justify-center">
        <button className="bg-[#D9FF43] hover:bg-[#023436ff] hover:text-[#023436ff] transition-all duration-700 ease-in-out rounded-lg lg:w-90 w-[100%] h-18 justify-center flex items-center gap-3 text-[#023436ff] text-[18px]">Get The Plan Now <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#023436fff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></span></button>
    </div>
</div>


<div>
    <p className="text-[#C6C6C6] text-[16px]">Features Include:</p>
    <div className="mt-10 flex flex-col gap-2">
    <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Financial Planning</p>


     <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Investment Management</p>


      <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Retirement Planning</p>


       <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2 "> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Tax Planning</p>


        <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2 opacity-20"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Risk Management</p>
    </div>
</div>

</div>



 {/*03 */}
<div className="flex flex-col lg:flex-row px-[20px] bg-[#012A2B] lg:w-full lg:h-80 h-220  lg:items-center lg:justify-start rounded-xl gap-20 relative">


<div>

   <div
  className="lg:w-80 h-52 bg-[#023436ff] p-13 lg:block hidden "
  style={{
    clipPath: "polygon(0 0, 75% 0%, 100% 50%, 75% 100%, 0 100%)",
  }}
>
    
    <h1 className="lg:text-[50px] text-[30px] text-white"> {isOn ? "$29.00" : "$99.00"}</h1>
    <p className="#D9FF43 font-bold text-[18px] text-white">{isOn ? "Per Month" : "Month (billed annually)"}</p>
</div>


<div
  className="lg:w-80  mx-auto   h-42 bg-[#023436ff] lg:p-13 pt-5  block lg:hidden "
  style={{
    clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
  }}
>
    
    <h1 className="lg:text-[50px] text-[40px] lg:w-60 flex justify-center text-white"> {isOn ? "$109.00" : "$99.00"}</h1>
    <p className="#D9FF43 font-bold lg:text-[18px] text-[16px] flex justify-center text-white">{isOn ? "Per Month" : "Month (billed annually)"}</p>
</div>
</div>

<div className="">
    <h1  className="text-[25px]  text-white lg:w-80">Enterprise plan: Ongoing Support and Review</h1>
    <div className="border-[#023436ff]  border-1 lg:w-90 mt-10 "></div>
    <div className="mt-10 flex justify-center">
        <button className="bg-[#023436ff] hover:bg-white hover:text-[#023436ff] transition-all duration-700 ease-in-out rounded-lg lg:w-90 w-[100%] h-18 justify-center flex items-center gap-3 text-white text-[18px]">Get The Plan Now <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f4f8f8ff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></span></button>
    </div>
</div>


<div>
    <p className="text-[#C6C6C6] text-[16px]">Features Include:</p>
    <div className="mt-10 flex flex-col gap-2">
    <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Financial Planning</p>


     <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Investment Management</p>


      <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2"> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Retirement Planning</p>


       <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2 "> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Tax Planning</p>


        <p className="text-[#C6C6C6] text-[18px] flex items-center gap-2 "> <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9FF43"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span> Risk Management</p>
    </div>
</div>

</div>


</div>

        </section>
    )
}
export default PricingSection3;