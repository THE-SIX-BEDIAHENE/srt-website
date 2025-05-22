import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="relative w-full min-h-screen px-4 md:px-8 flex items-center overflow-hidden py-27" id="home">
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl transition-all duration-1000 ${isLoaded ? 'opacity-70' : 'opacity-0'}`}></div>
        <div className={`absolute top-1/3 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className={`space-y-8 max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                Empowering Africa <span className="text-blue-800">and Beyond</span> Through Innovative Technology
              </h1>
              <h3 className="text-xl md:text-2xl font-semibold mt-2 text-blue-800">
                We Connect, Lead and Transform
              </h3>
              <p className="text-lg text-gray-700 max-w-xl mt-4">
                We bridge the technological gap with cutting-edge solutions tailored 
                for emerging markets while maintaining global standards.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-800  hover:bg-blue-900 text-white rounded-full transition-all hover:shadow-lg flex items-center justify-center gap-2">
                Get Started <ChevronRight size={16} />
              </button>
              <button className="px-6 py-3 border border-blue-800 text-blue-800  hover:bg-blue-50 rounded-full transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side: Image with Blend Effects */}
          <div className={`relative h-[80vh] max-h-[600px] transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl overflow-hidden backdrop-blur-sm mt-4">
                <img 
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Technology Team" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>
              
              {/* Overlay gradient for better blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-white/30 mix-blend-overlay"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-blue-800/80 to-transparent">
                <p className="text-white text-lg font-medium">Transforming businesses with innovative tech solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path 
            d="M0,60 C300,120 900,0 1200,80 L1200,120 L0,120 Z" 
            fill="#f9fafb"
          />
        </svg>
      </div>
    </header>
  );
};

export default Hero;