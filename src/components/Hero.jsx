import React from "react";
import text from "../assets/images/text.png";

const Hero = () => {
  return (
    <main className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center mt-8 sm:mt-20">

      <div className="mb-4 sm:mb-8 flex items-center justify-center">
        <img src={text} alt="HackIndia Logo" className="max-w-full h-auto" />
      </div>

      {/* Main */}
      <div className="mb-4 sm:mb-8">
        <div className="flex items-center justify-center mb-4 sm:mb-0">
          <div className="bg-orange-500 text-white tracking-widest text-4xl sm:text-6xl pl-2 font-bold border border-[#FFFFFF80] rounded">
            Ha
          </div>
          <div className="text-white tracking-widest text-4xl sm:text-6xl font-bold">
            ckIndia2025
          </div>
        </div>
        <h2 className="text-2xl sm:text-4xl mt-4 tracking-wider font-medium" style={{ fontFamily: "Geo" }}>
          India's Biggest Web3 & AI Hackathon
        </h2>
      </div>

      <div
        style={{
          fontFamily: "Geo",
          background:
            "linear-gradient(91.08deg, #6A1799 -29.38%, #230833 105.37%)",
          boxShadow: "0 0 5px white",
        }}
        className="text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-2xl sm:text-3xl mb-6 sm:mb-12"
      >
        February 28 - September 28
      </div>

      {/* Stats Section */}
<div className="flex flex-col tracking-widest sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
  <div className="flex items-center">
    <span className="text-orange-500 font-bold text-lg sm:text-2xl mr-2">$150+</span>
    <span className="text-sm sm:text-xl">Prize Pool</span>
  </div>
  
  <div className="hidden sm:block border-l-4 border-white h-6 mx-2"></div>

  <div className="flex items-center">
    <span className="text-orange-500 font-bold text-lg sm:text-2xl mr-2">150+</span>
    <span className="text-sm sm:text-xl">Universities</span>
  </div>
  
  <div className="hidden sm:block border-l-4 border-white h-6 mx-2"></div>

  <div className="flex items-center">
    <span className="text-orange-500 font-bold text-lg sm:text-2xl mr-2">25,000+</span>
    <span className="text-sm sm:text-xl">Students</span>
  </div>
</div>


      {/* Register Button */}
      <button className="px-6 py-2 sm:px-8 sm:py-3 text-white rounded flex items-center mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"  
          height="auto"
          viewBox="0 0 150 53"
          fill="none"
        >
          <path
            d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
            stroke="#B026FF"
            strokeWidth="0.7"
          />
          <path
            d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z"
            fill="#D9D9D9"
            fillOpacity="0.05"
            stroke="#B026FF"
          />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="16"
            fill="#FFFFFF"
          >
            Register now!
          </text>
        </svg>
      </button>
    </main>
  );
};

export default Hero;
