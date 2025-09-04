import React from 'react';
import SplitText from '@/ui/splitText';
import projects from '@/data/projects.json'

const Projects = () => {
  const projectsData = projects;

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black via-black to-background px-8 py-16 md:p-20 md:py-40">
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <SplitText
          text="Projects"
          className="w-4/5 uppercase p-2 md:pb-8 text-foreground text-sm md:text-sm font-light text-start avalon-bold uppercase tracking-[0.4em]"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-200px"
          textAlign="start"
          onLetterAnimationComplete={() => { }}
        />
        <div className="w-full md:w-[100vw] flex flex-col items-stretch justify-center">
          {projectsData.map((project) => (
            <div key={project.id} className="group relative cursor-pointer">
              <hr className="w-full md:w-[100vw] border-secondary" />
              {/* Background wipe element */}
              <div className="absolute md:group-hover:w-[100vw] top-0 left-0 h-full bg-tertiary transition-all duration-400 ease-in-out w-0 group-hover:w-full z-0"></div>

              {/* Content layer */}
              <div className="relative w-4/5 mx-auto py-8 z-10">
                <div className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                  <div>
                    <h1 className="pb-4 uppercase tracking-tighter text-4xl md:text-7xl font-semibold text-start avalon-bold leading-[1] transition-colors duration-100 group-hover:text-background">
                      {project.title}
                    </h1>
                    
                    <div className="flex justify-start">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 rounded-md text-tertiary bg-background font-semibold transition-colors duration-300 avalon-bold group-hover:bg-tertiary border-1 border-secondary group-hover:border-background group-hover:text-background"
                      >
                        View Project
                      </a>
                    )}
                    </div>
                  </div>
                  <div>
                    <p className="mb-4 avalon transition-colors duration-100 group-hover:text-background">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="bg-secondary text-foreground group-hover:bg-background group-hover:text-tertiary uppercase px-3 py-1 rounded-full text-sm avalon-bold transition-colors duration-100"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-full border-secondary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
