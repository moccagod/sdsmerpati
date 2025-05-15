import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    judul: "Juara 1 Lomba Matematika Tingkat Kota",
    tahun: "2024",
    deskripsi:
      "Siswa SD Merpati berhasil meraih juara 1 dalam lomba matematika antar sekolah se-kota.",
    foto: "/sdsmerpati/images/hero1.jpg",
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
  // Tambah lainnya jika perlu
];

const PrestasiSekolah = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">
          Prestasi Sekolah
        </h2>

        <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
          {prestasiData.map((prestasi, index) => (
            <div
              key={index}
              className="w-60 h-64 bg-teal-50 rounded-xl shadow-md flex-shrink-0"
            >
              <img
                src={prestasi.foto}
                alt={prestasi.judul}
                className="w-full h-32 object-cover rounded-t-xl"
              />
              <div className="p-3 flex flex-col">
                <h3 className="text-sm font-semibold text-teal-800 mb-1 truncate">
                  {prestasi.judul}
                </h3>
                <p className="text-xs text-teal-600 italic">{prestasi.tahun}</p>
                <p className="text-xs text-gray-700 mt-1 line-clamp-3">
                  {prestasi.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/prestasi"
            className="bg-teal-600 hover:bg-teal-700 transition-colors text-white font-semibold px-6 py-3 rounded-full shadow"
          >
            Lihat Semua
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default PrestasiSekolah;
