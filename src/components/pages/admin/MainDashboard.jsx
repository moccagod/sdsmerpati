import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

const MainDashboard = () => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setDisplayName(user.user_metadata?.display_name || "");
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard Utama</h2>
      <p>
        Hai, <span className="font-semibold">{displayName || "Admin"}</span>,
        selamat datang di halaman dashboard admin.
      </p>
    </div>
  );
};

export default MainDashboard;
