import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

const MainDashboard = () => {
  const [displayName, setDisplayName] = useState("");
  const [jumlahPengumuman, setJumlahPengumuman] = useState(0);
  const [jumlahArtikel, setJumlahArtikel] = useState(0);
  const [jumlahPrestasi, setJumlahPrestasi] = useState(0);
  const [ppdbStatus, setPpdbStatus] = useState(null);

  useEffect(() => {
    // Ambil user display name
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setDisplayName(user.user_metadata?.display_name || "");
      }
    };

    // Ambil ringkasan data dan status PPDB
    const fetchData = async () => {
      // Ambil jumlah pengumuman
      const { count: countPengumuman, error: errorPengumuman } = await supabase
        .from("pengumuman")
        .select("*", { count: "exact", head: true });
      if (errorPengumuman)
        console.error("Error fetching pengumuman count:", errorPengumuman);

      // Ambil jumlah artikel
      const { count: countArtikel, error: errorArtikel } = await supabase
        .from("articles")
        .select("*", { count: "exact", head: true });
      if (errorArtikel)
        console.error("Error fetching artikel count:", errorArtikel);

      // Ambil jumlah prestasi
      const { count: countPrestasi, error: errorPrestasi } = await supabase
        .from("prestasi")
        .select("*", { count: "exact", head: true });
      if (errorPrestasi)
        console.error("Error fetching prestasi count:", errorPrestasi);

      // Ambil status PPDB terbaru (status boolean) dari tabel ppdb_status
      const { data: latestStatus, error: errorPpdbStatus } = await supabase
        .from("ppdb_status")
        .select("status")
        .order("updated_at", { ascending: false })
        .limit(1)
        .single();
      if (errorPpdbStatus) {
        console.error("Error fetching ppdb status:", errorPpdbStatus);
      }

      setJumlahPengumuman(countPengumuman || 0);
      setJumlahArtikel(countArtikel || 0);
      setJumlahPrestasi(countPrestasi || 0);
      setPpdbStatus(latestStatus?.status ?? null);
    };

    fetchUser();
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Dashboard Utama</h2>
      <p className="mb-6">
        Hai, <span className="font-semibold">{displayName || "Admin"}</span>,
        selamat datang di halaman dashboard admin.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-teal-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Jumlah Pengumuman</h3>
          <p className="text-3xl font-bold text-teal-700">{jumlahPengumuman}</p>
        </div>

        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Jumlah Artikel</h3>
          <p className="text-3xl font-bold text-blue-700">{jumlahArtikel}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Jumlah Prestasi</h3>
          <p className="text-3xl font-bold text-yellow-700">{jumlahPrestasi}</p>
        </div>

        <div
          className={`p-4 rounded shadow ${
            ppdbStatus === null
              ? "bg-red-100" // bisa pilih warna default saat loading
              : ppdbStatus
              ? "bg-green-100"
              : "bg-red-100"
          }`}
        >
          <h3 className="text-lg font-semibold mb-2">Status PPDB</h3>
          {ppdbStatus === null ? (
            <p className="text-gray-500">Memuat status PPDB...</p>
          ) : (
            <p
              className={`text-2xl font-bold ${
                ppdbStatus ? "text-green-600" : "text-red-600"
              }`}
            >
              {ppdbStatus ? "Buka" : "Tutup"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
