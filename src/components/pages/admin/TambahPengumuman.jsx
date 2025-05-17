// src/pages/admin/pengumuman/TambahPengumuman.jsx
import React, { useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

const TambahPengumuman = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    judul: "",
    tanggal: "",
    deskripsi: "",
    konten: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("pengumuman").insert([form]);
      if (error) throw error;

      alert("Pengumuman berhasil ditambahkan!");
      setForm({
        judul: "",
        tanggal: "",
        deskripsi: "",
        konten: "",
        image_url: "",
      });
      navigate("/admin/lihatpengumuman");
    } catch (error) {
      alert("Gagal menambah pengumuman: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">
        Tambah Pengumuman
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={form.judul}
          onChange={(e) => setForm({ ...form, judul: e.target.value })}
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="date"
          value={form.tanggal}
          onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          placeholder="Deskripsi singkat"
          value={form.deskripsi}
          onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
          required
          rows={2}
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          placeholder="Isi lengkap pengumuman"
          value={form.konten}
          onChange={(e) => setForm({ ...form, konten: e.target.value })}
          required
          rows={5}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="url"
          placeholder="URL gambar (opsional)"
          value={form.image_url}
          onChange={(e) => setForm({ ...form, image_url: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
        >
          {loading ? "Menyimpan..." : "Tambah Pengumuman"}
        </button>
      </form>
    </div>
  );
};

export default TambahPengumuman;
