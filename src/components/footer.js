const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Movies App. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  