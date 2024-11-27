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
    <div className="glass-card p-8 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col bg-black/10">
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden backdrop-blur-lg bg-black/10 ring-1 ring-white/10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}
      <h3 className="text-3xl font-bold mb-4 text-white">
        {name}
      </h3>
      <p className="text-gray-200 mb-6 text-lg flex-grow leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((tech, i) => (
          <span
            key={i}
            className="tag-primary px-3 py-1 text-sm rounded-md inline-flex items-center justify-center text-white/90 backdrop-blur-xl bg-white/5"
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
            className="text-white hover:text-white/90 transition-all hover:scale-110 duration-200 backdrop-blur-xl bg-white/5 p-2 rounded-full hover:bg-white/10"
          >
            <FaGithub size={24} />
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/90 transition-all hover:scale-110 duration-200 backdrop-blur-xl bg-white/5 p-2 rounded-full hover:bg-white/10"
          >
            <FaExternalLinkAlt size={22} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
