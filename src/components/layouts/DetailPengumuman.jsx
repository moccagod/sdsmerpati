// src/pages/DetailPengumuman.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const DetailPengumuman = () => {
  const { id } = useParams();
  const [pengumuman, setPengumuman] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestPengumuman, setLatestPengumuman] = useState([]);

  useEffect(() => {
    const fetchPengumuman = async () => {
      try {
        const { data, error } = await supabase
          .from("pengumuman")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setPengumuman(data);
      } catch (err) {
        setError("Gagal mengambil data pengumuman.");
      } finally {
        setLoading(false);
      }
    };

    fetchPengumuman();
  }, [id]);

  useEffect(() => {
    // Fetch latest pengumuman for sidebar
    const fetchLatest = async () => {
      const { data, error } = await supabase
        .from("pengumuman")
        .select("id, judul, tanggal")
        .order("created_at", { ascending: false })
        .limit(5);

      if (!error && data) {
        setLatestPengumuman(data);
      }
    };

    fetchLatest();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error)
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!pengumuman)
    return <div className="text-center mt-20">Pengumuman tidak ditemukan.</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-6 py-20 pt-28">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="flex-1 bg-white rounded-3xl shadow-lg p-8 sm:p-12">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold text-teal-700 leading-tight mb-3">
                {pengumuman.judul}
              </h1>
              <time
                dateTime={pengumuman.tanggal}
                className="text-sm text-teal-500 italic tracking-wide"
              >
                {new Date(pengumuman.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </header>

            {pengumuman.image_url ? (
              <div className="mb-8 overflow-hidden rounded-xl shadow-md max-h-96">
                <img
                  src={pengumuman.image_url}
                  alt={pengumuman.judul}
                  className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="mb-8 overflow-hidden rounded-xl shadow-md max-h-96 bg-gray-200 flex items-center justify-center text-gray-500">
                <span>No Image Available</span>
              </div>
            )}

            <section className="prose prose-teal max-w-none text-justify leading-relaxed text-gray-700 whitespace-pre-wrap">
              {pengumuman.konten}
            </section>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 bg-white rounded-3xl shadow-lg p-6 sticky top-28 h-fit self-start">
            <h2 className="text-xl font-semibold text-teal-700 mb-6">
              Pengumuman Terbaru
            </h2>
            <ul className="space-y-4">
              {latestPengumuman.length === 0 && (
                <li className="text-gray-500">Belum ada pengumuman.</li>
              )}
              {latestPengumuman.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/pengumuman/${item.id}`}
                    className="block text-teal-700 hover:underline"
                  >
                    <div className="font-semibold">{item.judul}</div>
                    <time className="text-sm italic text-gray-500">
                      {new Date(item.tanggal).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailPengumuman;
