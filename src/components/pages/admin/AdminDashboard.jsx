import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";

const AdminDashboard = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // misal <768px dianggap mobile
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menus = [
    { path: "/admin", label: "Dashboard Utama" },
    { path: "/admin/pengumuman", label: "Kelola Pengumuman" },
    { path: "/admin/pengaturan", label: "Pengaturan" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/sdsmerpati/"; // redirect setelah logout
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
          {menus.map(({ path, label }) => (
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
        </nav>

        <button
          onClick={handleLogout}
          className="cursor-pointer mt-auto mb-6 mx-4 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
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
