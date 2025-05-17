import React from "react";
import { motion } from "framer-motion";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

const DetailPengumuman = ({ title, date, image, content, recentPosts }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-28 px-4 lg:px-8 pb-20 flex flex-col lg:flex-row gap-8">
        {/* Konten Utama */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-teal-800">
            {title}
          </h1>
          <p className="text-gray-500 italic mb-4 md:mb-6">{date}</p>
          <img
            src={image}
            alt={title}
            className="w-full h-60 md:h-96 object-cover rounded-xl shadow-md mb-4 md:mb-6"
          />
          <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
            {content}
          </p>
        </motion.div>

        {/* Sidebar Pengumuman Terbaru */}
        <div className="w-full lg:w-80">
          <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-2 md:mb-4">
            Pengumuman Terbaru
          </h2>
          <ul className="space-y-3 md:space-y-4">
            {recentPosts.map((post, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  to={post.link}
                  className="block bg-white rounded-lg shadow-md p-3 md:p-4 hover:bg-teal-100 transition-all"
                >
                  <h3 className="text-md md:text-lg font-semibold text-teal-700">
                    {post.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 italic">
                    {post.date}
                  </p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPengumuman;
