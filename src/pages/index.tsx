import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Header from '../components/Header';

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-gradient tracking-wider animate-glitter mb-8 leading-tight">
            COMING SOON
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-12">
            <span className="text-white">Gamying.Online</span>
          </p>
          <div className="flex flex-col items-center gap-2 text-xl sm:text-2xl text-gray-300 font-medium tracking-wide">
            <p>A collective of</p>
            <p className="font-bold text-gradient animate-glitter">Tehelka Open-Source Developers</p>
            <p>for all your tech needs.</p>
          </div>
        </div>
        <div className="mt-16">
          <a
            href="https://github.com/GamyingOnline/gamying.online"
            className="transition-transform hover:scale-110 duration-300 ease-out block"
            target='_blank'
            rel="noopener noreferrer"
          >
            <div className="p-8 sm:p-10 md:p-12 rounded-full hover:bg-white/5 transition-colors">
              <FaGithub size={64} className="animate-bounce" />
            </div>
          </a>
        </div>
        <footer className="absolute bottom-6 text-gray-400 text-sm sm:text-base font-light tracking-wide">
          &copy; {new Date().getFullYear()} Gamying.Online. All rights reserved.
        </footer>
      </main>
    </>
  );
};

export default Index;
