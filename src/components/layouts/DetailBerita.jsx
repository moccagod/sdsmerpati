import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DetailBerita = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching article:", error);
      } else {
        setArticle(data);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-28 px-4 lg:px-8 pb-20">
        <h1 className="text-4xl font-bold mb-4 text-teal-800">
          {article.title}
        </h1>
        <p className="text-gray-500 italic mb-6">{article.created_at}</p>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-xl shadow-md mb-6"
        />
        <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
          {article.content}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailBerita;
