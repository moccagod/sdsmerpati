import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import { motion } from "framer-motion";

const Pengumuman = () => {
  const [pengumumanData, setPengumumanData] = useState([]);

  useEffect(() => {
    const fetchPengumuman = async () => {
      const { data, error } = await supabase
        .from("pengumuman")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setPengumumanData(data);
    };

    fetchPengumuman();
  }, []);

  // Variants untuk animasi tiap item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-6 py-20 pt-28">
        <h1 className="text-4xl font-bold text-teal-700 mb-12 text-center">
          Pengumuman
        </h1>

        {pengumumanData.length === 0 ? (
          <p className="text-center text-gray-500 text-lg font-semibold">
            Belum ada pengumuman
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {pengumumanData.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <Link
                  to={`/pengumuman/${item.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 block"
                >
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.judul}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-xl">
                      No Image
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">
                      {item.judul}
                    </h3>
                    <p className="text-sm text-teal-600 italic mb-2">
                      {new Date(item.tanggal).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Pengumuman;
