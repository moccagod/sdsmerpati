import React, { useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

const KelolaArtikel = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const { error } = await supabase.from("articles").insert([
        {
          title,
          image,
          link,
        },
      ]);

      if (error) throw error;
      setMessage("Artikel berhasil ditambahkan!");
      setTitle("");
      setImage("");
      setLink("");
    } catch (err) {
      setError("Gagal menambahkan artikel: " + err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">Tambah Artikel</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
      )}
      {message && (
        <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="title">
            Judul Artikel
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold" htmlFor="image">
            URL Gambar
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold" htmlFor="link">
            Link Artikel Eksternal
          </label>
          <input
            id="link"
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
        >
          Simpan Artikel
        </button>
      </form>
    </div>
  );
};

export default KelolaArtikel;
