import React from "react";
import { motion } from "framer-motion";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const VisiDanMisi = () => {
  return (
    <div>
      <Navbar />
      <motion.main
        className="max-w-4xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-teal-700 text-center mb-12">
          Visi & Misi Sekolah
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Visi Card */}
          <motion.div
            className="bg-gradient-to-tr from-teal-400 to-teal-600 text-white rounded-xl p-8 shadow-lg"
            variants={cardVariants}
            custom={0}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-white pb-2">
              Visi
            </h2>
            <p className="text-lg leading-relaxed">
              Menjadi sekolah dasar unggulan yang menghasilkan siswa
              berprestasi, berbudi pekerti luhur, dan siap bersaing di era
              globalisasi.
            </p>
          </motion.div>

          {/* Misi Card */}
          <motion.div
            className="bg-gradient-to-tr from-teal-200 to-teal-400 rounded-xl p-8 shadow-lg"
            variants={cardVariants}
            custom={1}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-teal-800 pb-2 text-teal-900">
              Misi
            </h2>
            <ul className="list-disc list-inside space-y-3 text-teal-900 text-lg">
              <li>
                Menyelenggarakan pembelajaran yang inovatif dan menyenangkan.
              </li>
              <li>Mengembangkan potensi akademik dan non-akademik siswa.</li>
              <li>
                Membentuk karakter siswa yang disiplin, jujur, dan bertanggung
                jawab.
              </li>
              <li>Meningkatkan profesionalisme guru dan staf.</li>
              <li>
                Membangun kerja sama yang erat dengan orang tua dan masyarakat.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default VisiDanMisi;
