import React from "react";
import DetailPengumuman from "../../layouts/DetailPengumuman";

const Pengumuman1 = () => {
  const recentPosts = [
    {
      title: "Penerimaan Siswa Baru 2025",
      date: "10 Mei 2025",
      link: "/pengumuman/pengumuman2",
    },
    {
      title: "Libur Idul Fitri 1446H",
      date: "1 April 2025",
      link: "/pengumuman/libur-idulfitri",
    },
    {
      title: "Kegiatan Outbound 2025",
      date: "20 Maret 2025",
      link: "/pengumuman/outbound-2025",
    },
  ];

  return (
    <DetailPengumuman
      title="Pengumuman Penting Terkait Ujian Semester"
      date="15 Mei 2025"
      image="/sdsmerpati/images/hero1.jpg"
      content="Kami menginformasikan kepada seluruh siswa dan orang tua bahwa ujian semester genap akan dimulai pada tanggal 1 Juni 2025. Harap mempersiapkan diri dengan baik dan mengikuti ujian sesuai dengan jadwal yang telah ditentukan."
      recentPosts={recentPosts}
    />
  );
};

export default Pengumuman1;
