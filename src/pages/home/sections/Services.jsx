import { useState } from "react";
import { useInView } from "../../../components/hooks/useInView";
import { BarChart3, PieChart, LineChart } from "lucide-react";

const servicesData = [
  {
    id: "managed",
    title: "Managed Service",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Leveraging the deep and broad expertise of our founding partners, Silver Rock Technology Holdings supports clients by taking full or partial responsibility for network management, 24/7 help/service desk operations, and network deployment services.",
    features: [
      "24/7 Network Monitoring",
      "Help Desk Support",
      "Infrastructure Management",
      "Security Operations"
    ],
    image: "https://images.pexels.com/photos/7709085/pexels-photo-7709085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "advisory",
    title: "Advisory Services",
    icon: <PieChart className="w-6 h-6" />,
    description: "Our team provides expert guidance on digital transformation, business process optimization, and technology strategy. We help businesses navigate complex challenges and identify opportunities for growth and innovation.",
    features: [
      "Digital Transformation",
      "Process Optimization",
      "Technology Strategy",
      "Innovation Consulting"
    ],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "program",
    title: "Program Management",
    icon: <LineChart className="w-6 h-6" />,
    description: "We excel in overseeing complex technology implementations and organizational change initiatives. Our experienced program managers ensure projects are delivered on time, within budget, and with measurable business outcomes.",
    features: [
      "Project Planning",
      "Risk Management",
      "Resource Allocation",
      "Change Management"
    ],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState("managed");
  const { ref, inView } = useInView(0.1);
  
  const currentService = servicesData.find(service => service.id === activeService) || servicesData[0];

  return (
    <section 
      ref={ref}
      id="services"
      className="w-full flex flex-col px-4 md:px-8 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-400/5 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Heading */}
        <h2 className={`text-4xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold mb-12 text-center ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700`}>
          Our Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                activeService === service.id 
                  ? 'ring-2 ring-blue-800 shadow-lg transform scale-105' 
                  : 'bg-white shadow-md hover:shadow-xl'
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              onClick={() => setActiveService(service.id)}
            >
              <div className="p-6 cursor-pointer">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-blue-800 text-white'
                      : 'bg-blue-100 text-blue-800 group-hover:bg-blue-900 group-hover:text-white'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                {/* Features
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                      {feature}
                    </li>
                  ))}
                </ul> */}

                {/* Learn More Button */}
              
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 cursor-pointer"></div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {currentService && (
          <div className={`mt-12 rounded-2xl overflow-hidden bg-white shadow-xl ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } transition-all duration-700 delay-200`}>
            <div className="relative h-[400px] overflow-hidden">
              <img 
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex items-center">
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold text-white mb-4">{currentService.title}</h3>
                  <p className="text-white/90 text-lg">{currentService.description}</p>
                  <button className="mt-6 px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;