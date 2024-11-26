import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>

      <nav className="container mx-auto px-8 py-4 flex items-center justify-between relative">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity duration-200"
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
              className={`text-base tracking-wide transition-opacity duration-200 ${
                isActive(path)
                  ? "text-white font-medium"
                  : "text-white/85 hover:opacity-90"
              }`}
              aria-current={isActive(path) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
    </header>
  );
};

export default Header;
