import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="border-b px-4 md:px-6 py-3 lg:px-12 flex justify-between items-center relative">
      {/* Logo */}
      <div className="logo flex flex-row items-center gap-1">
        <div className="icon flex items-center justify-center border rounded-md bg-violet-700 p-2">
          <GiGraduateCap className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-center mt-1 md:mt-0">CA Monk</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-10 font-medium text-gray-700">
        <Link to="#" className="hover:text-violet-700">
          Tools
        </Link>
        <Link to="#" className="hover:text-violet-700">
          Practice
        </Link>
        <Link to="#" className="hover:text-violet-700">
          Events
        </Link>
        <Link to="#" className="hover:text-violet-700">
          Job Board
        </Link>
        <Link to="#" className="hover:text-violet-700">
          Points
        </Link>
      </nav>

      {/* Desktop CTA */}
      <div className="hidden lg:flex">
        <button className="bg-violet-700 flex items-center gap-2 px-3 py-2 rounded-md text-white hover:bg-violet-800">
          <FaUserCircle className="w-5 h-5" />
          <span className="tracking-wide">Profile</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-violet-700 p-2 rounded-md bg-white shadow-md"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 p-6 lg:hidden z-50">
          <Link to="#" className="hover:text-violet-400">
            Tools
          </Link>
          <Link to="#" className="hover:text-violet-400">
            Practice
          </Link>
          <Link to="#" className="hover:text-violet-400">
            Events
          </Link>
          <Link to="#" className="hover:text-violet-400">
            Job Board
          </Link>
          <Link to="#" className="hover:text-violet-400">
            Points
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
