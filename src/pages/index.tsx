import React from 'react';
import { FaGithub, FaCode, FaRocket, FaLaptopCode, FaBrain } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { HiCube } from "react-icons/hi";
import Header from "../components/Header";
import Background from "../components/Background";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Background />
      <main className="min-h-screen w-full text-white relative overflow-hidden">
        <div className="relative z-10">
          <section className="min-h-screen flex items-center justify-center relative">
            <div className="text-center px-4 z-10 max-w-6xl">
              <div className="animate-fadeIn">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider mb-8">
                  We Build The Future
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12">
                  A collective of Tehelka Open-Source Developers for all your Tech needs.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <a
                    href="https://github.com/GamyingOnline"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-[#00FFFF]" size={24} />
                    <span>View Our Work</span>
                  </a>
                  <a
                    href="/people"
                    className="btn-primary"
                  >
                    <IoSparkles className="text-[#FF3BFF]" size={24} />
                    <span>Meet The Team</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 px-4 relative">
            <div className="container mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
                What We Do
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="glass-card p-10 animate-fadeIn">
                  <FaCode size={48} className="text-[#FF3BFF] mb-8" />
                  <h3 className="text-2xl font-bold mb-4">Open Source Development</h3>
                  <p className="text-gray-300 mb-6">
                    We contribute to and maintain various open source projects, pushing the boundaries of what's possible.
                  </p>
                  <a href="/projects" className="text-[#00FFFF] hover:underline flex items-center gap-2">
                    Explore Projects <HiCube className="inline" />
                  </a>
                </div>
                <div className="glass-card p-10 animate-fadeIn delay-200">
                  <FaBrain size={48} className="text-[#00FFFF] mb-8" />
                  <h3 className="text-2xl font-bold mb-4">Tech Innovation</h3>
                  <p className="text-gray-300 mb-6">
                    From AI to blockchain, we're always exploring new technologies and creating cutting-edge solutions.
                  </p>
                  <a href="/innovations" className="text-[#FF3BFF] hover:underline flex items-center gap-2">
                    See Innovations <HiCube className="inline" />
                  </a>
                </div>
                <div className="glass-card p-10 animate-fadeIn delay-400">
                  <FaLaptopCode size={48} className="text-[#5C24FF] mb-8" />
                  <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
                  <p className="text-gray-300 mb-6">
                    We build tailored solutions for complex problems, turning your tech dreams into reality.
                  </p>
                  <a href="/solutions" className="text-[#00FFFF] hover:underline flex items-center gap-2">
                    View Solutions <HiCube className="inline" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 px-4">
            <div className="glass-card mx-auto max-w-4xl p-16 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Join forces with our team of tech enthusiasts and let's create something extraordinary together.
                </p>
                <a
                  href="mailto:gamying.online@iamdobhal.dev"
                  className="btn-primary inline-flex"
                >
                  <span>Get in Touch</span>
                  <FaRocket className="ml-2" />
                </a>
              </div>
            </div>
          </section>

          <footer className="py-8 text-center text-gray-400 text-sm">
            <div className="container mx-auto">
              <p>&copy; {new Date().getFullYear()} GamyingOnline. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Index;