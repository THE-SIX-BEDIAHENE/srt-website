
// const Homepage = () => {
//   return (
//     <>
//       <div className="font-[Urbanist] flex flex-col items-center justify-center w-full min-h-screen pt-[5vh] px-4">
//         {/* Hero Section */}
//         <header className="relative overflow-hidden items-center w-full h-screen mt-10 rounded-2xl">
//   {/* Blurred Background Lights */}
//   <div className="absolute top-0 left-0 w-full h-full">
//     <div className="absolute top-1/4 left-1/4 w-96 h-90 rounded-full bg-white blur-3xl"></div>
//     <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white blur-3xl"></div>
//   </div>

//   {/* Main Content */}
//   <div className="relative container mx-auto px-4 sm:px-6 lg:px-6 py-32 md:py-20">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
//       {/* Left Side: Text */}
//       <div className="space-y-6 max-w-2xl">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
//           Empowering Africa and Beyond Through Innovative Technology
//         </h1>
//         <h3 className="text-base sm:text-xl md:text-3xl mt-2 text-blue-800 font-semibold">
//           We Connect, Lead and Transform
//         </h3>
//         <p className="text-lg md:text-xl text-black max-w-xl">
//           We bridge the technological gap with cutting-edge solutions tailored 
//           for emerging markets while maintaining global standards.
//         </p>
//       </div>

//       {/* Right Side: Image */}
//       <div className="flex h-[70vh]">
//         <img src="/hero.webp" alt="Hero" className="w-full" />
//       </div>

//     </div>
//   </div>

//   {/* Wave Divider */}
//   <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//     <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-26">
//       <path 
//         d="
//           M0,60
//           C150,20,350,0,600,40
//           C850,80,1050,60,1200,20
//         "
//         fill="none"
//         stroke="#1D4ED8"
//         strokeWidth="1"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   </div>
// </header>


//         {/* Who Are We */}
//         <section className="w-full h-[80vh] flex flex-col items-center justify-center lg:flex-row gap-10 px-6 py-8">
//   {/* Left Column: Description */}
//   <article className="lg:w-1/2 text-center lg:text-left">
//     <header>
//       <h1 className="text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#1D52A7] font-bold mb-8">Who Are We?</h1>
//     </header>
//     <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
//       We are a management advisory and execution support firm helping telecom,
//       media, and digital businesses grow faster through strategic insight,
//       operational excellence, and innovative solutions.
//     </p>
//   </article>

//   {/* Right Column: Stats */}
//   <div className="lg:w-1/2 w-full">
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//       <div className="bg-white rounded-2xl flex flex-col justify-center items-center p-8 shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
//         <h2 className="text-2xl font-bold">21+</h2>
//         <p className="text-sm sm:text-base text-gray-600">Years of Experience</p>
//       </div>
//       <div className="bg-white rounded-2xl flex flex-col justify-center items-center p-8 shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
//         <h2 className="text-2xl font-bold">200+</h2>
//         <p className="text-sm sm:text-base text-gray-600">Completed Projects</p>
//       </div>
//       <div className="bg-white rounded-2xl col-span-1 sm:col-span-2 flex flex-col justify-center items-center p-8 shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
//         <h2 className="text-2xl font-bold">100%</h2>
//         <p className="text-sm sm:text-base text-gray-600">Customer Satisfaction</p>
//       </div>
//     </div>
//   </div>
// </section>


//         {/* Services */}
//         <section className="w-full flex flex-col px-4 py-8 h-screen">
//   {/* Section Heading */}
//   <h2 className="text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#1D52A7] font-bold mb-8">Our Services</h2>

//   {/* Service Buttons */}
//   <div className="flex flex-col md:flex-row gap-4 w-full">
//     <button className="w-full md:w-1/3 h-16 bg-black text-white rounded-lg text-base md:text-lg font-medium transition duration-300 hover:bg-gray-800">
//       Managed Service
//     </button>
//     <button className="w-full md:w-1/3 h-16 bg-gray-200 text-black rounded-lg text-base md:text-lg font-medium transition duration-300 hover:bg-gray-300">
//       Advisory Services
//     </button>
//     <button className="w-full md:w-1/3 h-16 bg-gray-200 text-black rounded-lg text-base md:text-lg font-medium transition duration-300 hover:bg-gray-300">
//       Program Management Services
//     </button>
//   </div>

