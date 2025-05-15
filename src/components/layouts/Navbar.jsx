import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileDropdownRef = useRef(null);
  const academicDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdown &&
        !profileDropdownRef.current?.contains(event.target) &&
        !academicDropdownRef.current?.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="z-50">
      <nav className="fixed top-0 left-0 w-full bg-white z-[999] text-gray px-8 py-4 flex justify-between items-center shadow-lg">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="./images/logo-merpati.png"
            alt="Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold hidden md:inline">
            SDS MERPATI
          </span>
        </Link>

        <button
          className="md:hidden text-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} strokeWidth={2.5} />
          ) : (
            <Menu size={28} strokeWidth={2.5} />
          )}
        </button>

        <div
          className={`md:flex gap-8 ${
            isMobileMenuOpen ? "flex flex-col" : "hidden md:flex"
          } absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-8 md:px-0 py-4 md:py-0 shadow-lg md:shadow-none`}
        >
          <Link to="/" className="text-gray-800 hover:text-gray-500">
            Beranda
          </Link>

          {/* Profile Dropdown */}
          <div
            className="relative md:static"
            ref={profileDropdownRef}
            onMouseEnter={() => setOpenDropdown("profile")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center gap-1 text-gray-800 hover:text-gray-500 cursor-pointer md:relative"
              onClick={() => handleDropdownToggle("profile")}
            >
              Profile{" "}
              {openDropdown === "profile" ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            <AnimatePresence>
              {openDropdown === "profile" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-gray-200 shadow-lg rounded-lg py-2 mt-2 w-full md:w-48 z-20 relative md:absolute"
                >
                  <Link
                    to="/sambutankepalasekolah"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sambutan Kepala Sekolah
                  </Link>
                  <Link
                    to="/visidanmisi"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Visi & Misi
                  </Link>
                  <Link
                    to="/gurudantendik"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Guru & Tendik
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Akademik Dropdown */}
          <div
            className="relative md:static"
            ref={academicDropdownRef}
            onMouseEnter={() => setOpenDropdown("academic")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center gap-1 text-gray-800 hover:text-gray-500 cursor-pointer md:relative"
              onClick={() => handleDropdownToggle("academic")}
            >
              Akademik{" "}
              {openDropdown === "academic" ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            <AnimatePresence>
              {openDropdown === "academic" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-gray-200 shadow-lg rounded-lg py-2 mt-2 w-full md:w-48 z-20 relative md:absolute"
                >
                  <Link
                    to="/programsekolah"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Program Sekolah
                  </Link>
                  <Link
                    to="/kurikulum"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Kurikulum
                  </Link>
                  <Link
                    to="/ekstrakurikuler"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Ekstrakurikuler
                  </Link>
                  <Link
                    to="/kalenderakademik"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Kalender Akademik
                  </Link>
                  <Link
                    to="/prestasi"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Prestasi
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/berita" className="text-gray-800 hover:text-gray-500">
            Berita
          </Link>
          <Link to="/kontak" className="text-gray-800 hover:text-gray-500">
            Kontak
          </Link>
          <Link
            to="/ppdb"
            className="bg-teal-500 text-white px-4 py-3 font-extrabold mb-4 rounded-full shadow-lg hover:bg-teal-600 transition-all md:hidden text-center"
          >
            PPDB
          </Link>
        </div>
        <Link
          to="/ppdb"
          className="bg-teal-500 text-white px-6 py-2 rounded-full shadow-sm hover:bg-teal-600 transition-all hidden md:inline-block font-extrabold"
        >
          PPDB
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
