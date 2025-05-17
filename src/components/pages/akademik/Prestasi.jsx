import React, { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { supabase } from "../../../utils/supabaseClient";

const Prestasi = () => {
  const [prestasiData, setPrestasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data prestasi dari Supabase
  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const { data, error } = await supabase
          .from("prestasi")
          .select("*")
          .order("tahun", { ascending: false });

        if (error) throw error;

        setPrestasiData(data);
      } catch (err) {
        setError("Gagal mengambil data prestasi.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrestasi();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Grid Prestasi */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-20 pt-28">
        <h2 className="text-4xl font-bold text-teal-700 mb-12 text-center">
          Semua Prestasi
        </h2>

        {prestasiData.length === 0 ? (
          <p className="text-center text-gray-600">Belum ada data prestasi.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {prestasiData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.foto_url}
                  alt={item.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2 truncate">
                    {item.judul}
                  </h3>
                  <p className="text-sm text-teal-600 italic mb-2">
                    {item.tahun}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Prestasi;
