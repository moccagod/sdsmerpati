import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const SambutanKepalaSekolah = () => {
  return (
    <div>
      <Navbar />
      <motion.main
        className="max-w-5xl mx-auto px-6 py-12 pt-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Judul Halaman */}
        <motion.h1
          className="text-4xl font-bold text-teal-700 mb-8 text-center"
          variants={fadeInUp}
        >
          Sambutan Kepala Sekolah
        </motion.h1>

        {/* Foto Kepala Sekolah dan Sambutan */}
        <motion.section
          className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12"
          variants={fadeInUp}
          custom={0.2}
        >
          <motion.div
            className="flex-shrink-0 w-48 h-60 rounded-lg overflow-hidden shadow-lg"
            variants={fadeInUp}
            custom={0.4}
          >
            <img
              src="/sdsmerpati/images/kepsek.png"
              alt="Kepala Sekolah"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeInUp} custom={0.6}>
            <h2 className="text-2xl font-semibold mb-4 text-teal-800">
              Finna Sharfina Khadijah, M.Pd.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Assalamu’alaikum warahmatullahi wabarakatuh.
              <br />
              Selamat datang di website resmi SD Merpati. Kami bangga menjadi
              bagian dari pendidikan dasar yang berkualitas dan berorientasi
              pada pengembangan karakter anak didik. Melalui website ini, kami
              berharap dapat memberikan informasi yang lengkap dan transparan
              mengenai kegiatan, prestasi, dan program sekolah kami.
              <br />
              <br />
              SD Merpati berkomitmen menciptakan lingkungan belajar yang aman,
              nyaman, dan kondusif bagi seluruh siswa. Kami juga selalu berupaya
              meningkatkan kualitas guru dan sarana pendukung demi menghasilkan
              generasi masa depan yang cerdas, berakhlak mulia, serta siap
              menghadapi tantangan global.
              <br />
              <br />
              Terima kasih atas kunjungan Anda dan mari bersama-sama mendukung
              kemajuan pendidikan di SD Merpati.
              <br />
              <br />
              Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>
          </motion.div>
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default SambutanKepalaSekolah;
