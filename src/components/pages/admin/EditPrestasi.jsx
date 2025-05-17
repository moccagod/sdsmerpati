import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";

const EditPrestasi = () => {
  const { id } = useParams(); // Dapatkan ID dari URL
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [tahun, setTahun] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Fetch data prestasi saat halaman dimuat
  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const { data, error } = await supabase
          .from("prestasi")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        // Isi form dengan data yang diambil
        setJudul(data.judul);
        setTahun(data.tahun);
        setDeskripsi(data.deskripsi);
        setFotoUrl(data.foto_url);
      } catch (err) {
        setError("Gagal mengambil data prestasi.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrestasi();
  }, [id]);

  // Simpan perubahan
  // Simpan perubahan
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Hanya kirim data yang diizinkan untuk di-update
      const updates = {
        judul,
        tahun,
        deskripsi,
        foto_url: fotoUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("prestasi")
        .update(updates)
        .eq("id", id);

      if (error) throw error;

      setSuccess("Prestasi berhasil diperbarui!");
      setTimeout(() => navigate("/admin/lihatprestasi"), 1500);
    } catch (err) {
      console.error("Error updating prestasi:", err);
      setError("Gagal memperbarui prestasi.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-teal-700">Edit Prestasi</h2>
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
          className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
        >
          {loading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </form>
    </div>
  );
};

export default EditPrestasi;
