import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="fixed top-6 w-full z-50 flex justify-center">
      <nav className="relative px-2 py-2 rounded-full flex items-center gap-2 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300">
        <Link
          href="/"
          className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${
            isActive("/")
              ? "bg-white/10 text-white"
              : "text-white/85 hover:text-white hover:bg-white/5"
          }`}
        >
          GamyingOnline
        </Link>

        <div className="h-4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent mx-1" />

        <div className="flex">
          {[
            { path: "/about", label: "About" },
            { path: "/people", label: "People" },
            {path: "/projects", label: "Projects"},
          ].map(({ path, label }, index) => (
            <Link
              key={path}
              href={path}
              className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${
                isActive(path)
                  ? "bg-white/10 text-white"
                  : "text-white/85 hover:text-white hover:bg-white/5"
              }`}
              aria-current={isActive(path) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
    </header>
  );
};

export default Header;
