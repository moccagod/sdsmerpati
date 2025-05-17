import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

const Pengaturan = () => {
  const [displayName, setDisplayName] = useState("");
  const [newDisplayName, setNewDisplayName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const name = user.user_metadata?.display_name || "";
        setDisplayName(name);
        setNewDisplayName(name);
      }
    };

    fetchUser();
  }, []);

  const handleDisplayNameUpdate = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const {
      data: { user },
      error,
    } = await supabase.auth.updateUser({
      data: { display_name: newDisplayName },
    });

    if (error) {
      setError(error.message);
    } else {
      setDisplayName(newDisplayName);
      setMessage("Display name berhasil diperbarui");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!newPassword || !confirmPassword) {
      setError("Harap isi password baru dan konfirmasi password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Password yang dimasukan tidak sama");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setError(error.message);
    } else {
      setMessage("Password berhasil diperbarui. Silakan login ulang.");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pengaturan</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
      )}
      {message && (
        <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleDisplayNameUpdate} className="mb-8 max-w-md">
        <label className="block mb-2 font-semibold" htmlFor="displayName">
          Display Name
        </label>
        <input
          id="displayName"
          type="text"
          value={newDisplayName}
          onChange={(e) => setNewDisplayName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button
          type="submit"
          className="cursor-pointer bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
        >
          Simpan Display Name
        </button>
      </form>

      <form onSubmit={handlePasswordChange} className="max-w-md">
        <label className="block mb-2 font-semibold" htmlFor="newPassword">
          Password Baru
        </label>
        <input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="confirmPassword">
          Konfirmasi Password Baru
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          className="cursor-pointer bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
        >
          Ubah Password
        </button>
      </form>
    </div>
  );
};

export default Pengaturan;
