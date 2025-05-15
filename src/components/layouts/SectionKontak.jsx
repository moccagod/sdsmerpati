import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionKontak = () => {
  return (
    <section className="bg-teal-600 py-16 px-6 md:px-20 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
        <p className="text-lg mb-8">
          Ingin tahu lebih banyak tentang SD Merpati? Kami siap membantu.
          Hubungi kami untuk informasi pendaftaran, kunjungan, atau pertanyaan
          lainnya.
        </p>

        <Link
          to="/kontak"
          className="inline-block bg-white text-teal-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
        >
          Halaman Kontak
        </Link>
      </motion.div>
    </section>
  );
};

export default SectionKontak;
