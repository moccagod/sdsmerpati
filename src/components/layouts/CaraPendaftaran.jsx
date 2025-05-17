import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CaraPendaftaran = () => {
  return (
    <section className="bg-gray-800 py-16 px-6 md:px-20">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6">
          Cara Pendaftaran PPDB
        </h2>
        <p className="text-white max-w-3xl mx-auto mb-8 text-lg md:text-xl">
          Proses pendaftaran di SD Merpati sangat mudah dan cepat. Ikuti
          langkah-langkah yang kami sediakan untuk memastikan anak Anda
          mendapatkan tempat terbaik.
        </p>
        <Link
          to="/ppdb"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors"
        >
          Lihat Detail PPDB
        </Link>
      </motion.div>
    </section>
  );
};

export default CaraPendaftaran;
