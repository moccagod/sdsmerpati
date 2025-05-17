import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) setAuthenticated(true);
      setLoading(false);
    });

    // Bisa juga subscribe ke auth state changes kalau mau realtime
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!authenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
