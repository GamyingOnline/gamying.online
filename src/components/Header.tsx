import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF3BFF]/20 via-[#ECBFBF]/20 to-[#5C24FF]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

      <nav className="container mx-auto px-4 py-5 flex items-center justify-between relative">
        <Link
          href="/"
          className="text-2xl font-bold text-bold text-gradient hover:scale-105 transition-transform"
        >
          GamyingOnline
        </Link>

        <div className="flex gap-8">
          {[
            { path: "/about", label: "About" },
            { path: "/people", label: "People" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`text-lg relative group ${
                isActive(path)
                  ? "text-gradient font-bold animate-glitter"
                  : "text-white font-bold hover:text-gradient hover:animate-glitter"
              }`}
              aria-current={isActive(path) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-[#FF3BFF]/20 via-[#ECBFBF]/40 to-[#5C24FF]/20"></div>
    </header>
  );
};

export default Header;
