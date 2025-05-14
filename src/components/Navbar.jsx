import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white opacity-95 shadow font-[Urbanist] z-50">
      <div className="flex justify-between items-center h-20 px-4 md:px-10">
        {/* Logo & Text */}
        <div className="flex items-center gap-2">
          <img src={logo} width={50} alt="Logo" />
          <span className="hidden md:block text-lg font-semibold">
            Silver Rock Technology
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-medium ">
          <Link to="/">
            <div className="cursor-pointer hover:text-[#016DE9]">Home</div>
          </Link>
          <Link to="/about">
            <div className="cursor-pointer hover:text-[#016DE9]">About</div>
          </Link>
          <Link to="/solutions">
            <div className="cursor-pointer hover:text-[#016DE9]">Solutions</div>
          </Link>
          <Link to="/careers">
            {" "}
            <div className="cursor-pointer hover:text-[#016DE9]">Careers</div>
          </Link>
          <Link to="/blogs">
            {" "}
            <div className="cursor-pointer hover:text-[#016DE9]">Blogs</div>
          </Link>

          <Link to="/contact">
            <div className="cursor-pointer hover:text-[#016DE9]">Contact</div>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-2 font-medium flex flex-col gap-4">
          <Link to="/">
            <div className="cursor-pointer">Home</div>
          </Link>
          <Link to="/about">
            <div className="cursor-pointer">About</div>
          </Link>
          <div className="cursor-pointer">Projects</div>
          <Link to="/contact">
            {" "}
            <div className="cursor-pointer hover:text-[#016DE9]">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
