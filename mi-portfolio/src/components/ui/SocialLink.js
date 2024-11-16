export const SocialLink = ({ href, icon }) => {
    const { darkMode } = useTheme();
    
    return (
      <a 
        href={href} 
        className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
      >
        {icon}
      </a>
    );
  };