import React from "react";
import Button from './shared/Button';

const Navbar = () => {
  const navElements = [
    { label: "Overview" },
    { label: "Create Team" },
    { label: "Prizes & Sponsors" },
    { label: "FAQs" },
    { label: "Judging & Rules" },
    { label: "Resources" },
  ];

  return (
    <nav className="py-2 sm:mt-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <ul
        style={{boxShadow: "0 0 5px white"}}
          className="grid grid-cols-2 sm:flex sm:flex-row sm:w-[60vw] w-full sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0 sm:p-0 p-4 sm:border-none border-t border-[#DFDFDF1A] rounded-lg bg-[#28083A] sm:grid-cols-none"
        >
          {navElements.map((navItem, index) => (
            <li key={index}>
              <Button text={navItem.label} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
