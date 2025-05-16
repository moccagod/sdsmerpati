import React from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

const Kurikulum = () => {
  return (
    <div>
      <Navbar />
      <section className="pt-28 px-6 md:px-20 min-h-screen mb-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-teal-700 mb-6">
            Kurikulum Di SDS Merpati
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Kurikulum SDS Merpati dirancang untuk memberikan pengalaman belajar
            yang menyenangkan, berbasis karakter, dan membekali siswa dengan
            keterampilan abad 21.
          </p>
        </div>

        {/* Isi Kurikulum */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="/sdsmerpati/images/kurikulum.png"
            alt="Kurikulum Merdeka"
            className="w-full h-96 object-cover rounded-t-xl"
          />
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">
              Apa Itu Kurikulum Merdeka?
            </h2>
            <p className="text-gray-700 mb-4">
              Kurikulum Merdeka adalah pendekatan pendidikan yang bertujuan
              untuk memberikan kebebasan kepada sekolah dalam mengembangkan
              pembelajaran yang sesuai dengan potensi dan kebutuhan siswa.
              Kurikulum ini berfokus pada penguatan karakter, kompetensi dasar,
              serta literasi dan numerasi.
            </p>
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">
              Karakteristik Kurikulum Merdeka:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Fleksibilitas dalam penyusunan kurikulum sekolah.</li>
              <li>Fokus pada pengembangan karakter dan soft skills.</li>
              <li>
                Pembelajaran berbasis proyek untuk memperkuat kreativitas siswa.
              </li>
              <li>Peningkatan kompetensi literasi dan numerasi.</li>
              <li>
                Penilaian berbasis kompetensi, bukan hanya nilai akademis.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">
              Tujuan Utama:
            </h3>
            <p className="text-gray-700">
              Mempersiapkan generasi muda yang siap menghadapi tantangan dunia
              yang terus berkembang, dengan keterampilan berpikir kritis,
              inovatif, dan berkarakter kuat.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Kurikulum;
