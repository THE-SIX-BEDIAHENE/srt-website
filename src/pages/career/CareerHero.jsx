import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../../components/UI/Button';

export const CareerHero = () => {
  const scrollToOpportunities = () => {
    document.getElementById('internships')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="relative min-h-[90vh] text-blue-800  overflow-hidden mt-10" >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] bg-[length:20px_20px] opacity-10"></div>
      
      {/* Background image positioned to the right */}
      <div className="absolute top-0 right-0 h-full w-1/2 transition-opacity duration-1000">
        <div 
          className="h-full w-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/745d135940d3ffa73c0385c3c2522104.jpg')" }}
        ></div>
      </div>

      {/* Gradient overlay on the image */}
      <div className="absolute top-0 right-0 h-full w-1/2 "></div>
      
      <div className="container
        mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-800 animate-fade-in animation-delay-200">
            We're looking for passionate individuals to help build the <br /> future. 
            Discover opportunities that match your skills and <br /> aspirations.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
            <Button onClick={scrollToOpportunities} variant="primary">
              Explore Opportunities
            </Button>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              variant="secondary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-8 animate-bounce">
        <ChevronDown 
          size={32} 
          onClick={scrollToOpportunities}
          className="cursor-pointer text-blue-800 hover:text-blue-600 transition-colors"
          aria-label="Scroll down"
        />
      </div>
    </div>
  );
};