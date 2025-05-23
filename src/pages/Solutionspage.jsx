// import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const SolutionsPage = () => {
//   return (
//     <div className="bg-[#f7f8fc]" id="services">
//       {/* Header Section */}
//       <div className="pt-28 px-4 container mx-auto">
//         <div className="text-center space-y-5">
//           <h2 className="text-4xl font-bold font-secondary text-black">
//             What Can We Do Together
//           </h2>
//           <p className="md:w-1/2 mx-auto">
//             Explore how our innovative digital and technological solutions can help your organization grow, optimize operations, and stay competitive in today's fast-paced world.
//           </p>
//         </div>
//       </div>

//       {/* Service Tabs Section */}
//       <div className="py-12 md:w-4/5 mx-auto">
//         <Tabs>
//           <TabList className="flex flex-wrap justify-between md:gap-8 gap-4">
//             <Tab>Digital Customer Solutions</Tab>
//             <Tab>Infrastructure & Connectivity</Tab>
//             <Tab>Banking & Fintech</Tab>
//             <Tab>Business & E-commerce Tech</Tab>
//             <Tab>Consulting & Advisory</Tab>
//           </TabList>

//           {/* Tab 1 */}
//           <TabPanel>
//             <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
//               <div className="md:w-1/2 bg-white rounded-lg p-6 md:p-12 font-secondary">
//                 <h3 className="text-3xl font-semibold text-primary mb-4">Customer Experience & AI Solutions</h3>
//                 <p className="mb-8">
//                   Empower your customer service with advanced AI tools and intelligent automation systems tailored to elevate user satisfaction and streamline communication.
//                 </p>
//                 <ul className="list-disc list-inside space-y-3">
//                   <li><strong>CustoCare AI:</strong> Intelligent customer service bots for 24/7 assistance.</li>
//                   <li><strong>AI-based Education Management System:</strong> Boost academic performance with AI-driven tools.</li>
//                   <li><strong>AI & Emerging Tech:</strong> Data modeling, ML deployment, and predictive analytics for smarter decisions.</li>
//                   <li><strong>Super App Development:</strong> All-in-one digital experiences for multiple user needs.</li>
//                 </ul>
//               </div>
//               <div className="md:w-1/2 flex justify-end">
//                 <img src="/robot.jpg" alt="AI Robot" className="w-full max-h-[400px] rounded-2xl object-cover" />
//               </div>
//             </div>
//           </TabPanel>

//           {/* Tab 2 */}
//           <TabPanel>
//             <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
//               <div className="md:w-1/2 bg-white rounded-lg p-6 md:p-12 font-secondary">
//                 <h3 className="text-3xl font-semibold text-primary mb-4">Connectivity & Telecom Services</h3>
//                 <p className="mb-8">
//                   Build strong infrastructure with scalable connectivity and telecom services designed for enterprises and communities.
//                 </p>
//                 <ul className="list-disc list-inside space-y-3">
//                   <li><strong>B2B Satellite Services:</strong> Reliable satellite internet for businesses and governments.</li>
//                   <li><strong>Community Wi-Fi:</strong> Expanding access to underserved areas.</li>
//                   <li><strong>Telco Spare Parts & Maintenance:</strong> Durable telecom hardware with expert support.</li>
//                   <li><strong>Value-Added Services:</strong> Enhance mobile network offerings with smart tools.</li>
//                 </ul>
//               </div>
//               <div className="md:w-1/2 flex justify-end">
//                 <img src="/robot.jpg" alt="Connectivity" className="w-full max-h-[400px] rounded-2xl object-cover" />
//               </div>
//             </div>
//           </TabPanel>

