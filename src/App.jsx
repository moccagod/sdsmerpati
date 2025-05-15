// src/App.jsx
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/pages/Home";
import SambutanKepalaSekolah from "./components/pages/profile/SambutanKepalaSekolah";
import VisiDanMisi from "./components/pages/profile/VisiDanMisi";
import GuruDanTendik from "./components/pages/profile/GuruDanTendik";
import KalenderAkademik from "./components/pages/akademik/KalenderAkademik";
import Kurikulum from "./components/pages/akademik/Kurikulum";
import ProgramSekolah from "./components/pages/akademik/ProgramSekolah";
import Berita from "./components/pages/Berita";
import Kontak from "./components/pages/Kontak";
import Ekstrakurikuler from "./components/pages/akademik/Ekstrakurikuler";
import PPDB from "./components/pages/PPDB";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/sambutankepalasekolah"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SambutanKepalaSekolah />
              </motion.div>
            }
          />
          <Route
            path="/visidanmisi"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <VisiDanMisi />
              </motion.div>
            }
          />
          <Route
            path="/ekstrakurikuler"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Ekstrakurikuler />
              </motion.div>
            }
          />
          <Route
            path="/gurudantendik"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GuruDanTendik />
              </motion.div>
            }
          />
          <Route
            path="/kalenderakademik"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <KalenderAkademik />
              </motion.div>
            }
          />
          <Route
            path="/kurikulum"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Kurikulum />
              </motion.div>
            }
          />
          <Route
            path="/programsekolah"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProgramSekolah />
              </motion.div>
            }
          />
          <Route
            path="/berita"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Berita />
              </motion.div>
            }
          />
          <Route
            path="/kontak"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Kontak />
              </motion.div>
            }
          />
          <Route
            path="/ppdb"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <PPDB />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
