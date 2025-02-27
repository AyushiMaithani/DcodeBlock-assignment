import React from "react";
import Button from './shared/Button';

const Navbar = () => {
    const navElements = [
        { label: "Overview", active: true },
        { label: "Create Team", active: false },
        { label: "Prizes & Sponsors", active: false },
        { label: "FAQs", active: false },
        { label: "Judging & Rules", active: false },
        { label: "Resources", active: false },
      ];
  return (
    <nav className="flex items-center justify-center mt-10 text-sm">
      <ul
        className="flex w-[60vw] justify-center space-x-5  border-[#DFDFDF1A] rounded-md bg-[#28083A]"
        style={{ boxShadow: "0 0 10px white" }}
      >
        {navElements.map((navItem, index) => (
          <li key={index}>
            <Button text={navItem.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
