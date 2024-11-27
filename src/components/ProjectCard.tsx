import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

const ProjectCard = ({ name, description, tech, github, live, image }: ProjectCardProps) => {
  return (
    <div className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <h3 className="text-3xl font-bold mb-4" style={{
        background: 'linear-gradient(135deg, #FF3BFF, #5C24FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        {name}
      </h3>
      <p className="text-gray-300 mb-6 text-lg flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-3 mb-8">
        {tech.map((tech, i) => (
          <span
            key={i}
            className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-[rgba(255,59,255,0.1)] to-[rgba(92,36,255,0.1)] border border-[rgba(255,59,255,0.2)] text-white/90"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
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
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF3BFF] hover:text-white transition-colors hover:scale-110 duration-200"
          >
            <FaExternalLinkAlt size={22} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
