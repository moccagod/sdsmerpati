import React from "react";
import DetailBerita from "../../layouts/DetailBerita";

const Berita1 = () => {
  const recentPosts = [
    {
      title: "Penerimaan Siswa Baru 2025",
      date: "10 Mei 2025",
      link: "/berita/berita2",
    },
  ];

  return (
    <DetailBerita
      title="Pengumuman Penting Terkait Ujian Semester"
      date="15 Mei 2025"
      image="/sdsmerpati/images/hero1.jpg"
      content="Kami menginformasikan kepada seluruh siswa dan orang tua bahwa ujian semester genap akan dimulai pada tanggal 1 Juni 2025. Harap mempersiapkan diri dengan baik dan mengikuti ujian sesuai dengan jadwal yang telah ditentukan."
      recentPosts={recentPosts}
    />
  );
};

export default Berita1;
