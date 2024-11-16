export const SocialLinks = () => {
    const { darkMode } = useTheme();
    
    return (
      <div className="flex gap-4 mt-6">
        <SocialLink href="#" icon={<Github size={24} />} />
        <SocialLink href="#" icon={<Linkedin size={24} />} />
        <SocialLink href="#" icon={<Mail size={24} />} />
      </div>
    );
  };