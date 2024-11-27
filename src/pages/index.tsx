import React from 'react';
import { FaGithub } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import Header from "../components/Header";
import FluidBackground from "../components/FluidBackground";
import ProjectCard from "../components/ProjectCard";
import PersonCard from "../components/PersonCard";
import { team } from "../data/team";
import { projects } from "../data/projects";

const Index: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      <FluidBackground />
      <div className="relative z-10">
        <Header />
        <main className="text-white relative overflow-x-hidden">
          <div className="relative z-10">
            <section id="hero" className="min-h-screen flex items-center justify-center relative">
              <div className="text-center px-4 z-10 max-w-6xl">
                <div className="animate-fadeIn">
                  <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider mb-8">
                    We Build The Future
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12">
                    A collective of Tehelka Open-Source Developers for all your Tech needs.
                  </p>
                  <div className="flex flex-wrap justify-center gap-12">
                    <a
                      href="https://github.com/GamyingOnline"
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-[#00FFFF]" size={22} />
                      <span>View GitHub</span>
                    </a>
                    <a
                      href="#about"
                      className="btn-primary"
                      onClick={(e) => scrollToSection(e, 'about')}
                    >
                      <IoSparkles className="text-[#FF3BFF]" size={22} />
                      <span>About Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="min-h-screen py-32 px-4 relative">
              <div className="container mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold tracking-wider mb-20 text-center">
                  About Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  <div className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6" style={{
                      background: 'linear-gradient(135deg, #FF3BFF, #5C24FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      The Rules Are Simple
                    </h3>
                    <ul className="space-y-4 text-lg text-gray-300">
                      <li className="flex items-start">
                        <span className="text-[#00FFFF]">▸</span>
                        <span className="ml-4">Disrupt everything</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF3BFF]">▸</span>
                        <span className="ml-4">Deploy like you mean it</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5C24FF]">▸</span>
                        <span className="ml-4">
                          Leave the world a little weirder than we found it
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6" style={{
                      background: 'linear-gradient(135deg, #FF3BFF, #5C24FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Join the Revolution
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      We&apos;re the rogue coders your project deserves—half caffeine,
                      half code, and 100% unbothered by convention. Need something
                      done? We&apos;ll do it. Need something undone? Even better.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="min-h-screen py-32 px-4 relative">
              <div className="container mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold tracking-wider mb-20 text-center">
                  Our Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {projects.map((project, index) => (
                    <div key={index} className={`animate-fadeIn delay-${index * 200}`}>
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="team" className="min-h-screen py-32 px-4 relative">
              <div className="container mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold tracking-wider mb-20 text-center">
                  Our Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {team.slice(0, 6).map((person, index) => (
                    <div key={index} className={`animate-fadeIn delay-${index * 100}`}>
                      <PersonCard {...person} />
                    </div>
                  ))}
                </div>
                <div className="mt-20 text-center glass-card p-16 max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    We&apos;re always looking for talented developers who are
                    passionate about open source and pushing the boundaries of
                    technology.
                  </p>
                  <a
                    href="mailto:gamying.online@iamdobhal.dev"
                    className="btn-primary inline-flex"
                  >
                    <span>Apply Now</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
