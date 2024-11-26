import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGlobeAsia } from 'react-icons/fa';

interface PersonCardProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

const PersonCard = ({ name, role, image, github, linkedin, portfolio }: PersonCardProps) => {
  const hasSocialLinks = github || linkedin || portfolio;

  return (
    <div className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300 h-full">
      <div className="flex flex-col items-center h-full">
        <div className="relative w-40 h-40 mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white/10 hover:border-[#FF3BFF]/30 transition-colors duration-300">
            <Image 
              src={image} 
              alt={name} 
              width={160} 
              height={160} 
              className="object-cover w-full h-full"
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{
          background: 'linear-gradient(135deg, #FF3BFF, #5C24FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>{name}</h3>
        <p className="text-gray-300 mb-6">{role}</p>
        {hasSocialLinks ? (
          <div className="flex gap-6">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#00FFFF] hover:text-white transition-colors hover:scale-110 duration-200"
              >
                <FaGithub size={24} />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FF3BFF] hover:text-white transition-colors hover:scale-110 duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {portfolio && (
              <a 
                href={portfolio} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#5C24FF] hover:text-white transition-colors hover:scale-110 duration-200"
              >
                <FaGlobeAsia size={24} />
              </a>
            )}
          </div>
        ) : (
          <div className="h-6" /> 
        )}
      </div>
    </div>
  );
};

export default PersonCard;
