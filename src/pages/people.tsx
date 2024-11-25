import React from 'react';
import Header from '../components/Header';
import PersonCard from '../components/PersonCard';

const People = () => {
  const team = [
    {
      name: "Ayam Dobhal",
      role: "Founder & Lead Developer",
      image: "/devs/ayam.jpg",
      github: "https://github.com/ayamdobhal",
      linkedin: "https://linkedin.com/in/ayamdobhal",
      portfolio: "https://iamdobhal.dev",
    },
    {
      name: "Neeraj Godiyal",
      role: "Creative Frontend Specialist / Co-Founder",
      image: "/devs/koro.png",
      github: "https://github.com/NeerajGodiyal",
      linkedin: "https://linkedin.com/in/neerajgodiyal",
      portfolio: "https://neerajgodiyal.me",
    },
    {
      name: "Sumit Kumar",
      role: "Lead Developer / CTO",
      image: "/devs/sumit.jpeg",
      github: "https://github.com/imsk17",
      linkedin: "https://linkedin.com/in/imsk17",
      portfolio: "https://imsk17.org",
    },
    {
      name: "Bhanu Pratap Singh",
      role: "Developer & Designer",
      image: "/devs/bhanu.jpeg",
      github: "https://github.com/codeptor",
      linkedin: "https://linkedin.com/in/bhanu911",
      portfolio: "https://bhanueso.me",
    },
    {
      name: "Chindi Rupansh Sekar",
      role: "Everything Developer",
      image: "/devs/rupansh.jpeg",
      github: "https://github.com/rupansh",
      linkedin: "https://linkedin.com/in/rupansh-s",
      portfolio: "https://rupansh.github.io",
    },
    {
      name: "Aman Goyal",
      role: "AI Engineer & DevOps",
      image: "/devs/aman.jpeg",
      github: "https://github.com/agoyel25",
      linkedin: "https://linkedin.com/in/aman-goyal-a48b0628a",
      portfolio: "https://agoyel25.github.io",
    },
    {
      name: "Vibhu Prasad",
      role: "Chief Data Officer",
      image: "/devs/vibhu.png",
      // github: "https://github.com/agoyel25",
      // linkedin: "https://linkedin.com/in/aman-goyal-a48b0628a",
      // portfolio: "https://agoyel25.github.io",
    },
    {
      name: "Kunal Singh",
      role: "Chief Human Resources Officer",
      image: "/devs/kunalsingh.jpg",
      github: "https://github.com/kunxlfr",
      linkedin: "https://www.linkedin.com/in/kunalsingh16",
      portfolio: "https://kunalsingh.dev",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-black text-white pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-extrabold text-gradient tracking-wider animate-glitter mb-12">
            Our Team
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, index) => (
              <PersonCard
                key={index}
                name={person.name}
                role={person.role}
                image={person.image}
                github={person.github}
                linkedin={person.linkedin}
                portfolio={person.portfolio}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              We&apos;re always looking for talented developers who are passionate about open source
              and pushing the boundaries of technology.
            </p>
            <a
              href="mailto:gamying.online@iamdobhal.dev"
              className="inline-block bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] text-black font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform"
            >
              Apply Now
            </a>

          </div>
        </div>
      </main>
    </>
  );
};

export default People;
