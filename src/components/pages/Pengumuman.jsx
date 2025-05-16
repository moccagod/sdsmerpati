import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Data Pengumuman (Sementara, bisa diambil dari API nanti)
const pengumumanData = [
  {
    id: 1,
    judul: "Pengumuman Penerimaan Siswa Baru",
    tanggal: "15 Mei 2025",
    deskripsi:
      "Pendaftaran siswa baru untuk tahun ajaran 2025/2026 telah dibuka. Klik untuk detail.",
    link: "/pengumuman/pengumuman1",
  },
  {
    id: 2,
    judul: "Libur Hari Raya Idul Fitri",
    tanggal: "10 Mei 2025",
    deskripsi:
      "Sekolah akan diliburkan mulai tanggal 20 Mei hingga 30 Mei 2025. Klik untuk detail.",
    link: "/pengumuman/libur-idulfitri-2025",
  },
  {
    id: 3,
    judul: "Pengumuman Ujian Tengah Semester",
    tanggal: "1 Mei 2025",
    deskripsi:
      "Ujian Tengah Semester (UTS) akan dilaksanakan mulai tanggal 15 Mei 2025. Klik untuk detail.",
    link: "/pengumuman/uts-2025",
  },
];

const Pengumuman = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-6 py-20 pt-28">
        <h1 className="text-4xl font-bold text-teal-700 mb-12 text-center">
          Pengumuman
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pengumumanData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={item.link} className="block">
                <h3 className="text-lg font-semibold text-teal-800 mb-2">
                  {item.judul}
                </h3>
                <p className="text-sm text-teal-600 italic mb-2">
                  {item.tanggal}
                </p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {item.deskripsi}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pengumuman;
