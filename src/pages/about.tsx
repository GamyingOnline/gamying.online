import Header from "../components/Header";
import '../styles/components.css';
import '../styles/animations.css';

const About = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-black text-white pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-extrabold text-gradient tracking-wider animate-glitter mb-12">
            About Us
          </h1>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Welcome to the Chaos</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Welcome to the chaotic lair of Tehelka Open-Source Developers,
              where tech dreams are born, hacked, and occasionally exploded. At
              GamyingOnline, we&apos;re not just building things; we&apos;re
              dismantling the status quo and duct-taping our own weird ideas
              back together. Our mission? To blur the line between brilliance
              and madness (but mostly madness).
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                The Rules Are Simple
              </h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="text-gradient">▸</span>
                  <span className="ml-4">Disrupt everything</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gradient">▸</span>
                  <span className="ml-4">Deploy like you mean it</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gradient">▸</span>
                  <span className="ml-4">
                    Leave the world a little weirder than we found it
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Join the Revolution
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We&apos;re the rogue coders your project deserves—half caffeine,
                half code, and 100% unbothered by convention. Need something
                done? We&apos;ll do it. Need something undone? Even better. Join
                the revolution. Or don&apos;t. Either way, we&apos;re coming for
                your tech stack. 💀
              </p>
              <a
                href="https://github.com/GamyingOnline"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#FF3BFF] hover:via-[#a04691] hover:to-[#5C24FF]"
              >
                Join Our GitHub
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
