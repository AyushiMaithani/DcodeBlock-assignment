import React, { useState } from 'react';

const Button = ({ text, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button text-white rounded flex items-center w-32 p-2 ${text === 'Overview' ? 'active' : ''}  ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="53" viewBox="0 0 150 53" fill="none">
        <path
          className="button-path-1"
          d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
          stroke="#B026FF"
          strokeWidth="0.7"
        />
        <path
          className="button-path-2"
          d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z"
          fill="#D9D9D9"
          fillOpacity="0.05"
          stroke="#B026FF"
        />
        <text
          className="button-text text-sm"
          x="50%"
          y="55%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="16"
          fill="#FFFFFF"
        >
          {text}
        </text>
      </svg>
    </button>
  );
};

export default Button;
