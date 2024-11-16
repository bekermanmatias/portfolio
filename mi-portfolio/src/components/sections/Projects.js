// src/components/sections/Projects.js
export const Projects = ({ projects }) => {
    const { darkMode } = useTheme();
  
    return (
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    );
  };