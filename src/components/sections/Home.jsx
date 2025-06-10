import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
        <RevealOnScroll>
          <div className="text-center md:text-left z-10 md:w-10/12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right animate-fadeIn">
              Hi, I'm Chinmay Kumar Das
            </h1>

            <p className="tex-gray-400 text-lg mb-8 max-w-lg animate-slideUp opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              I'm a Full Stack Machine learning Engineer who loves crafting clean,
              scalable applications. My goal is to build solutions that offer
              both exceptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 animate-slideUp opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:scale-105 duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-300 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className="md:w-10/12 flex justify-end -mr-20">
            <img
              src="./public/profile.jpeg"
              alt="Chinmay Kumar Das"
              className="rounded-3xl w-[32rem] md:w-[44rem] h-80 md:h-96 object-cover shadow-xl border-4 border-blue-500/20 animate-float hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300"
            />
          </div>
        </RevealOnScroll>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
