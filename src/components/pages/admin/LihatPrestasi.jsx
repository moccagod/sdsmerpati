import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { Link } from "react-router-dom";

const LihatPrestasi = () => {
  const [prestasiList, setPrestasiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data prestasi dari Supabase
  const fetchPrestasi = async () => {
    try {
      const { data, error } = await supabase
        .from("prestasi")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPrestasiList(data);
    } catch (err) {
      setError("Gagal mengambil data prestasi.");
    } finally {
      setLoading(false);
    }
  };

  // Hapus prestasi
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus prestasi ini?"
    );
    if (!confirmDelete) return;

    try {
      const { error } = await supabase.from("prestasi").delete().eq("id", id);
      if (error) throw error;

      // Hapus data dari state setelah berhasil dihapus
      setPrestasiList((prev) => prev.filter((item) => item.id !== id));
      alert("Prestasi berhasil dihapus.");
    } catch (err) {
      alert("Gagal menghapus prestasi. Silakan coba lagi.");
      console.error("Error deleting prestasi:", err);
    }
  };

  useEffect(() => {
    fetchPrestasi();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-6 text-teal-700">Daftar Prestasi</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-teal-100">
            <th className="border border-gray-300 px-4 py-2">Judul</th>
            <th className="border border-gray-300 px-4 py-2">Tahun</th>
            <th className="border border-gray-300 px-4 py-2">Foto</th>
            <th className="border border-gray-300 px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {prestasiList.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.judul}</td>
              <td className="border border-gray-300 px-4 py-2">{item.tahun}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.foto_url ? (
                  <img
                    src={item.foto_url}
                    alt={item.judul}
                    className="w-20 h-16 object-cover rounded"
                  />
                ) : (
                  "-"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <Link
                  to={`/admin/editprestasi/${item.id}`}
                  className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-white"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="cursor-pointer bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LihatPrestasi;
