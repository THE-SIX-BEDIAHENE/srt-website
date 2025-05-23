import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Senior Developer',
    content: "The collaborative culture here is unlike anywhere I've worked before. I'm constantly learning from talented colleagues and have grown so much professionally in the past three years.",
    image: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg',
    years: 3
  },
  {
    id: 2,
    name: 'Jamie Chen',
    role: 'Product Designer',
    content: "I appreciate how we're encouraged to take ownership of our work. The company truly values design and understands its impact on creating exceptional products.",
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    years: 2
  },
  {
    id: 3,
    name: 'Taylor Williams',
    role: 'Marketing Manager',
    content: 'The growth opportunities here are incredible. I started as a marketing specialist and was supported in developing new skills that led to my current role leading our campaign strategy.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    years: 4
  }
];

export const EmployeeTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Hear directly from the people who make our company special. Our team shares their experiences and why they love working here.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
            <button
              onClick={prevTestimonial}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-800 hover:text-blue-900 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-blue-50 p-6 md:p-10">
            <div className="absolute top-6 left-6 text-blue-300 opacity-30">
              <Quote size={48} />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out flex ${
                isAnimating
                  ? direction === 'right'
                    ? '-translate-x-[120%] opacity-0'
                    : 'translate-x-[120%] opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4 relative z-10">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div>
                    <p className="text-xl font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].years} years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
            <button
              onClick={nextTestimonial}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-800 hover:text-blue-900 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index > currentIndex) {
                    setDirection('right');
                  } else if (index < currentIndex) {
                    setDirection('left');
                  }
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 500);
                }}
                className={`h-2 w-8 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
