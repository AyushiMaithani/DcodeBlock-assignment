import React from "react";
import Button from './shared/Button';

const Navbar = () => {
    const navElements = [
        { label: "Overview"},
        { label: "Create Team"},
        { label: "Prizes & Sponsors"},
        { label: "FAQs" },
        { label: "Judging & Rules"},
        { label: "Resources"},
      ];
  return (
    <nav className="flex items-center justify-center mt-10 text-sm">
      <ul
        className="flex w-[60vw] justify-center space-x-5  border-[#DFDFDF1A] rounded-lg bg-[#28083A]"
        style={{ boxShadow: "0 0 4px white" }}
      >
        {navElements.map((navItem, index,active) => (
          <li key={index}>
            <Button text={navItem.label} active={active} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
