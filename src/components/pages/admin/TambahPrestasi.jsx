import React, { useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

const TambahPrestasi = () => {
  const [judul, setJudul] = useState("");
  const [tahun, setTahun] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase.from("prestasi").insert({
        judul,
        tahun,
        deskripsi,
        foto_url: fotoUrl,
        created_at: new Date().toISOString(),
      });

      if (error) throw error;

      setSuccess("Prestasi berhasil ditambahkan!");
      setJudul("");
      setTahun("");
      setDeskripsi("");
      setFotoUrl("");
    } catch (err) {
      setError("Gagal menambahkan prestasi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-teal-700">Tambah Prestasi</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Judul</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Tahun</label>
          <input
            type="text"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Deskripsi</label>
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">URL Foto</label>
          <input
            type="text"
            value={fotoUrl}
            onChange={(e) => setFotoUrl(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Masukkan URL gambar"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
        >
          {loading ? "Menyimpan..." : "Simpan Prestasi"}
        </button>
      </form>
    </div>
  );
};

export default TambahPrestasi;
