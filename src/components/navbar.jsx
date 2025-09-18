import React from "react";

const NavBar = () => {
  return (
    <div className="pt-7 h-20 px-4 flex items-center justify-evenly">
      <h1 className="font-bold text-[50px] bg-gradient-to-r from-[#43e205] to-[#eabe60] bg-clip-text text-transparent">Password Manager</h1>

      <div>
        <ul className="flex space-x-8 text-white text-lg cursor-pointer">
          <li className="text-[25px] bg-gradient-to-t from-[#e4f0bf] to-[#eabe60] bg-clip-text text-transparent">Home</li>
          <li className="text-[25px] bg-gradient-to-t from-[#e4f0bf] to-[#eabe60] bg-clip-text text-transparent">Password List</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
