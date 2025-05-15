import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white text-gray px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold">SDS MERPATI</div>
        <div className="flex gap-8">
          <Link to="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
        </div>
        <Link
          to="/ppdb"
          className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-teal-600 transition-all"
        >
          PPDB
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
