import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white pt-12 pb-7 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Deskripsi */}
        <div>
          <img
            src="/sdsmerpati/images/logo-merpati.png"
            alt="Logo SD Merpati"
            className="h-14 mb-4"
          />
          <p className="text-sm leading-relaxed">
            SD Merpati adalah sekolah dasar swasta yang berkomitmen mencetak
            generasi cerdas, kreatif, dan berakhlak mulia.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/ppdb" className="hover:underline">
                PPDB
              </Link>
            </li>
            <li>
              <Link to="/sambutankepalasekolah" className="hover:underline">
                Sambutan Kepala Sekolah
              </Link>
            </li>
            <li>
              <Link to="/gurudantendik" className="hover:underline">
                Guru & Tendik
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Jl. Batu Tulis XIII No.18 8, RT.8/RW.2, Kb. Klp., Kecamatan
              Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10120
            </li>
            <li>Jakarta, Indonesia</li>
            <li>Telp: +62 895-4018-27200</li>
            <li>sds.merpati@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-white/70 border-t border-white/20 pt-6">
        &copy; {new Date().getFullYear()} SDS Merpati. All rights reserved.
        <p>Made With ❤️ By Azmi Nailal Hadi</p>
      </div>
    </footer>
  );
};

export default Footer;
