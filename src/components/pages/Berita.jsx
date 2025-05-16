import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Dummy data berita dengan contoh link (internal/external)
const beritaData = [
  {
    id: 1,
    judul: "Peringatan Hari Pendidikan Nasional",
    tanggal: "15 Mei 2025",
    deskripsi:
      "Sekolah merayakan Hari Pendidikan Nasional dengan berbagai kegiatan edukatif.",
    gambar: "/sdsmerpati/images/hero1.jpg",
    link: "/berita/berita1", // internal link
  },
  {
    id: 2,
    judul: "Kegiatan Perkemahan Pramuka",
    tanggal: "10 Mei 2025",
    deskripsi:
      "Siswa mengikuti perkemahan pramuka untuk melatih kemandirian dan keterampilan bertahan hidup.",
    gambar: "/sdsmerpati/images/hero2.jpg",
    link: "https://externalwebsite.com/berita-perkemahan", // external link
  },
  {
    id: 3,
    judul: "Kegiatan Perkemahan Pramuka",
    tanggal: "10 Mei 2025",
    deskripsi:
      "Siswa mengikuti perkemahan pramuka untuk melatih kemandirian dan keterampilan bertahan hidup.",
    gambar: "/sdsmerpati/images/hero2.jpg",
    link: "https://externalwebsite.com/berita-perkemahan", // external link
  },
  {
    id: 4,
    judul: "Kegiatan Perkemahan Pramuka",
    tanggal: "10 Mei 2025",
    deskripsi:
      "Siswa mengikuti perkemahan pramuka untuk melatih kemandirian dan keterampilan bertahan hidup.",
    gambar: "/sdsmerpati/images/hero2.jpg",
    link: "https://externalwebsite.com/berita-perkemahan", // external link
  },
  // Tambah data lain...
];

const Berita = () => {
  const beritaTerbaru = [...beritaData].sort((a, b) => b.id - a.id).slice(0, 4);

  // Fungsi helper untuk menentukan pakai Link atau a
  const renderLink = (to, children) => {
    const isExternal = /^https?:\/\//.test(to);
    if (isExternal) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <Link to={to}>{children}</Link>;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto pt-28 px-4 pb-16">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Berita Terbaru
          </h2>
          <ul className="space-y-4">
            {beritaTerbaru.map((berita) => (
              <li
                key={berita.id}
                className="text-teal-700 font-medium hover:underline"
              >
                {renderLink(berita.link, berita.judul)}
              </li>
            ))}
          </ul>
        </aside>

        {/* Daftar Berita Utama */}
        <section className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
          {beritaData.map((berita) => (
            <motion.div
              key={berita.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {renderLink(
                berita.link,
                <>
                  <img
                    src={berita.gambar}
                    alt={berita.judul}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-teal-800 mb-2">
                      {berita.judul}
                    </h3>
                    <p className="text-sm text-teal-600 italic mb-2">
                      {berita.tanggal}
                    </p>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {berita.deskripsi}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Berita;
