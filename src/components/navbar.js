import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-lime-400 hover:text-lime-300 transition">
          🎬 Movies
        </Link>
        <nav>
          <ul className="flex items-center gap-6 text-white font-medium">
            <li>
              <Link href="/" className="hover:text-lime-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/genres" className="hover:text-lime-400 transition">
                Géneros
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
