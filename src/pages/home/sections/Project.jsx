import { useInView } from "../../../components/hooks/useInView";

const projectsData = [
  {
    id: "01",
    title: "Network Deployment",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Telecom"
  },
  {
    id: "02",
    title: "Digital Transformation",
    image: "https://images.pexels.com/photos/7245326/pexels-photo-7245326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Media"
  },
  {
    id: "03",
    title: "5G Implementation",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Telecom"
  },
  {
    id: "04",
    title: "IoT Solutions",
    image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Digital"
  }
];

const Project = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section 
      ref={ref}
      id="projects"
      className="w-full py-20 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className={`text-4xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700`}>
            Featured Projects
          </h2>
          
          <button className={`mt-4 md:mt-0 px-6 py-3 border border-blue-800 text-blue-800 hover:bg-blue-50 rounded-full transition-all ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 delay-200`}>
            View All Projects
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              inView={inView}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, inView, delay }) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl cursor-pointer h-80 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionProperty: 'all',
        transitionDuration: '700ms'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/90 via-blue-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
        <div className="w-12 h-12 bg-blue-700/80 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-lg">
          {project.id}
        </div>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-white text-sm tracking-wider font-medium">{project.category}</span>
          <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
          <button className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-sm transition-all opacity-0 group-hover:opacity-100">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
