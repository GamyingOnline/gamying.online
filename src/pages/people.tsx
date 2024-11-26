import Header from "../components/Header";
import Background from "../components/Background";
import PersonCard from "../components/PersonCard";
import '../styles/components.css';
import '../styles/animations.css';
import '../styles/utilities.css';

const People = () => {
  const team = [
    {
      name: "Ayam Dobhal",
      role: "Founder | Lead Developer",
      image: "/devs/ayam.jpg",
      github: "https://github.com/ayamdobhal",
      linkedin: "https://linkedin.com/in/ayamdobhal",
      portfolio: "https://iamdobhal.dev",
    },
    {
      name: "Neeraj Godiyal",
      role: "Co-Founder | Creative Frontend Specialist",
      image: "/devs/koro.png",
      github: "https://github.com/NeerajGodiyal",
      linkedin: "https://linkedin.com/in/neerajgodiyal",
      portfolio: "https://neerajgodiyal.me",
    },
    {
      name: "Sumit Kumar",
      role: "CTO | Lead Developer",
      image: "/devs/sumit.jpeg",
      github: "https://github.com/imsk17",
      linkedin: "https://linkedin.com/in/imsk17",
      portfolio: "https://imsk17.org",
    },
    {
      name: "Bhanu Pratap Singh",
      role: "Developer | Designer",
      image: "/devs/bhanu.jpeg",
      github: "https://github.com/codeptor",
      linkedin: "https://linkedin.com/in/bhanu911",
      portfolio: "https://bhanueso.me",
    },
    {
      name: "Aman Goyal",
      role: "AI Engineer | DevOps",
      image: "/devs/aman.jpeg",
      github: "https://github.com/agoyel25",
      linkedin: "https://linkedin.com/in/aman-goyal-a48b0628a",
      portfolio: "https://agoyel25.github.io",
    },
    {
      name: "Rupansh Sekar",
      role: "Everything Developer",
      image: "/devs/rupansh.jpeg",
      github: "https://github.com/rupansh",
      linkedin: "https://linkedin.com/in/rupansh-s",
      portfolio: "https://rupansh.github.io",
    },
    {
      name: "Vibhu Prasad",
      role: "Chief Data Officer",
      image: "/devs/vibhu.png",
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
      <Background />
      <main className="min-h-screen w-full text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-24 pb-16">
            <div className="animate-fadeIn">
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-8">
                Our Team
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((person, index) => (
                  <div key={index} className={`animate-fadeIn delay-${index * 100}`}>
                    <PersonCard
                      name={person.name}
                      role={person.role}
                      image={person.image}
                      github={person.github}
                      linkedin={person.linkedin}
                      portfolio={person.portfolio}
                    />
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
          </div>
        </div>
      </main>
    </>
  );
};

export default People;
