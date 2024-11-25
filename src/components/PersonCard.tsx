import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface PersonCardProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const PersonCard = ({ name, role, image, github, linkedin, twitter }: PersonCardProps) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
      <div className="flex flex-col items-center">
        <Image 
          src={image} 
          alt={name} 
          width={128} 
          height={128} 
          className="rounded-full object-cover mb-4 border-2 border-white/10 w-32 h-32"
        />
        <h3 className="text-2xl font-bold text-gradient animate-glitter mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{role}</p>
        <div className="flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaGithub size={24} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaLinkedin size={24} />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaTwitter size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
