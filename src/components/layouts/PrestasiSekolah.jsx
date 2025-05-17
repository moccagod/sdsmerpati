import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const PrestasiSekolah = () => {
  const [prestasiData, setPrestasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data prestasi dari Supabase
  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const { data, error } = await supabase
          .from("prestasi")
          .select("*")
          .order("tahun", { ascending: false })
          .limit(3); // Hanya ambil 3 prestasi terbaru

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

  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">
          Prestasi Sekolah
        </h2>

        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : prestasiData.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            Belum ada data prestasi.
          </div>
        ) : (
          <div className="flex md:flex-wrap md:justify-center gap-6 overflow-x-auto no-scrollbar pb-4">
            {prestasiData.map((prestasi) => (
              <motion.div
                key={prestasi.id}
                className="w-60 h-64 md:w-80 md:h-80 bg-teal-50 rounded-xl shadow-md flex-shrink-0 md:flex-shrink"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={prestasi.foto_url}
                  alt={prestasi.judul}
                  className="w-full h-32 md:h-40 object-cover rounded-t-xl"
                />
                <div className="p-3 flex flex-col">
                  <h3 className="text-sm md:text-lg font-semibold text-teal-800 mb-1 truncate">
                    {prestasi.judul}
                  </h3>
                  <p className="text-xs md:text-sm text-teal-600 italic">
                    {prestasi.tahun}
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 mt-1 line-clamp-3">
                    {prestasi.deskripsi}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-6">
          <Link
            to="/prestasi"
            className="bg-teal-600 hover:bg-teal-700 transition-colors text-white font-semibold px-6 py-3 rounded-full shadow"
          >
            Lihat Semua
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default PrestasiSekolah;
