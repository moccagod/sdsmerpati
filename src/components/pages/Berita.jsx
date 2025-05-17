import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { supabase } from "../../utils/supabaseClient";

const Berita = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-28 px-4 pb-16">
        {/* Judul Halaman */}
        <h1 className="text-3xl font-bold text-teal-800 mb-8 text-center">
          Berita Terbaru
        </h1>

        {/* Daftar Artikel */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 block"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-teal-600 italic mb-2">
                  {new Date(article.created_at).toLocaleDateString()}
                </p>
              </div>
            </a>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Berita;
