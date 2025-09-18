import { Link } from "react-router-dom"; // ✅

const NavBar = () => {
  
  return (
    <div className="pt-7 h-20 px-4 flex items-center justify-evenly">
      <h1 className="font-bold text-[50px] bg-gradient-to-r from-[#43e205] to-[#eabe60] bg-clip-text text-transparent">
        Password Manager
      </h1>
    </div>
  );
};

export default NavBar;
