// src/pages/admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";

const AdminDashboard = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [artikelDropdownOpen, setArtikelDropdownOpen] = useState(false);
  const [pengumumanDropdownOpen, setPengumumanDropdownOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cek apakah halaman sekarang termasuk halaman artikel terkait dropdown
  const isArtikelPage =
    location.pathname.startsWith("/admin/tambahartikel") ||
    location.pathname.startsWith("/admin/lihatartikel");

  const isPengumumanPage =
    location.pathname.startsWith("/admin/tambahpengumuman") ||
    location.pathname.startsWith("/admin/lihatpengumuman") ||
    location.pathname.startsWith("/admin/editpengumuman");

  // Dropdown terbuka kalau state open atau karena halaman aktif
  const dropdownOpenArtikel = artikelDropdownOpen || isArtikelPage;
  const dropdownOpenPengumuman = pengumumanDropdownOpen || isPengumumanPage;

  const menus = [
    { path: "/admin", label: "Dashboard Utama" },
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

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col h-screen sticky top-0">
        <div className="px-6 py-4 border-b flex items-center space-x-3">
          <img
            src="/sdsmerpati/images/logo-merpati.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-bold text-teal-700">Admin Panel</h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-auto">
          {/* Menu selain Pengaturan Akun */}
          {menus
            .filter(({ label }) => label !== "Pengaturan Akun")
            .map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 rounded hover:bg-teal-100 ${
                  location.pathname === path
                    ? "bg-teal-200 font-semibold text-teal-800"
                    : "text-teal-700"
                }`}
              >
                {label}
              </Link>
            ))}

          {/* Dropdown untuk Kelola Artikel */}
          <div
            onMouseEnter={() => {
              setArtikelDropdownOpen(true);
              setPengumumanDropdownOpen(false);
            }}
            onMouseLeave={() => setArtikelDropdownOpen(false)}
          >
            <button
              onClick={() => {
                const newState = !artikelDropdownOpen;
                setArtikelDropdownOpen(newState);
                if (newState) setPengumumanDropdownOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded hover:bg-teal-100 flex justify-between items-center ${
                isArtikelPage
                  ? "bg-teal-200 font-semibold text-teal-800"
                  : "text-teal-700"
              }`}
            >
              Kelola Artikel
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpenArtikel ? "rotate-180" : "rotate-0"
                }`}
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
              </svg>
            </button>
            {dropdownOpenArtikel && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/admin/tambahartikel"
                  className={`block px-4 py-2 rounded hover:bg-teal-100 ${
                    location.pathname === "/admin/tambahartikel"
                      ? "bg-teal-300 font-semibold text-teal-900"
                      : "text-teal-700"
                  }`}
                >
                  Tambah Artikel
                </Link>
                <Link
                  to="/admin/lihatartikel"
                  className={`block px-4 py-2 rounded hover:bg-teal-100 ${
                    location.pathname === "/admin/lihatartikel"
                      ? "bg-teal-300 font-semibold text-teal-900"
                      : "text-teal-700"
                  }`}
                >
                  Artikel Saya
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown untuk Kelola Pengumuman */}
          <div
            onMouseEnter={() => {
              setPengumumanDropdownOpen(true);
              setArtikelDropdownOpen(false);
            }}
            onMouseLeave={() => setPengumumanDropdownOpen(false)}
          >
            <button
              onClick={() => {
                const newState = !pengumumanDropdownOpen;
                setPengumumanDropdownOpen(newState);
                if (newState) setArtikelDropdownOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded hover:bg-teal-100 flex justify-between items-center ${
                isPengumumanPage
                  ? "bg-teal-200 font-semibold text-teal-800"
                  : "text-teal-700"
              }`}
            >
              Kelola Pengumuman
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpenPengumuman ? "rotate-180" : "rotate-0"
                }`}
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
              </svg>
            </button>
            {dropdownOpenPengumuman && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/admin/tambahpengumuman"
                  className={`block px-4 py-2 rounded hover:bg-teal-100 ${
                    location.pathname === "/admin/tambahpengumuman"
                      ? "bg-teal-300 font-semibold text-teal-900"
                      : "text-teal-700"
                  }`}
                >
                  Tambah Pengumuman
                </Link>
                <Link
                  to="/admin/lihatpengumuman"
                  className={`block px-4 py-2 rounded hover:bg-teal-100 ${
                    location.pathname === "/admin/lihatpengumuman"
                      ? "bg-teal-300 font-semibold text-teal-900"
                      : "text-teal-700"
                  }`}
                >
                  Lihat Pengumuman
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Menu Pengaturan Akun di bawah sebelum Logout */}
        <div className="px-4 mb-4">
          <Link
            to="/admin/pengaturan"
            className={`block px-4 py-2 rounded hover:bg-teal-100 ${
              location.pathname === "/admin/pengaturan"
                ? "bg-teal-200 font-semibold text-teal-800"
                : "text-teal-700"
            }`}
          >
            Pengaturan Akun
          </Link>
        </div>

        <button
          onClick={handleLogout}
          className="cursor-pointer mb-6 mx-4 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 overflow-auto max-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