//   {/* Description Block with Background Image */}
//   <article
//     className="mt-6 rounded-xl bg-cover bg-center h-[70vh] flex items-start p-6"
//     style={{
//       backgroundImage:
//         "url('https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//     }}
//   >
//     <div className="bg-white bg-opacity-90 p-6 rounded-2xl max-w-2xl w-full text-base sm:text-lg md:text-xl font-medium text-gray-800">
//       Leveraging the deep and broad expertise of our founding partners, Silver Rock Technology Holdings supports clients by taking full or partial responsibility for network management, 24/7 help/service desk operations, and network deployment services.
//     </div>
//   </article>
// </section>

//         {/* Business Focus */}
//         <section className="flex flex-col w-full mt-16 h-screen py-20">
//           <h1 className="text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#1D52A7] font-bold mb-8">
//             Business Focus
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {/* Card 1: Telecom */}
//             <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
//               <div className="flex items-center justify-center w-10 h-10 bg-[#1D52A7] text-white rounded-full text-sm ">
//                 1
//               </div>
//               <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-2">
//                 Telecom
//               </h2>
//               <p className="text-lg sm:text-base">
//                 Global mobile data traffic will grow by 8 fold over the period
//                 2015 – 2020. Mobile data traffic will grow as a compound annual
//                 growth rate of 53% to reach an average of 30.6 Exabyte per month
//               </p>
//             </div>

//             {/* Card 2: Media */}
//             <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
//               <div className="flex items-center justify-center w-10 h-10 bg-[#1D52A7] text-white rounded-full text-sm">
//                 2
//               </div>
//               <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-2">
//                 Media
//               </h2>
//               <p className="text-lg sm:text-base">
//                 Advances in telecom broadband network and mobile devices have
//                 opened up brand new markets to the Media and Entertainment
//                 industry. Consumers have changed the way they consume content.
//               </p>
//             </div>

//             {/* Card 3: Digital */}
//             <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
//               <div className="flex items-center justify-center w-10 h-10 bg-[#1D52A7] text-white rounded-full text-sm">
//                 3
//               </div>
//               <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-2">
//                 Digital
//               </h2>
//               <p className="text-lg sm:text-base">
//                 The launch of Apple’s iPhone in 2007 was a catalyst for change
//                 in telecom and ICT; reshaping communication and interaction.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Projects */}
//         <section className="w-full flex flex-col mt-16">
//           <h1 className="text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#1D52A7] font-bold mb-8">Projects</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="h-100 rounded-2xl bg-[url(https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-center bg-cover text-white flex justify-center items-center text-xl font-semibold">
//               01
//             </div>
//             <div className="h-100 rounded-2xl bg-[url(https://images.unsplash.com/photo-1627423893729-3a79f48ff473?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-center bg-cover text-white flex justify-center items-center text-xl font-semibold">
//               02
//             </div>
//             <div className="h-100 rounded-2xl bg-[url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover text-white flex justify-center items-center text-xl font-semibold">
//               03
//             </div>
//             <div className="h-100 rounded-2xl bg-[url(https://images.unsplash.com/photo-1673661905247-76404fb2f5c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover text-white flex justify-center items-center text-xl font-semibold">
//               04
//             </div>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// };

// export default Homepage;


import { 
  ChevronRight, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Network
} from "lucide-react";
import Hero from "./home/sections/Hero";
import About from "./home/sections/About";
import Services from "./home/sections/Services";
import BusinessFocus from "./home/sections/BusinessFocus";
import Project from "./home/sections/Project";
import Contact from "./home/sections/Contact";

const HomePage = () => {
  return (
    <div className="font-sans flex flex-col items-center justify-center w-full min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Services />
      <BusinessFocus />
      <Project />
      <Contact />
    </div>
  );
};

export default HomePage;