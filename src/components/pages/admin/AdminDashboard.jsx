import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import '../../../assets/style/Admin.css'

const AdminDashboard = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menus = [
    { path: "/admin", label: "Dashboard" },
    { path: "/admin/pengaturanppdb", label: "PPDB" },
    {
      label: "Artikel",
      children: [
        { path: "/admin/tambahartikel", label: "Tambah Artikel" },
        { path: "/admin/lihatartikel", label: "Lihat Artikel" },
      ],
    },
    {
      label: "Pengumuman",
      children: [
        { path: "/admin/tambahpengumuman", label: "Tambah Pengumuman" },
        { path: "/admin/lihatpengumuman", label: "Lihat Pengumuman" },
      ],
    },
    {
      label: "Prestasi",
      children: [
        { path: "/admin/tambahprestasi", label: "Tambah Prestasi" },
        { path: "/admin/lihatprestasi", label: "Lihat Prestasi" },
      ],
    },
    { path: "/admin/pengaturan", label: "Pengaturan Akun" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/sdsmerpati/";
  };

  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 text-center">
        <p className="text-lg font-semibold text-red-600">
          Untuk membuka admin dashboard, harap gunakan perangkat desktop.
        </p>
      </div>
    );
  }

  const [openMenu, setOpenMenu] = useState("");

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-72 bg-white shadow-lg flex flex-col h-screen sticky top-0 p-6"
      >
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="/sdsmerpati/images/logo-merpati.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-teal-700">Admin Panel</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {menus.map((menu) =>
            menu.children ? (
              <div key={menu.label}>
                <button
                  onClick={() =>
                    setOpenMenu((prev) =>
                      prev === menu.label ? "" : menu.label
                    )
                  }
                  className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg flex justify-between items-center transition-all duration-300 ${
                    openMenu === menu.label
                      ? "bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {menu.label}
                  <motion.svg
                    initial={false}
                    animate={{
                      rotate: openMenu === menu.label ? 180 : 0,
                    }}
                    className="w-4 h-4 ml-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openMenu === menu.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-6 overflow-hidden"
                    >
                      {menu.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`cursor-pointer block px-4 py-2 rounded-lg transition-all duration-300 ${
                            location.pathname === child.path
                              ? "bg-teal-300 font-semibold text-teal-900"
                              : "text-teal-700 hover:bg-teal-100"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={menu.path}
                to={menu.path}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === menu.path
                    ? "bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {menu.label}
              </Link>
            )
          )}
        </nav>

        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-red-600 text-white py-3 rounded-lg transition-all duration-300 hover:bg-red-700 shadow-md"
        >
          Logout
        </motion.button>
      </motion.aside>

      {/* Content Area */}
      <main className="flex-1 p-8 overflow-auto max-h-screen">
        <Outlet />
      </main>

      {/* WhatsApp Help Button */}
      <a
        href="https://wa.me/6285811303841"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 flex items-center space-x-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl animate-bounce-slow"
      >
        <FaWhatsapp size={28} />
        <span className="font-semibold">Butuh Bantuan?</span>
      </a>
    </div>
  );
};

export default AdminDashboard;
