// src/pages/admin/AdminLogin.jsx
import React, { useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/admin");
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image Section */}
      <div
        className="flex-1 bg-cover bg-gray-100 bg-center hidden lg:flex items-center justify-center"
        style={{ backgroundImage: "url('/sdsmerpati/images/hero2.jpg')" }}
      >
        {/* Optional Overlay for Dim Effect */}
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <img className="w-52" src="/sdsmerpati/images/logo-merpati.png" alt="" />
        </div>
      </div>

      {/* Right Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex items-center justify-center p-8 bg-gray-100"
      >
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">
            Admin Login
          </h2>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-red-100 text-red-700 p-3 rounded mb-4"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="cursor-pointer w-full bg-teal-600 text-white py-3 rounded font-semibold shadow-lg hover:bg-teal-700 transition mb-4"
            >
              {loading ? "Memproses..." : "Login"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleBackToHome}
              className="cursor-pointer w-full bg-gray-400 text-white py-3 rounded font-semibold shadow-lg hover:bg-gray-500 transition"
            >
              Kembali ke Halaman Utama
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
