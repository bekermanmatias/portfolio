// src/components/ui/TechnologyTags.js
export const TechnologyTags = ({ technologies }) => {
    const { darkMode } = useTheme();
    
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, i) => (
          <span 
            key={i} 
            className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-3 py-1 rounded-full text-sm`}
          >
            {tech}
          </span>
        ))}
      </div>
    );
  };