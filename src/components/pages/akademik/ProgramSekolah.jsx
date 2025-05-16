import React from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Program Pendidikan Karakter",
    description:
      "Membentuk karakter siswa yang berakhlak mulia melalui berbagai kegiatan positif dan pembiasaan nilai-nilai agama dan moral.",
    image: "/sdsmerpati/images/hero1.jpg",
    link: "/programsekolah/programsekolah1",
  },
  {
    title: "Program Pembelajaran Aktif",
    description:
      "Menerapkan metode pembelajaran yang interaktif dan menyenangkan untuk meningkatkan partisipasi siswa.",
    image: "/sdsmerpati/images/hero2.jpg",
    link: "/programsekolah/programsekolah2",
  },
  {
    title: "Program Ekstrakurikuler",
    description:
      "Mengembangkan bakat dan minat siswa melalui berbagai kegiatan ekstrakurikuler yang kreatif dan inspiratif.",
    image: "/sdsmerpati/images/hero3.jpg",
    link: "/programsekolah/programsekolah3",
  },
  {
    title: "Program Pengembangan Teknologi",
    description:
      "Mempersiapkan siswa menghadapi era digital dengan pelatihan teknologi dan literasi digital.",
    image: "/sdsmerpati/images/hero1.jpg",
    link: "/programsekolah/programsekolah4",
  },
  {
    title: "Program Kesehatan dan Kebersihan",
    description:
      "Membudayakan pola hidup sehat melalui program kesehatan dan kebersihan yang terintegrasi.",
    image: "/sdsmerpati/images/hero2.jpg",
    link: "/programsekolah/programsekolah5",
  },
  {
    title: "Program Kesehatan dan Kebersihan",
    description:
      "Membudayakan pola hidup sehat melalui program kesehatan dan kebersihan yang terintegrasi.",
    image: "/sdsmerpati/images/hero3.jpg",
    link: "/programsekolah/programsekolah6",
  },
];

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const ProgramSekolah = () => {
  return (
    <div>
      <Navbar />
      <section className="pt-28 px-6 md:px-20 min-h-screen mb-10">
        <h1 className="text-4xl font-bold text-teal-700 text-center mb-12">
          Program Sekolah
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-teal-700 mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link
                  to={program.link}
                  className="text-teal-600 hover:text-teal-800 font-semibold"
                >
                  Selengkapnya &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProgramSekolah;
