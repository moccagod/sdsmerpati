import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DetailProgramSekolah = ({ title, image, content, relatedPrograms }) => {
  return (
    <>
      <Navbar />
      <div className="pt-28 bg-white min-h-screen px-4 md:px-20 mb-10">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Content */}
          <motion.div
            className="md:col-span-2 bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-teal-700 mb-6">{title}</h1>
            <motion.img
              src={image}
              alt={title}
              className="w-full h-96 object-cover rounded-lg mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="text-gray-700 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {content}
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            className="bg-white rounded-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
              Program Sekolah Lainnya
            </h2>
            <ul className="space-y-4">
              {relatedPrograms.map((program, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={program.link}
                    className="block bg-gray-100 hover:bg-gray-200 transition-colors p-4 rounded-lg shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {program.title}
                    </h3>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProgramSekolah;
