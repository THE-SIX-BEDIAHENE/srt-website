import React from 'react';
import { Users, Lightbulb, Heart, Globe } from 'lucide-react';

const Value = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const CompanyCulture = () => {
  return (
    <section id="culture" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold mb-4">Our Culture & Values</h2>
          <p className="text-lg text-gray-600">
            We believe in creating an environment where everyone can thrive, innovate, and make an impact.
            Our culture is built on these core principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-800">
          <Value 
            icon={<Users size={24} />}
            title="Collaboration"
            description="We work together across teams and disciplines, valuing diverse perspectives to achieve better outcomes."
          />
          <Value 
            icon={<Lightbulb size={24} />}
            title="Innovation"
            description="We embrace new ideas and approaches, continuously challenging ourselves to think differently."
          />
          <Value 
            icon={<Heart size={24} />}
            title="Empathy"
            description="We put people first, understanding our users' and colleagues' needs and experiences."
          />
          <Value 
            icon={<Globe size={24} />}
            title="Impact"
            description="We focus on creating meaningful change and measuring our success by the positive difference we make."
          />
        </div>

        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 text-3xl md:text-4xl font-bold mb-4">Life at Our Company</h2>
              <p className="text-gray-600 mb-6">
                We've built a workplace where creativity flourishes, challenges are embraced, and achievements are celebrated. 
                Our offices are designed to foster collaboration while providing spaces for focus and reflection.
              </p>
              <p className="text-gray-600 mb-6">
                From team building events to flexible work arrangements, we're committed to supporting work-life balance 
                and creating a culture where everyone feels valued and inspired.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Flexible Work</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Continuous Learning</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Team Events</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Diversity & Inclusion</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg" 
                  alt="Team collaborating in a modern office" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
