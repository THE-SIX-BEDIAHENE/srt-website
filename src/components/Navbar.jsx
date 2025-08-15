import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-1"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between items-center h-16 px-4 md:px-1">
          {/* Logo Section */}
          <div className="flex items-center gap-1.5">
            <img src={logo} width={60} alt="Logo" />
            <span
              className={`text-xl md:block font-bold ${
                scrolled
                  ? "text-blue-900"
                  : location.pathname === "/about"
                  ? "text-white"
                  : "text-gray"
              }`}
            >
              SilverRock 
            </span>
            <span
              className={`font-bold text-xl  ${
                scrolled ? "text-black" : "text-blue-900"
              }`}
            >
              Technology
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800">
            {["Home", "About", "Solutions", "Careers", "Blogs", "Contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  title={item}
                  scrolled={scrolled}
                  path={location.pathname}
                />
              )
            )}
            {/* <button className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-all duration-300 text-sm font-semibold">
              Get in Touch
            </button> */}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-blue-800"
                  : location.pathname === "/about"
                  ? "text-white"
                  : "text-gray-800"
              } hover:text-blue-700 focus:outline-none`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm text-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[400px] py-4 shadow-lg opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="px-6 space-y-4 ">
          {["Home", "About", "Solutions", "Careers", "Blogs", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="block py-2 text-lg font-semibold hover:text-blue-700 transition-colors"
              >
                {item}
              </Link>
            )
          )}
          {/* <button className="w-full py-3 mt-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-all duration-300 text-sm font-semibold">
            Get in Touch
          </button> */}
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ title, scrolled, path }) => {
  const isAboutPage = path === "/about"; // 👈 Check if on About page
  const basePath =
    title.toLowerCase() === "home" ? "/" : `/${title.toLowerCase()}`;

  return (
    <Link
      to={basePath}
      className={`font-medium transition-all duration-300 hover:text-blue-700 ${
        scrolled
          ? "text-gray-800"
          : isAboutPage
          ? "text-white" // 👈 White text on About page
          : "text-gray"
      }`}
    >
      {title}
    </Link>
  );
};

export default Navbar;

// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "/logo.png";
// import { Link } from "react-router";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className={`fixed w-full font-[Urbanist] z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-4'
//       }`}>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-5">

//         <div className="flex justify-between items-center h-20 px-4 md:px-1">

//   {/* Logo Section */}
//   <div className="flex items-center gap-1">
//     <img src={logo} width={50} alt="Logo" />
//     <span className={`text-xl md:block font-bold ${scrolled ? 'text-[#1D52A7]' : 'text-gray'}`}>
//       SilverRock
//     </span>
//     <span className={`font-semibold  text-xs ${scrolled ? 'text-black' : 'text-[#1D52A7]'}`}>Technology</span>
//   </div>

//   {/* Desktop Nav */}
//   <nav className="hidden md:flex gap-8 text-xl font-bold">
//     <Link to="/"><div className="cursor-pointer hover:text-[#016DE9]">Home</div></Link>
//     <Link to="/about"><div className="cursor-pointer hover:text-[#016DE9]">About</div></Link>
//     <Link to="/solutions"><div className="cursor-pointer hover:text-[#016DE9]">Solutions</div></Link>
//     <Link to="/careers"><div className="cursor-pointer hover:text-[#016DE9]">Careers</div></Link>
//     <Link to="/blogs"><div className="cursor-pointer hover:text-[#016DE9]">Blogs</div></Link>
//     <Link to="/contact"><div className="cursor-pointer hover:text-[#016DE9]">Contact</div></Link>
//   </nav>

//   {/* Mobile Menu Icon */}
//   <div className="md:hidden">
//     <button
//       onClick={toggleMenu}
//       type="button"
//       className={`${scrolled ? 'text-[#1D52A7]' : 'text-blue-800'} hover:text-gray-300 focus:outline-none`}
//       aria-label="Toggle menu"
//     >
//       {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//     </button>
//   </div>
// </div>

//       </div>

//        {/* Mobile Menu */}
//        {menuOpen && (
//         <div className="md:hidden bg-white text-black">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a to="/" scrolled={scrolled}>
//                 <div className="cursor-pointer hover:text-[#016DE9]">Home</div>
//               </a>
//               <a to="/about" scrolled={scrolled}>
//                 <div className="cursor-pointer hover:text-[#016DE9]">About</div>
//               </a>
//               <a to="/solutions" scrolled={scrolled}>
//                 <div className="cursor-pointer hover:text-[#016DE9]">Solutions</div>
//               </a>
//               <a to="/careers" scrolled={scrolled}>
//                 {" "}
//                 <div className="cursor-pointer hover:text-[#016DE9]">Careers</div>
//               </a>
//               <a to="/blogs" scrolled={scrolled}>
//                 {" "}
//                 <div className="cursor-pointer hover:text-[#016DE9]">Blogs</div>
//               </a>

//               <a to="/contact" scrolled={scrolled}>
//                 <div className="cursor-pointer hover:text-[#016DE9]">Contact</div>
//               </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // const Link = ({ href, scrolled }: { href: string; scrolled: boolean }) => (
// //   <a
// //     href={href}
// //     className={`font-medium hover:text-[#1D52A7] transition-colors duration-300 ${
// //       scrolled ? 'text-gray-800' : 'text-white'
// //     }`}
// //   >
// //     {title}
// //   </a>
// // );

// export default Navbar;
