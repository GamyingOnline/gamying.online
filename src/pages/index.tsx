import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-7xl font-extrabold tracking-wide  animate-pulse">
          COMING SOON
        </h1>
        <p className="text-2xl mt-4 font-bold">
          <span className="text-white">Gamying.Online</span>
        </p>
        <p className="text-2xl mt-6 text-gray-300">
          A collective of <span className="font-semibold text-gradient1 animate-glitter">Tehelka Open-Source Developers</span> for all your tech needs.
        </p>
      </div>
      <div >
        <a
          href="https://github.com/GamyingOnline/gamying.online"         
        >
          <div className="px-6 py-12 rounded-full font-semibold transition duration-300 ease-in-out animate-bounce">

          <FaGithub size={64} />
          </div>
        </a>
      </div>
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Gamying.Online. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
