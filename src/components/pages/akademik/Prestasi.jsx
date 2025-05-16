import React, { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { motion, AnimatePresence } from "framer-motion";

// Data prestasi sekolah (lengkap)
const prestasiData = [
  {
    judul: "Juara 1 Lomba Matematika Tingkat Kota",
    tahun: "2024",
    deskripsi:
      "Siswa SD Merpati berhasil meraih juara 1 dalam lomba matematika antar sekolah se-kota.",
    foto: "/sdsmerpati/images/hero1.jpg",
  },
  {
    judul: "Juara 1 Lomba Matematika Tingkat Kota",
    tahun: "2024",
    deskripsi:
      "Siswa SD Merpati berhasil meraih juara 1 dalam lomba matematika antar sekolah se-kota.",
    foto: "/sdsmerpati/images/hero2.jpg",
  },
  {
    judul: "Juara 1 Lomba Matematika Tingkat Kota",
    tahun: "2024",
    deskripsi:
      "Siswa SD Merpati berhasil meraih juara 1 dalam lomba matematika antar sekolah se-kota.",
    foto: "/sdsmerpati/images/hero3.jpg",
  },
  {
    judul: "Juara 2 Lomba Cipta Lagu Anak",
    tahun: "2023",
    deskripsi:
      "Tim paduan suara SD Merpati memenangkan juara 2 lomba cipta lagu anak tingkat provinsi.",
    foto: "/sdsmerpati/images/hero3.jpg",
  },
  {
    judul: "Penghargaan Sekolah Ramah Anak",
    tahun: "2022",
    deskripsi:
      "SD Merpati menerima penghargaan sebagai sekolah ramah anak dari Dinas Pendidikan.",
    foto: "/sdsmerpati/images/hero2.jpg",
  },
];

const Prestasi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Grid Prestasi */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-20 pt-28">
        <h2 className="text-4xl font-bold text-teal-700 mb-12 text-center">
          Semua Prestasi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {prestasiData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.foto}
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
      </main>

      <Footer />
    </div>
  );
};

export default Prestasi;
