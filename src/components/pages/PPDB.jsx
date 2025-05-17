import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const PPDB = () => {
  // Status Pendaftaran
  const [isOpen, setIsOpen] = useState(false);

  // Data Jadwal Penting
  const jadwalPenting = [
    { title: "Pembukaan Pendaftaran", date: "1 Juni 2025" },
    { title: "Penutupan Pendaftaran", date: "30 Juni 2025" },
    { title: "Tes Seleksi", date: "5 Juli 2025" },
    { title: "Pengumuman Hasil", date: "10 Juli 2025" },
    { title: "Daftar Ulang", date: "15 Juli - 20 Juli 2025" },
  ];

  // Alur Pendaftaran
  const alurPendaftaran = [
    {
      step: 1,
      title: "Membaca Persyaratan Pendaftaran",
      description:
        "Pastikan Anda membaca syarat dan ketentuan sebelum mendaftar.",
    },
    {
      step: 2,
      title: "Mengisi Formulir Pendaftaran Online",
      description: "Lengkapi data diri Anda pada formulir pendaftaran online.",
    },
    {
      step: 3,
      title: "Mengupload Dokumen yang Diperlukan",
      description: "Unggah dokumen seperti rapor, foto, dan akta kelahiran.",
    },
    {
      step: 4,
      title: "Mengikuti Tes Seleksi (jika ada)",
      description: "Ikuti tes seleksi sesuai jadwal yang telah ditentukan.",
    },
    {
      step: 5,
      title: "Mengecek Hasil Pengumuman",
      description: "Periksa hasil pengumuman pada tanggal yang ditentukan.",
    },
    {
      step: 6,
      title: "Melakukan Daftar Ulang",
      description:
        "Jika diterima, segera lakukan daftar ulang untuk memastikan tempat Anda.",
    },
  ];

  // Syarat Pendaftaran
  const syaratPendaftaran = [
    "Fotokopi Kartu Keluarga (KK)",
    "Fotokopi Akta Kelahiran",
    "Fotokopi Rapor Terakhir",
    "Pas Foto Berwarna 3x4 (2 lembar)",
    "Surat Keterangan Sehat dari Dokter",
    "Formulir Pendaftaran yang sudah diisi",
  ];

  const keunggulan = [
    {
      title: "Fasilitas Lengkap",
      description:
        "Ruang kelas nyaman, laboratorium lengkap, perpustakaan modern.",
      icon: "🎯",
    },
    {
      title: "Tenaga Pengajar Profesional",
      description: "Guru berpengalaman dan berdedikasi tinggi.",
      icon: "👩‍🏫",
    },
    {
      title: "Lingkungan Belajar Nyaman",
      description: "Suasana belajar yang mendukung perkembangan siswa.",
      icon: "🏫",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-16 px-4 md:px-10 lg:px-20 bg-gray-100 min-h-screen">
        {/* Tambahkan Logo PPDB di Sini */}
        <div className="flex justify-center mb-12">
          <img
            src="/sdsmerpati/images/ppdb.png" // Ganti dengan path logo kamu
            alt="Logo PPDB"
            className="w-96 h-auto"
          />
        </div>

        {/* Status Pendaftaran */}
        <div className="mb-10 p-6 rounded-lg shadow-md bg-white text-center">
          <h2 className="text-2xl font-bold text-teal-700 mb-2">
            Status Pendaftaran
          </h2>
          <p
            className={`text-lg font-bold ${
              isOpen ? "text-green-600" : "text-red-600"
            }`}
          >
            {isOpen ? "Pendaftaran Dibuka" : "Pendaftaran Ditutup"}
          </p>
        </div>

        {/* Keunggulan SDS Merpati */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">
            Keunggulan SDS Merpati
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keunggulan.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alur Pendaftaran Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-teal-700 mb-8 text-center">
            Alur Pendaftaran
          </h2>
          <div className="relative border-l-4 border-teal-600 ml-6">
            {alurPendaftaran.map((item, index) => (
              <motion.div
                key={index}
                className="mb-12 ml-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="absolute -left-10 w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-teal-700">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Syarat Pendaftaran */}
        <div className="mb-10 p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Syarat Pendaftaran
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {syaratPendaftaran.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Jadwal Penting */}
        <div className="mb-10 p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Jadwal Penting
          </h2>
          <ul className="space-y-2 text-gray-700">
            {jadwalPenting.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.title}</span>
                <span className="font-semibold">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Link ke Formulir Pendaftaran */}
        {isOpen && (
          <div className="text-center">
            <Link
              to="/form-pendaftaran"
              className="bg-teal-700 text-white px-8 py-3 rounded-lg shadow-md hover:bg-teal-800 transition-all"
            >
              Daftar Sekarang
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PPDB;
