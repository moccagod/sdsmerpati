// src/pages/admin/pengumuman/LihatPengumuman.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { Link, useNavigate } from "react-router-dom";

const LihatPengumuman = () => {
  const [pengumuman, setPengumuman] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPengumuman();
  }, []);

  const fetchPengumuman = async () => {
    const { data, error } = await supabase
      .from("pengumuman")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setPengumuman(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus pengumuman ini?")) {
      const { error } = await supabase.from("pengumuman").delete().eq("id", id);
      if (!error) fetchPengumuman();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">
        Daftar Pengumuman
      </h1>

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
            </div>
            <div className="space-x-2">
              <button
                onClick={() => navigate(`/admin/editpengumuman/${item.id}`)}
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

export default LihatPengumuman;