//           {/* Tab 3 */}
//           <TabPanel>
//             <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
//               <div className="md:w-1/2 bg-white rounded-lg p-6 md:p-12 font-secondary">
//                 <h3 className="text-3xl font-semibold text-primary mb-4">Fintech Solutions</h3>
//                 <p className="mb-8">
//                   Digital banking and fintech products that simplify finance management, improve security, and increase accessibility.
//                 </p>
//                 <ul className="list-disc list-inside space-y-3">
//                   <li><strong>Self-Service Bank Kiosks:</strong> 24/7 banking in any location with minimal human interaction.</li>
//                   <li><strong>Custom Fintech Platforms:</strong> Secure and scalable platforms for digital banking and fintech startups.</li>
//                 </ul>
//               </div>
//               <div className="md:w-1/2 flex justify-end">
//                 <img src="/robot.jpg" alt="Fintech" className="w-full max-h-[400px] rounded-2xl object-cover" />
//               </div>
//             </div>
//           </TabPanel>

//           {/* Tab 4 */}
//           <TabPanel>
//             <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
//               <div className="md:w-1/2 bg-white rounded-lg p-6 md:p-12 font-secondary">
//                 <h3 className="text-3xl font-semibold text-primary mb-4">Business & E-commerce Technology</h3>
//                 <p className="mb-8">
//                   From automation to scalable online platforms, our tech empowers businesses to grow efficiently and reach more customers.
//                 </p>
//                 <ul className="list-disc list-inside space-y-3">
//                   <li><strong>Process Automation:</strong> Improve productivity with intelligent workflows.</li>
//                   <li><strong>Custom Tech Solutions:</strong> Technology tailored to your business goals.</li>
//                   <li><strong>Marketplace & E-commerce Development:</strong> From concept to deployment of digital stores.</li>
//                   <li><strong>Super Apps for Commerce:</strong> Unified commerce solutions with multi-service integrations.</li>
//                 </ul>
//               </div>
//               <div className="md:w-1/2 flex justify-end">
//                 <img src="/robot.jpg" alt="Business Tech" className="w-full max-h-[400px] rounded-2xl object-cover" />
//               </div>
//             </div>
//           </TabPanel>

//           {/* Tab 5 */}
//           <TabPanel>
//             <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
//               <div className="md:w-1/2 bg-white rounded-lg p-6 md:p-12 font-secondary">
//                 <h3 className="text-3xl font-semibold text-primary mb-4">Technology Consulting</h3>
//                 <p className="mb-8">
//                   Navigate the digital landscape with expert guidance. We align your business vision with the right tech strategy and infrastructure.
//                 </p>
//                 <ul className="list-disc list-inside space-y-3">
//                   <li><strong>IT Advisory Services:</strong> Strategic advice for digital transformation.</li>
//                   <li><strong>Tech Feasibility Analysis:</strong> Evaluate, validate, and plan solutions for success.</li>
//                   <li><strong>Innovation Roadmaps:</strong> Future-proof your operations with tailored innovation paths.</li>
//                 </ul>
//               </div>
//               <div className="md:w-1/2 flex justify-end">
//                 <img src="/robot.jpg" alt="Consulting" className="w-full max-h-[400px] rounded-2xl object-cover" />
//               </div>
//             </div>
//           </TabPanel>

//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default SolutionsPage;      

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Network,
  Wallet,
  Store,
  LineChart,
  Bot,
  Wifi,
  CreditCard,
  ShoppingBag,
  Lightbulb,
  Building2,
  Radio,
  GraduationCap,
  Landmark,
  Film,
  ShoppingCart,
  Leaf,
  Rocket,
  Newspaper,
  Trophy,
  Users,
  Globe
} from 'lucide-react';

