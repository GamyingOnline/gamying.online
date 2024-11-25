import React from 'react';
import Header from '../components/Header';
import PersonCard from '../components/PersonCard';

const People = () => {
  const team = [
    {
      name: "Ayam",
      role: "Founder & Lead Developer",
      image: "/devs/ayam.jpg",
      github: "https://github.com/ayamdobhal",
      linkedin: "https://linkedin.com/in/ayamdobhal",
      twitter: "https://twitter.com/ayamdobhal",
    },
    {
      name: "Sumit",
      role: "Lead Developer",
      image: "/team/placeholder.jpg",
      github: "https://github.com/imsk17",
      linkedin: "https://linkedin.com/in/imsk17",
      twitter: "https://twitter.com/imsk17_",
    },
    {
      name: "Bhanu",
      role: "Developer & Designer",
      image: "/team/placeholder.jpg",
      github: "https://github.com/codeptor",
      linkedin: "https://linkedin.com/in/bhanu911",
      twitter: "https://twitter.com/esotericfrr",
    },
    {
      name: "Neeraj",
      role: "Creative Frontend Specialist",
      image: "/team/placeholder.jpg",
      github: "https://github.com/NeerajGodiyal",
      linkedin: "https://linkedin.com/in/neerajgodiyal",
      twitter: "https://twitter.com/NeerajGodiyal",
    },
    {
      name: "Rupansh",
      role: "Everything Developer",
      image: "/team/placeholder.jpg",
      github: "https://github.com/rupansh",
      linkedin: "https://linkedin.com/in/rupansh-s",
      twitter: "https://twitter.com/rupansh",
    },
    {
      name: "Aman",
      role: "AI Engineer & DevOps",
      image: "/team/placeholder.jpg",
      github: "htttps://github.com/agoyel25",
      linkedin: "https://linkedin.com/in/aman-goyal-a48b0628a",
      twitter: "https://twitter.com/aman_goyal25",
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
                twitter={person.twitter}
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
