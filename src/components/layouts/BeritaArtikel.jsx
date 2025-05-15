import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Data berita
const beritaData = [
  {
    judul:
      "BPOM Catat 17 Kejadian Luar Biasa Kasus Keracunan MBG sejak Januari",
    tanggal: "15 Mei 2025",
    gambar:
      "https://statik.tempo.co/data/2025/04/22/id_1393419/1393419_720.jpg",
    linkSumber:
      "https://www.tempo.co/politik/bpom-catat-17-kejadian-luar-biasa-kasus-keracunan-mbg-sejak-januari-1444155",
  },
  {
    judul: "Tindakan BGN setelah Kasus Keracunan MBG Kembali Terjadi",
    tanggal: "15 Mei 2025",
    gambar:
      "https://statik.tempo.co/data/2025/04/24/id_1394012/1394012_720.jpg",
    linkSumber:
      "https://www.tempo.co/politik/tindakan-bgn-setelah-kasus-keracunan-mbg-kembali-terjadi-1444169",
  },
  {
    judul:
      "Skema Rekrutmen Guru Sekolah Rakyat Masih Dibahas Lintas Kementerian",
    tanggal: "15 Mei 2025",
    gambar:
      "https://statik.tempo.co/data/2025/03/20/id_1385903/1385903_720.jpg",
    linkSumber:
      "https://www.tempo.co/politik/skema-rekrutmen-guru-sekolah-rakyat-masih-dibahas-lintas-kementerian-1444126",
  },
];

// Cek apakah link eksternal
const isExternalLink = (url) => /^https?:\/\//.test(url);

const BeritaArtikel = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-8 text-center">
          Berita & Artikel
        </h2>

        {/* Wrapper scroll horizontal */}
        <div className="overflow-x-auto no-scrollbar">
          {/* Flex container untuk center */}
          <div className="flex justify-center space-x-4 w-max mx-auto pb-4">
            {beritaData.map((berita, index) => {
              const isExternal = isExternalLink(berita.linkSumber);

              const CardContent = (
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-64 flex-shrink-0">
                  <img
                    src={berita.gambar}
                    alt={berita.judul}
                    className="h-32 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-2">
                      {berita.judul}
                    </h3>
                    <p className="text-sm text-gray-600">{berita.tanggal}</p>
                  </div>
                </div>
              );

              return isExternal ? (
                <a
                  key={index}
                  href={berita.linkSumber}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CardContent}
                </a>
              ) : (
                <Link key={index} to={berita.linkSumber}>
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            to="/berita"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-colors text-sm"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default BeritaArtikel;
