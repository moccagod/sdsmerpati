import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

const PengaturanPPDB = () => {
  const [ppdbStatus, setPpdbStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ppdbId, setPpdbId] = useState(null);

  useEffect(() => {
    const fetchPPDBStatus = async () => {
      try {
        const { data, error } = await supabase
          .from("ppdb_status")
          .select("id, status")
          .single();

        if (error) throw error;
        setPpdbStatus(data.status);
        setPpdbId(data.id); // Simpan ID untuk update nanti
      } catch (err) {
        setError("Gagal mengambil status PPDB.");
      } finally {
        setLoading(false);
      }
    };

    fetchPPDBStatus();
  }, []);

  const togglePPDBStatus = async () => {
    try {
      setLoading(true);
      if (!ppdbId) throw new Error("ID PPDB status tidak ditemukan.");

      const { error } = await supabase
        .from("ppdb_status")
        .update({ status: !ppdbStatus, updated_at: new Date().toISOString() })
        .eq("id", ppdbId);

      if (error) throw error;
      setPpdbStatus(!ppdbStatus);
    } catch (err) {
      setError("Gagal mengubah status PPDB.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold text-teal-700 mb-6">Pengaturan PPDB</h1>
      <div className="flex items-center justify-between mb-6">
        <span className="text-lg">Status Pendaftaran:</span>
        <span
          className={`px-4 py-2 rounded-full text-white text-lg font-semibold ${
            ppdbStatus ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {ppdbStatus ? "Dibuka" : "Ditutup"}
        </span>
      </div>
      <button
        onClick={togglePPDBStatus}
        className="cursor-pointer w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition-all"
        disabled={loading}
      >
        {ppdbStatus ? "Tutup Pendaftaran" : "Buka Pendaftaran"}
      </button>
    </div>
  );
};

export default PengaturanPPDB;
