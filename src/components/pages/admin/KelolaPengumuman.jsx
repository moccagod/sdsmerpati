import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

const KelolaPengumuman = () => {
  const [pengumuman, setPengumuman] = useState([]);
  const [form, setForm] = useState({
    id: null,
    judul: "",
    tanggal: "",
    deskripsi: "",
    konten: "",
    image_url: "", // langsung URL eksternal
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchPengumuman();
  }, []);

  const fetchPengumuman = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("pengumuman")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setPengumuman(data);
    setLoading(false);
  };

  // Submit form tambah/update pengumuman
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // langsung pakai form.image_url dari input URL
      const payload = {
        judul: form.judul,
        tanggal: form.tanggal,
        deskripsi: form.deskripsi,
        konten: form.konten,
        image_url: form.image_url,
      };

      let result;
      if (editing) {
        result = await supabase
          .from("pengumuman")
          .update(payload)
          .eq("id", form.id);
      } else {
        result = await supabase.from("pengumuman").insert([payload]);
      }

      if (result.error) throw result.error;

      // Reset form dan fetch ulang data
      setForm({
        id: null,
        judul: "",
        tanggal: "",
        deskripsi: "",
        konten: "",
        image_url: "",
      });
      setEditing(false);
      fetchPengumuman();
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setForm({
      id: item.id,
      judul: item.judul,
      tanggal: item.tanggal,
      deskripsi: item.deskripsi,
      konten: item.konten,
      image_url: item.image_url,
    });
    setEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus pengumuman ini?")) {
      setLoading(true);
      await supabase.from("pengumuman").delete().eq("id", id);
      fetchPengumuman();
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">
        Admin Dashboard - Kelola Pengumuman
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editing ? "Edit" : "Tambah"} Pengumuman
        </h2>

        <input
          type="text"
          name="judul"
          placeholder="Judul"
          value={form.judul}
          onChange={(e) => setForm({ ...form, judul: e.target.value })}
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="date"
          name="tanggal"
          value={form.tanggal}
          onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          name="deskripsi"
          placeholder="Deskripsi singkat"
          value={form.deskripsi}
          onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
          required
          rows={2}
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          name="konten"
          placeholder="Isi lengkap pengumuman"
          value={form.konten}
          onChange={(e) => setForm({ ...form, konten: e.target.value })}
          required
          rows={5}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Ganti input file dengan input text untuk URL gambar eksternal */}
        <input
          type="url"
          name="image_url"
          placeholder="Masukkan URL gambar eksternal (contoh: Google Drive)"
          value={form.image_url}
          onChange={(e) => setForm({ ...form, image_url: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
        >
          {loading
            ? "Menyimpan..."
            : editing
            ? "Update Pengumuman"
            : "Tambah Pengumuman"}
        </button>

        {editing && (
          <button
            type="button"
            onClick={() => {
              setEditing(false);
              setForm({
                id: null,
                judul: "",
                tanggal: "",
                deskripsi: "",
                konten: "",
                image_url: "",
              });
            }}
            className="ml-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
          >
            Batal
          </button>
        )}
      </form>

      <ul>
        {pengumuman.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded shadow p-4 mb-3 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-teal-700">{item.judul}</h3>
              <p className="text-sm italic text-gray-600">
                {new Date(item.tanggal).toLocaleDateString()}
              </p>
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.judul}
                  className="w-32 h-20 object-cover rounded mt-2"
                />
              )}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KelolaPengumuman;
