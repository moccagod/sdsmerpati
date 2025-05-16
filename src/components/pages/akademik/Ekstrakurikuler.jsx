import React from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { motion } from "framer-motion";

const ekstrakurikulerList = [
  {
    name: "Pramuka",
    description:
      "Membangun karakter, keterampilan, dan rasa cinta tanah air melalui berbagai kegiatan alam dan sosial.",
    image: "/sdsmerpati/images/hero1.jpg",
  },
  {
    name: "Pencak Silat",
    description:
      "Mengembangkan kemampuan bela diri serta kedisiplinan dan kepercayaan diri siswa.",
    image: "/sdsmerpati/images/hero2.jpg",
  },
  {
    name: "Tari Tradisional",
    description:
      "Mengenalkan budaya dan seni tari tradisional untuk memperkaya wawasan budaya siswa.",
    image: "/sdsmerpati/images/hero3.jpg",
  },
  {
    name: "Futsal",
    description:
      "Melatih fisik, kerja sama tim, dan sportivitas melalui olahraga futsal.",
    image: "/sdsmerpati/images/hero1.jpg",
  },
  {
    name: "Tahfidz Al-Quran",
    description:
      "Membimbing siswa dalam menghafal Al-Quran dan memperdalam pemahaman agama.",
    image: "/sdsmerpati/images/hero2.jpg",
  },
];

const Ekstrakurikuler = () => {
  return (
    <div>
      <Navbar />
      <section className="pt-28 px-6 md:px-20 min-h-screen mb-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-teal-700 mb-6">
            Ekstrakurikuler
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Berbagai kegiatan ekstrakurikuler untuk mengembangkan potensi dan
            minat siswa di luar akademik.
          </p>
        </motion.div>

        {/* List Ekstrakurikuler */}
        <div className="space-y-12">
          {ekstrakurikulerList.map((ekstra, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={ekstra.image}
                alt={ekstra.name}
                className="w-full md:w-1/3 h-60 object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
              />
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-semibold text-teal-700 mb-4">
                  {ekstra.name}
                </h2>
                <p className="text-gray-700">{ekstra.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Ekstrakurikuler;
