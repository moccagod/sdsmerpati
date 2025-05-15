import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const guruData = [
  {
    nama: "Finna Sharfina Khadijah, S. Pd.",
    jabatan: "Kepala Sekolah",
    foto: "/sdsmerpati/images/gurucwe.png",
  },
  {
    nama: "Syahadati Nur Maghfiroh",
    jabatan: "Guru Kelas 1",
    foto: "/sdsmerpati/images/gurucwe.png",
  },
  {
    nama: "Diah Widiastuti",
    jabatan: "Guru Kelas 2",
    foto: "/sdsmerpati/images/gurucwe.png",
  },
  {
    nama: "Putri Hera Diani",
    jabatan: "Guru Kelas 3",
    foto: "/sdsmerpati/images/gurucwe.png",
  },
  {
    nama: "Aulia Sofiatunnisa",
    jabatan: "Guru Kelas 4",
    foto: "/sdsmerpati/images/gurucwe.png",
  },
  {
    nama: "Mega Nur Julia",
    jabatan: "Guru Kelas 5",
    foto: "/sdsmerpati/images/gurucwe.png",
  },
  {
    nama: "Fa'izah Nur Syafitri",
    jabatan: "Guru Kelas 6",
    foto: "/sdsmerpati/images/gurucwe.png",
  },
  {
    nama: "Azmi Nailal Hadi",
    jabatan: "Operator",
    foto: "/sdsmerpati/images/gurucwo.png",
  },
];

const ProfilGuru = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header: Judul + Button (Desktop) */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4 md:mb-0">
              Guru & Tenaga Kependidikan
            </h2>
            <div className="hidden md:block">
              <Link
                to="/gurudantendik"
                className="bg-teal-600 hover:bg-teal-700 transition-colors text-white font-semibold px-6 py-3 rounded-full shadow"
              >
                Lihat Semua
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Card */}
        <motion.div
          className="flex overflow-x-auto space-x-4 pb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {guruData.map((guru, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-xl shadow-md w-64 sm:w-56 md:w-72"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <img
                  src={guru.foto}
                  alt={guru.nama}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {guru.nama}
                </h3>
                <p className="text-sm text-gray-600">{guru.jabatan}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tombol untuk Mobile */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/gurudantendik"
            className="bg-teal-600 hover:bg-teal-700 transition-colors text-white font-semibold px-6 py-3 rounded-full shadow"
          >
            Lihat Semua
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfilGuru;