const tabs = [
  {
    id: 'digital',
    label: 'Digital Customer Solutions',
    icon: Brain,
    title: 'Customer Experience & AI Solutions',
    description: 'Empower your customer service with advanced AI tools and intelligent automation systems tailored to elevate user satisfaction and streamline communication.',
    features: [
      { title: 'CustoCare AI', desc: 'Intelligent customer service bots for 24/7 assistance', icon: Bot },
      { title: 'AI-based Education', desc: 'Boost academic performance with AI-driven tools', icon: Brain },
      { title: 'Predictive Analytics', desc: 'Data modeling and ML deployment for smarter decisions', icon: LineChart },
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure & Connectivity',
    icon: Network,
    title: 'Connectivity & Telecom Services',
    description: 'Build strong infrastructure with scalable connectivity and telecom services designed for enterprises and communities.',
    features: [
      { title: 'B2B Satellite Services', desc: 'Reliable satellite internet for businesses', icon: Network },
      { title: 'Community Wi-Fi', desc: 'Expanding access to underserved areas', icon: Wifi },
      { title: 'Network Maintenance', desc: 'Expert support and hardware solutions', icon: Network },
    ],
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg'
  },
  {
    id: 'banking',
    label: 'Banking & Fintech',
    icon: Wallet,
    title: 'Fintech Solutions',
    description: 'Digital banking and fintech products that simplify finance management, improve security, and increase accessibility.',
    features: [
      { title: 'Self-Service Kiosks', desc: '24/7 banking in any location', icon: CreditCard },
      { title: 'Digital Banking', desc: 'Secure and scalable platforms', icon: Wallet },
      { title: 'Payment Solutions', desc: 'Modern payment processing systems', icon: CreditCard },
    ],
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg'
  },
  {
    id: 'business',
    label: 'Business & E-commerce',
    icon: Store,
    title: 'Business & E-commerce Technology',
    description: 'From automation to scalable online platforms, our tech empowers businesses to grow efficiently and reach more customers.',
    features: [
      { title: 'Process Automation', desc: 'Improve productivity with intelligent workflows', icon: Bot },
      { title: 'E-commerce Platform', desc: 'Custom digital marketplace solutions', icon: ShoppingBag },
      { title: 'Business Analytics', desc: 'Data-driven business insights', icon: LineChart },
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  },
  {
    id: 'consulting',
    label: 'Consulting & Advisory',
    icon: LineChart,
    title: 'Technology Consulting',
    description: 'Navigate the digital landscape with expert guidance. We align your business vision with the right tech strategy and infrastructure.',
    features: [
      { title: 'IT Advisory', desc: 'Strategic advice for digital transformation', icon: Lightbulb },
      { title: 'Tech Analysis', desc: 'Evaluate and validate solutions', icon: LineChart },
      { title: 'Innovation Planning', desc: 'Future-proof your operations', icon: Brain },
    ],
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg'
  }
];

const industries = [
  { name: 'Banking and Financial Services', icon: Building2, description: 'Digital transformation solutions for modern banking' },
  { name: 'Telecommunications', icon: Radio, description: 'Advanced infrastructure and connectivity services' },
  { name: 'Education', icon: GraduationCap, description: 'Smart learning platforms and EdTech solutions' },
  { name: 'Government', icon: Landmark, description: 'Secure and efficient public sector technologies' },
  { name: 'Media and Entertainment', icon: Film, description: 'Digital content delivery and streaming solutions' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'End-to-end online retail platforms' },
  { name: 'Agriculture', icon: Leaf, description: 'Smart farming and land monitoring systems' },
  { name: 'Tech Startups and Enterprises', icon: Rocket, description: 'Scalable solutions for growing businesses' }
];

const mediaHighlights = [
  {
    title: 'Eden Stream',
    // source: 'Tech Weekly',
    date: 'March 2025',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg',
    link: '#',
    category: 'Streaming site',
    excerpt: 'Our groundbreaking Christian Streaming sites where you can watch christian movies, fellowship with your church or get to stream and access to your devotional guide with little cost in data',
    // readTime: '5 min read'
  },
  {
  title: 'Afiplay Ghana',
  source: 'African Streaming Sites',
  date: 'February 2025',
  image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg',
  link: '#',
  category: 'Streaming sites',
  excerpt: 'Afiplay Ghana is redefining local entertainment by delivering premium African content through an affordable, user-friendly streaming platform built for the African audience. Join in as we stay connected through entertainment',
  // readTime: '4 min read'
},
  {
    title: 'Empowering Education Through AI',
    source: 'EdTech Magazine',
    date: 'January 2025',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg',
    link: '#',
    category: 'Education',
    excerpt: 'Artificial intelligence is reshaping how students learn and how educators teach in the digital age.',
    // readTime: '6 min read'
  }
];

const projects = [
  {
    title: 'National Digital Banking Platform',
    category: 'Financial Services',
    description: 'Transformed banking experience for over 5 million users',
    icon: Globe,
    stats: { users: '5M+', transactions: '1B+', uptime: '99.99%' }
  },
  {
    title: 'Smart Agriculture System',
    category: 'AgriTech',
    description: 'AI-powered farming solutions across 100,000 hectares',
    icon: Leaf,
    stats: { coverage: '100K ha', efficiency: '+40%', savings: '$2.5M' }
  },
  {
    title: 'Enterprise Learning Platform',
    category: 'Education',
    description: 'Comprehensive EdTech solution for Fortune 500 companies',
    icon: Users,
    stats: { learners: '250K+', courses: '1,000+', completion: '92%' }
  }
];

function Solutionpage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800  sm:text-5xl md:text-6xl">
            What Can We Do Together
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Explore how our innovative digital and technological solutions can help your organization grow, optimize operations, and stay competitive.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-900 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
              >
                <Icon size={20} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 ">{activeContent?.title}</h2>
                <p className="text-lg text-gray-600">{activeContent?.description}</p>
                
                <div className="space-y-4">
                  {activeContent?.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-gray-50"
                      >
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FeatureIcon className="w-6 h-6 text-blue-900" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                          <p className="text-gray-600">{feature.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src={activeContent?.image}
                  alt={activeContent?.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our expertise spans across multiple sectors, delivering tailored solutions that drive innovation and growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-blue-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-blue-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Discover How We Can Help Your Industry
          </motion.button>
        </div>

        {/* Projects Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800  mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped organizations across different industries achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="p-3 bg-blue-100 rounded-full w-fit mb-6">
                    <Icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-blue-900 font-medium mb-4">{project.category}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <p className="text-lg font-bold text-gray-900">{value}</p>
                        <p className="text-sm text-gray-500 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Media Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 mb-4">Media Project</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest achievements, innovations, and industry insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mediaHighlights.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-blue-900 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Newspaper className="w-4 h-4" />
                      {item.source}
                    </span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-md border border-blue-100"
            >
              View All Articles
              <span className="text-lg">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutionpage;


// import React from "react";


// const AboutPage = () => {
//   return (
//     <>
// <div className="relative w-full h-[40vh]">
//   <div className="absolute inset-0 bg-[url('/about.jpg')] bg-cover bg-no-repeat bg-center z-0" />
//   <div className="absolute inset-0 bg-blue-950 opacity-60 z-10" />
//   <div className="absolute inset-0 bg-black opacity-40 z-10" />
  
//   <h2 className="absolute inset-0 z-20 flex items-center justify-center text-white text-7xl font-bold">
//     ABOUT US
//   </h2>
// </div>

//       <div className="relative font-[Urbanist] flex flex-col items-center justify-start w-full min-h-screen pt-[8vh] px-4 sm:px-6 md:px-8">

//         {/* Header */}
//         <header className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl">
//           <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 bg-white p-6 rounded-xl ">
//             <h1 className=" text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#1D52A7] font-bold">
//               Silver Rock Technology
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl pt-2">
//               We are a management advisory and execution support firm
//               specializing in telecoms, media, and digital industries. Our goal
//               is to be the leading advisory firm in Africa and emerging markets,
//               delivering strategic insights, technical expertise, financial
//               acumen, and operational excellence—all backed by end-to-end
//               execution support for our clients.
//             </p>
//             <p className="text-base sm:text-lg md:text-xl">
//               We provide outsourcing support for managed services engagement...
//             </p>
//           </div>
//           <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow h-auto mt-4">
//             <img
//               src="/team.jpg"
//               alt="team"
//               className="w-full object-cover"
//             />{" "}
//           </div>
//         </header>

//         {/* Our Values Section */}
//         <section className="w-full mt-20 max-w-6xl min-h-screen">
        

//   <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-17">
    
//     {/* Image on the right */}
//     <div className="lg:w-1/2">
//       <img
//         src="/about_1.png.webp"
//         alt="Our Vision"
//         className="w-full h-auto object-cover"
//       />
//     </div>


//     {/* Text on the left */}
//     <div className="lg:w-1/2 text-lg md:text-xl text-gray-800 space-y-6">
//     <h2 className="text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#1D52A7] font-bold mb-8 text-start">
//     Our Vision
//   </h2>
//       <strong>At Silver Rock Technologies, our vision is clear:</strong>
//       <p>
//         A connected, intelligent, and prosperous Africa leading the global digital revolution. <br />
//         We are building the technologies that will shape education, finance, communication, and everyday life.
//       </p>
//       <p className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#1D52A7] font-bold mb-8 ">
//         Join us on this journey.
//       </p>
//     </div>
//   </div>


//           <h2 className=" text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#1D52A7] font-bold  mb-12 text-center">Our Values</h2>
//           <div className="flex flex-col lg:flex-row gap-6 items-center">
//             <img
//               src="https://images.unsplash.com/photo-1630386226447-af0a955c1009?q=80&w=1424&auto=format&fit=crop"
//               alt="Values Landmark"
//               className="w-full lg:w-1/2 rounded-xl shadow"
//             />
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
//               <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
//                 <img
//                   src="https://www.adinkrasymbols.org/adinkra/eban-medium.png"
//                   alt="Respect Symbol"
//                   className="w-12 h-12 mb-3"
//                 />
//                 <h3 className="font-bold text-lg mb-1">Respect</h3>
//                 <p>
//                   We recognize the worth of every individual and treat them
//                   appropriately.
//                 </p>
//               </div>
//               <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
//                 <img
//                   src="https://www.adinkrasymbols.org/adinkra/nkyemu-medium.png"
//                   alt="Professionalism Symbol"
//                   className="w-12 h-12 mb-3"
//                 />
//                 <h3 className="font-bold text-lg mb-1">Professionalism</h3>
//                 <p>
//                   We deliver high quality services to our esteemed clients with
//                   excellence.
//                 </p>
//               </div>
//               <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
//                 <img
//                   src="https://www.adinkrasymbols.org/adinkra/nsaa-medium.png"
//                   alt="Client Value Symbol"
//                   className="w-12 h-12 mb-3"
//                 />
//                 <h3 className="font-bold text-lg mb-1">
//                   Client Value Creation
//                 </h3>
//                 <p>
//                   We ensure sustained value creation through innovative
//                   solutions for our clients.
//                 </p>
//               </div>
//               <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
//                 <img
//                   src="https://www.adinkrasymbols.org/adinkra/anyi-me-aye-a-medium.png"
//                   alt="Integrity Symbol"
//                   className="w-12 h-12 mb-3"
//                 />
//                 <h3 className="font-bold text-lg mb-1">Integrity</h3>
//                 <p>
//                   We do what is right at all times. We keep our word and honor
//                   our commitments.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Leadership Team Section */}
//         <section className="w-full max-w-6xl mt-20 px-2">
//           <h2 className="text-3xl  mb-6 text-center">
//             Leadership Team
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
//               <img
//                 src="https://silverrocktech.com/wp-content/uploads/2017/05/Femi-Banigbe.png"
//                 alt="Femi Banigbe"
//                 className="w-full aspect-[3/4] object-contain"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="font-bold text-xl">Femi Banigbe</h3>
//                 <p className="text-gray-600">Managing Director</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
//               <img
//                 src="https://silverrocktech.com/wp-content/uploads/2017/05/Raphael-Richardo-Emanuel-1-200x300.jpg"
//                 alt="Raphael Richardo Emanuel"
//                 className="w-full aspect-[3/4] object-contain"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="font-bold text-xl">Raphael Richardo Emanuel</h3>
//                 <p className="text-gray-600">EVP Head of Operations</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
//               <img
//                 src="https://silverrocktech.com/wp-content/uploads/2017/05/Abolaji-Idowu.png"
//                 alt="Abolaji Idowu"
//                 className="w-full aspect-[3/4] object-contain"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="font-bold text-xl">Abolaji Idowu</h3>
//                 <p className="text-gray-600">EVP Finance and Global Strategy</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default AboutPage;
