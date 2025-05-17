import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

const ArtikelList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError("Gagal mengambil data artikel: " + error.message);
      setArticles([]);
    } else {
      setArticles(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus artikel ini?")) return;
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus artikel: " + error.message);
    } else {
      fetchArticles();
    }
  };

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-teal-700">
        Daftar Artikel Saya
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">{error}</div>
      )}

      {articles.length === 0 ? (
        <p>Belum ada artikel.</p>
      ) : (
        <ul>
          {articles.map((item) => (
            <li
              key={item.id}
              className="bg-white rounded shadow p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-teal-700">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm break-all"
                >
                  {item.link}
                </a>
                <p className="text-sm italic text-gray-600 mt-1">
                  {new Date(item.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => navigate(`/admin/artikeledit/${item.id}`)}
                  className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="cursor-pointer bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArtikelList;
