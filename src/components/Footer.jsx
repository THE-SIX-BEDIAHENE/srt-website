import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
<footer className="w-full bg-white rounded-2xl text-gray-800 py-9 font-[Urbanist] mt-10 px-4 md:px-16 border-t-4 border-blue-900 h-[38vh]">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        {/* Left Section */}
        <div>
          <div className="flex items-center ">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" /> {/* Replace with actual logo path */}
            <span className="text-lg font-medium">Silver Rock Technology</span>
          </div>
          <div className="text-sm my-4">
            <p>Silver Rock Technology Limited</p>
            <p>10 Jungle Road, East Legon, Accra, Ghana</p>
            <p>info.srtsghana@silverrocktech.com

</p>
          </div>
          <div className="flex space-x-4 text-xl mt-2">
            <FaXTwitter className="text-black hover:text-blue-800"/>
            <FaInstagram className="text-red-500 hover:text-blue-800" />
            <FaYoutube className="text-red-600 hover:text-blue-800"/>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6 text-sm self-end md:self-auto">
          <a href="#home" className="hover:underline hover:text-blue-800">Home</a>
          <a href="#about" className="hover:underline hover:text-blue-800">About</a>
          <a href="#projects" className="hover:underline hover:text-blue-800">Projects</a>
          <a href="#contact" className="hover:underline hover:text-blue-800">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
