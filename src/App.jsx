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
import Prestasi from "./components/pages/akademik/Prestasi";
import ProgramSekolah1 from "./components/pages/akademik/Program Sekolah/ProgramSekolah1";
import ProgramSekolah2 from "./components/pages/akademik/Program Sekolah/ProgramSekolah2";
import ProgramSekolah3 from "./components/pages/akademik/Program Sekolah/ProgramSekolah3";
import ProgramSekolah4 from "./components/pages/akademik/Program Sekolah/ProgramSekolah4";
import ProgramSekolah5 from "./components/pages/akademik/Program Sekolah/ProgramSekolah5";
import ProgramSekolah6 from "./components/pages/akademik/Program Sekolah/ProgramSekolah6";
import Pengumuman from "./components/pages/Pengumuman";
import Pengumuman1 from "./components/pages/pengumuman/Pengumuman1";
import Berita1 from "./components/pages/berita/Berita1";

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
            path="/pengumuman"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Pengumuman />
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
          <Route
            path="/prestasi"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Prestasi />
              </motion.div>
            }
          />
          <Route
            path="/programsekolah/programsekolah1"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProgramSekolah1 />
              </motion.div>
            }
          />
          <Route
            path="/programsekolah/programsekolah2"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProgramSekolah2 />
              </motion.div>
            }
          />
          <Route
            path="/programsekolah/programsekolah3"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProgramSekolah3 />
              </motion.div>
            }
          />
          <Route
            path="/programsekolah/programsekolah4"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProgramSekolah4 />
              </motion.div>
            }
          />
          <Route
            path="/programsekolah/programsekolah5"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProgramSekolah5 />
              </motion.div>
            }
          />
          <Route
            path="/programsekolah/programsekolah6"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProgramSekolah6 />
              </motion.div>
            }
          />
          <Route
            path="/pengumuman/pengumuman1"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Pengumuman1 />
              </motion.div>
            }
          />
          <Route
            path="/berita/berita1"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Berita1 />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
