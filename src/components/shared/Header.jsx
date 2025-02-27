import React from 'react';
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (<>
    <div className="flex items-center justify-between p-4 mx-24">
      <img src={logo} alt="Logo" />
      <button className="px-4 py-2 text-white rounded flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="53" viewBox="0 0 150 53" fill="none">
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
            Sign in
          </text>
        </svg>
      </button>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 6" fill="none"><path d="M0 6H75.5L88.5 4.5H198L210 6H331.5L337.5 3.5H667.5L673 6H1043.5L1050.5 3H1198H1440V0H0V6Z" fill="#B026FF" fill-opacity="0.5"></path></svg>
    </>
  );
};

export default Header;
