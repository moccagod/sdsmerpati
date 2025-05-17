// src/pages/admin/pengumuman/EditPengumuman.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";

const EditPengumuman = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    judul: "",
    tanggal: "",
    deskripsi: "",
    konten: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPengumuman();
  }, []);

  const fetchPengumuman = async () => {
    const { data, error } = await supabase
      .from("pengumuman")
      .select("*")
      .eq("id", id)
      .single();
    if (error) console.error(error);
    else setForm(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase
        .from("pengumuman")
        .update(form)
        .eq("id", id);
      if (error) throw error;

      alert("Pengumuman berhasil diperbarui!");
      navigate("/admin/lihatpengumuman");
    } catch (error) {
      alert("Gagal memperbarui pengumuman: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">Edit Pengumuman</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
          value={form.deskripsi}
          onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
          required
          rows={2}
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          value={form.konten}
          onChange={(e) => setForm({ ...form, konten: e.target.value })}
          required
          rows={5}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
        >
          {loading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </form>
    </div>
  );
};

export default EditPengumuman;
