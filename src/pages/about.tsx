import Header from "../components/Header";
import Background from "../components/Background";
import '../styles/components.css';
import '../styles/animations.css';

const About = () => {
  return (
    <>
      <Header />
      <Background />
      <main className="min-h-screen w-full text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-24 pb-16">
            <div className="animate-fadeIn">
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-8">
                About Us
              </h1>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6" style={{
                  background: 'linear-gradient(135deg, #FF3BFF, #5C24FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Welcome to the Chaos</h2>
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
                    done? We&apos;ll do it. Need something undone? Even better. Join
                    the revolution. Or don&apos;t. Either way, we&apos;re coming for
                    your tech stack. 💀
                  </p>
                  <a
                    href="https://github.com/GamyingOnline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    <span>Join Our GitHub</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
