import profileImage from '../../images/foto-perfil.jpeg';

export const ProfileImage = () => (
  <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300">
    <img 
      src={profileImage}
      alt="Foto de perfil"
      className="w-full h-full object-cover"
    />
  </div>
);