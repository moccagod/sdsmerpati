import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sambutan = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-30">
      {/* Foto di kiri dengan animasi */}
      <motion.div
        className="flex-shrink-0 w-full md:w-1/3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/sdsmerpati/images/kepsek.png"
          alt="Kepala Sekolah SD Merpati"
          className="rounded-lg w-full object-cover"
          style={{ maxHeight: "400px" }}
        />
      </motion.div>

      {/* Sambutan & button di kanan dengan animasi */}
      <motion.div
        className="w-full md:w-2/3 text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-700">
          Sambutan Kepala Sekolah
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Selamat datang di SD Merpati, tempat kami berkomitmen mencetak
          generasi cerdas, kreatif, dan berakhlak mulia. Mari bergabung bersama
          kami untuk masa depan anak-anak yang cerah.
        </p>
        <Link
          to="/sambutankepalasekolah"
          className="inline-block bg-teal-600 hover:bg-teal-700 transition-colors text-white font-semibold px-8 py-3 rounded-full shadow-md"
        >
          Baca Sambutan Lengkap
        </Link>
      </motion.div>
    </section>
  );
};

export default Sambutan;
