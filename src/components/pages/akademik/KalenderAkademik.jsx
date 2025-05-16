import React, { useState } from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import Calendar from "react-calendar";
import { motion, AnimatePresence } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import "../../../assets/style/KalenderAkademik.css";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const events = {
  "2025-06-06": { type: "Libur", description: "Hari Raya Idul Adha" },
  "2026-06-01": { type: "Libur", description: "Libur Nasional" },
  "2026-06-10": { type: "Kegiatan", description: "Pentas Seni Sekolah" },
};

const typeColors = {
  Libur: "bg-red-400",
  Ulangan: "bg-yellow-400",
  Kegiatan: "bg-green-400",
};

const announcements = [
  { id: 1, title: "Pengumuman Hari Raya", link: "/pengumuman/1" },
  { id: 2, title: "Jadwal Ulangan Semester", link: "/pengumuman/2" },
  { id: 3, title: "Pentas Seni Sekolah", link: "/pengumuman/3" },
];

const KalenderAkademik = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  // Fungsi format tanggal menggunakan waktu lokal
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const onDateChange = (date) => {
    const isoDate = formatDate(date);
    setSelectedDate((prev) => (prev === isoDate ? null : isoDate));
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const isoDate = formatDate(date);
      if (events[isoDate]) {
        const eventType = events[isoDate].type;
        return `font-bold border-2 border-${typeColors[eventType].replace(
          "bg-",
          ""
        )}-500 rounded-lg`;
      }
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow px-6 py-12 pt-28 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-teal-700 mb-10 text-center">
          Kalender Akademik
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* KIRI: Kalender */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md flex-1 flex justify-center"
          >
            <div className="w-full max-w-md">
              <Calendar
                onClickDay={onDateChange}
                tileClassName={tileClassName}
                tileContent={({ date, view }) => {
                  if (view === "month") {
                    const isoDate = formatDate(date);
                    if (events[isoDate]) {
                      const eventType = events[isoDate].type;
                      return (
                        <div className="flex justify-center mt-1">
                          <span
                            className={`w-3 h-3 rounded-full ${typeColors[eventType]}`}
                          ></span>
                        </div>
                      );
                    }
                  }
                  return null;
                }}
                prevLabel={<FaChevronLeft />}
                nextLabel={<FaChevronRight />}
              />

              <AnimatePresence>
                {selectedDate && events[selectedDate] && (
                  <motion.div
                    key="event-detail"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 p-4 bg-teal-100 rounded-lg text-teal-900 shadow cursor-pointer"
                    onClick={() =>
                      alert(`Detail event: ${events[selectedDate].description}`)
                    }
                  >
                    <h2 className="font-semibold text-xl mb-2">
                      {selectedDate} - {events[selectedDate].type}
                    </h2>
                    <p>{events[selectedDate].description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* KANAN: Sidebar Pengumuman */}
          <aside className="bg-white p-6 rounded-xl shadow-md w-80">
            <h2 className="text-2xl font-bold mb-6 border-b border-teal-200 pb-2 text-teal-700">
              Pengumuman Terbaru
            </h2>
            <nav className="flex flex-col space-y-4">
              {announcements.map(({ id, title, link }) => (
                <Link
                  to={link}
                  key={id}
                  className="text-teal-700 hover:bg-teal-100 rounded px-3 py-2 transition"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KalenderAkademik;
