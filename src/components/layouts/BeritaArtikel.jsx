import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../../utils/supabaseClient";

const BeritaArtikel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3); // Hanya 3 artikel terbaru

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">
          Berita & Artikel
        </h2>

        {/* Wrapper scroll horizontal */}
        <div className="overflow-x-auto no-scrollbar">
          {/* Flex container untuk center */}
          <div className="flex md:flex-wrap md:justify-center gap-6 w-max mx-auto pb-4">
            {articles.map((article) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-60 h-64 md:w-80 md:h-80 bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 md:flex-shrink"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-32 md:h-40 w-full object-cover rounded-t-xl"
                />
                <div className="p-3 flex flex-col">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1 truncate">
                    {article.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 italic">
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                </div>
              </motion.a>
            ))}
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
