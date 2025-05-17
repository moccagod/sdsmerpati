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
        .limit(3); // Batasin 6 artikel biar nggak terlalu banyak

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
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-8 text-center">
          Berita & Artikel
        </h2>

        {/* Wrapper scroll horizontal */}
        <div className="overflow-x-auto no-scrollbar">
          {/* Flex container untuk center */}
          <div className="flex justify-center space-x-4 w-max mx-auto pb-4">
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-64 flex-shrink-0"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-32 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                </div>
              </a>
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
