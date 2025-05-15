import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

const guruData = [
  {
    nama: "Finna Sharfina Khadijah, S. Pd.",
    jabatan: "Kepala Sekolah",
    foto: "/sdsmerpati/images/gurucwe.png",
    wa: "https://wa.me/6281234567890",
    ig: "https://instagram.com/finna.sharfina",
  },
  {
    nama: "Syahadati Nur Maghfiroh",
    jabatan: "Guru Kelas 1",
    foto: "/sdsmerpati/images/gurucwe.png",
    wa: "https://wa.me/6281234567891",
    ig: "https://instagram.com/syahadati.maghfiroh",
  },
  {
    nama: "Diah Widiastuti",
    jabatan: "Guru Kelas 2",
    foto: "/sdsmerpati/images/gurucwe.png",
    wa: "https://wa.me/6281234567892",
    ig: "https://instagram.com/diah.widiastuti",
  },
  {
    nama: "Putri Hera Diani",
    jabatan: "Guru Kelas 3",
    foto: "/sdsmerpati/images/gurucwe.png",
    wa: "https://wa.me/6281234567893",
    ig: "https://instagram.com/putri.hera",
  },
  {
    nama: "Aulia Sofiatunnisa",
    jabatan: "Guru Kelas 4",
    foto: "/sdsmerpati/images/gurucwe.png",
    wa: "https://wa.me/6281234567894",
    ig: "https://instagram.com/aulia.sofia",
  },
  {
    nama: "Mega Nur Julia",
    jabatan: "Guru Kelas 5",
    foto: "/sdsmerpati/images/gurucwe.png",
    wa: "https://wa.me/6281234567895",
    ig: "https://instagram.com/mega.julia",
  },
  {
    nama: "Fa'izah Nur Syafitri",
    jabatan: "Guru Kelas 6",
    foto: "/sdsmerpati/images/gurucwe.png",
    wa: "https://wa.me/6281234567896",
    ig: "https://instagram.com/faizah.syafitri",
  },
  {
    nama: "Azmi Nailal Hadi",
    jabatan: "Operator",
    foto: "/sdsmerpati/images/gurucwo.png",
    wa: "https://wa.me/6281234567897",
    ig: "https://instagram.com/azminailalhadi",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const GuruDanTendik = () => {
  return (
    <div>
      <Navbar />
      <motion.main
        className="max-w-7xl mx-auto px-6 py-12 pt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-teal-700 text-center mb-12">
          Guru & Tenaga Pendidikan
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {guruData.map((guru, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-[1.05] transition-transform duration-300"
              variants={cardVariants}
            >
              <img
                src={guru.foto}
                alt={guru.nama}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-teal-400"
              />
              <h3 className="text-xl font-semibold text-teal-700">
                {guru.nama}
              </h3>
              <p className="text-gray-600 mt-1 mb-3">{guru.jabatan}</p>

              <div className="flex space-x-4 mt-auto">
                <a
                  href={guru.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 text-xl hover:text-green-600"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={guru.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-xl hover:text-pink-600"
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default GuruDanTendik;
