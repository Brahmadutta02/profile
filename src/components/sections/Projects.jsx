import { RevealOnScroll } from "../RevealOnScroll";
import { useMouseFollow } from "../../hooks/useMouseFollow";

export const Projects = () => {
  const projectRefs = [
    useMouseFollow(),
    useMouseFollow(),
    useMouseFollow(),
    useMouseFollow()
  ];

  const projects = [
    {
      title: "Youtube Dashboard",
      description: " Designed and implemented a Youtube Dashboard characterized by a sleek, tab-based interface.  Designed a responsive navigation bar, sidebar, and right pane. API call was made forfetching the analytics data, trending hashtags, videos, and channel URLs.",
      technologies: ["React", "Node.js", "AWS", "Rest API"],
      link: "https://cloud-platform.netlify.app"
    },
    {
      title: "Trip Planner",
      description: "Built a user-friendly travel booking website for a client designed to enhance the experience for tourists. It is for travelers to book their entire itinerary for one place. Through an integrated API, travelers can choose their preferred hotels and restaurants based on their requirements.Google Map API was used to get hotel and restaurant data and directions. A secure login system ensures that users can create and manage their accounts with ease,providing a personalized booking experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Flask", "GoogleAPI"],
      link: "https://ai-analytics.herokuapp.com"
    },
    {
      title: "Soil E-Commerce",
      description: " In this project, developed an e-commerce website for a client, specializing in soil e-commerce. Users can browse and choose from a wide range of soil products with detailed descriptions and images. Convenient cart functionality was added to manage selected products.",
      technologies: ["ReactJS", "JavaScript", "PostgreSQL"],
      link: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Real-Time Chat App",
      description: "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
      technologies: ["Socket.IO", "Express", "React", "Redis"],
      link: "https://realtime-chat.vercel.app"
    }
  ];

  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="animated-border-box mouse-follow" ref={projectRefs[index]}>
                <div className="p-6 rounded-xl transition-all">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className="
                          bg-blue-500/10 text-blue-500 py-1 px-3 
                          rounded-full text-sm
                          transition
                          hover:bg-blue-500/20 hover:-translate-y-0.5
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleProjectClick(project.link)}
                      className="text-blue-400 hover:text-blue-300 transition-all my-4 flex items-center gap-2 group
                        px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      <span>View Project</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
