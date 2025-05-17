import React, { useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

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
      // Login berhasil, redirect ke admin dashboard
      navigate("/admin");
    }
  };

  const handleBackToHome = () => {
    navigate("/"); // Kembali ke halaman utama
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4 text-teal-700 text-center">
          Login Admin
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-6 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
        >
          {loading ? "Memproses..." : "Login"}
        </button>

        {/* Tombol Kembali ke Halaman Utama */}
        <button
          type="button"
          onClick={handleBackToHome}
          className="cursor-pointer w-full mt-4 bg-gray-400 text-white py-2 rounded hover:bg-gray-500 transition"
        >
          Kembali ke Halaman Utama
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
