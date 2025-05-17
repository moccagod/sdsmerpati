import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        {/* Kolom Logo & Deskripsi */}
        <div className="flex-1 min-w-[250px]">
          <img
            src="/sdsmerpati/images/logo-merpati.png"
            alt="Logo SD Merpati"
            className="h-20 mb-6"
          />
          <p className="text-gray-400 leading-relaxed">
            SD Merpati adalah sekolah dasar swasta yang berkomitmen mencetak
            generasi cerdas, kreatif, dan berakhlak mulia.
          </p>
          <div className="flex space-x-4 mt-8">
            {/* Contoh icon sosial media, bisa diganti sesuai kebutuhan */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-teal-400 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-3v-2.88h3v-2.2c0-3 1.8-4.66 4.54-4.66 1.32 0 2.7.24 2.7.24v3h-1.53c-1.5 0-1.97.94-1.97 1.9v2.52h3.34l-.53 2.88h-2.81v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-teal-400 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.97-2.47 9.05 9.05 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13 12.86 12.86 0 01-9.33-4.7 4.54 4.54 0 001.4 6.06 4.48 4.48 0 01-2.05-.57v.06a4.53 4.53 0 003.63 4.44 4.52 4.52 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9.06 9.06 0 012 19.54a12.76 12.76 0 006.92 2.04c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.42-.02-.62A9.18 9.18 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-teal-400 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 3.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 2a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm3.75-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Kolom Navigasi */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-teal-400 font-semibold text-lg mb-6 border-b border-teal-400 pb-2 uppercase tracking-wide">
            Navigasi
          </h3>
          <ul className="flex flex-col gap-4 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-teal-400 transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/ppdb"
                className="hover:text-teal-400 transition-colors"
              >
                PPDB
              </Link>
            </li>
            <li>
              <Link
                to="/sambutankepalasekolah"
                className="hover:text-teal-400 transition-colors"
              >
                Sambutan Kepala Sekolah
              </Link>
            </li>
            <li>
              <Link
                to="/gurudantendik"
                className="hover:text-teal-400 transition-colors"
              >
                Guru & Tendik
              </Link>
            </li>
            <li>
              <Link
                to="/kontak"
                className="hover:text-teal-400 transition-colors"
              >
                Kontak
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className="hover:text-teal-400 transition-colors"
              >
                Admin Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom Kontak */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-teal-400 font-semibold text-lg mb-6 border-b border-teal-400 pb-2 uppercase tracking-wide">
            Kontak
          </h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">📍</span>
              <p>
                Jl. Batu Tulis XIII No.18 8, RT.8/RW.2, Kb. Klp., Kecamatan
                Gambir, Kota Jakarta Pusat, 10120
              </p>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-400">🌐</span> Jakarta, Indonesia
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-400">📞</span> +62 895-4018-27200
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-400">✉️</span> sdsmerpati2024@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Garis Pembatas */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SDS Merpati. All rights reserved.
        <br />
        Made with ❤️ by Azmi Nailal Hadi
      </div>
    </footer>
  );
};

export default Footer;
