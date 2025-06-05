import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-lime-600 text-white shadow-md">
      <Link href="/" className="text-xl font-bold">🎬 Movies</Link>
      <nav>
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/genres">Géneros</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;