import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>

      <nav className="container mx-auto px-6 py-5 flex items-center justify-between relative">
        <Link
          href="/"
          className="text-2xl font-bold text-white/90 hover:text-white transition-colors duration-300"
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
              className={`text-lg font-medium transition-colors duration-300 ${
                isActive(path)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
              aria-current={isActive(path) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 w-full h-[1px] bg-white/5"></div>
    </header>
  );
};

export default Header;
