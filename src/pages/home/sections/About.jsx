import { useEffect, useState } from "react";
import { useInView } from "../../../components/hooks/useInView";

const About = () => {
  const { ref, inView } = useInView(0.1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const animateClass = hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    <section
      ref={ref}
      id="about"
      className="w-full py-20 px-4 md:px-8 bg-gray-50 flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Description */}
          <article className={`lg:w-1/2 text-center lg:text-left transition-all duration-700 ${animateClass}`}>
            <header>
              <h1 className="text-4xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold mb-8">
                Who Are We?
              </h1>
            </header>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              We are a management advisory and execution support firm helping telecom,
              media, and digital businesses grow faster through strategic insight,
              operational excellence, and innovative solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              With over two decades of experience, we've helped transform businesses
              across Africa and beyond, bringing global standards to emerging markets.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-full transition-all hover:shadow-lg">
              Learn More About Us
            </button>
          </article>

          {/* Right Column: Stats */}
          <div className={`lg:w-1/2 w-full transition-all duration-700 delay-300 ${animateClass}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCard number="21+" text="Years of Experience" delay="delay-0" />
              <StatCard number="200+" text="Completed Projects" delay="delay-100" />
              <StatCard number="50+" text="Experts & Consultants" delay="delay-200" />
              <StatCard number="100%" text="Customer Satisfaction" delay="delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, text, delay }) => {
  return (
    <div className={`bg-white rounded-2xl flex flex-col justify-center items-center p-8 
      shadow-[0_4px_20px_rgba(59,130,246,0.15)] 
      hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)]
      transition-all duration-500 ${delay} hover:-translate-y-1`}>
      <h2 className="text-3xl font-bold text-blue-800">{number}</h2>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
};

export default About;
