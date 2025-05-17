import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";

const EditArtikel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Gagal mengambil data artikel: " + error.message);
        setLoading(false);
        return;
      }
      if (!data) {
        setError("Artikel tidak ditemukan.");
        setLoading(false);
        return;
      }

      setTitle(data.title);
      setImage(data.image);
      setLink(data.link || "");
      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!title.trim()) {
      setError("Judul artikel wajib diisi.");
      return;
    }
    if (!image.trim()) {
      setError("URL gambar wajib diisi.");
      return;
    }
    if (!link.trim()) {
      setError("Link artikel wajib diisi.");
      return;
    }

    try {
      const { error } = await supabase
        .from("articles")
        .update({
          title: title.trim(),
          image: image.trim(),
          link: link.trim(),
        })
        .eq("id", id);

      if (error) throw error;

      setMessage("Artikel berhasil diperbarui!");
      setTimeout(() => {
        navigate("/admin/lihatartikel");
      }, 1500);
    } catch (err) {
      setError("Gagal memperbarui artikel: " + err.message);
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-600 mt-8">Memuat data artikel...</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-teal-700">
        Edit Artikel
      </h2>

      {error && (
        <div
          role="alert"
          className="bg-red-100 text-red-700 p-3 mb-6 rounded cursor-pointer"
          onClick={() => setError("")}
          title="Klik untuk hilangkan pesan error"
        >
          {error}
        </div>
      )}

      {message && (
        <div className="bg-green-100 text-green-700 p-3 mb-6 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="title" className="block mb-2 font-semibold">
            Judul Artikel
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="image" className="block mb-2 font-semibold">
            URL Gambar
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              setError("");
            }}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="link" className="block mb-2 font-semibold">
            Link Artikel
          </label>
          <input
            id="link"
            type="text"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
              setError("");
            }}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white py-3 px-6 rounded hover:bg-teal-700 transition"
        >
          Perbarui Artikel
        </button>
      </form>
    </div>
  );
};

export default EditArtikel;
