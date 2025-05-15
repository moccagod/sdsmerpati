import { motion } from "framer-motion";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Kontak = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-28 px-6 md:px-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-teal-500 mb-8"
          >
            Hubungi Kami
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Informasi Kontak */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold mb-4 text-teal-500">
                Informasi Sekolah
              </h2>
              <p className="mb-2">
                <strong>Alamat:</strong> Jl. Batu Tulis XIII No.18 8, RT.8/RW.2,
                Kb. Klp., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus
                Ibukota Jakarta 10120
              </p>
              <p className="mb-2">
                <strong>Telepon:</strong> +62 895-4018-27200
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:sds.merpati@gmail.com"
                  className="text-teal-600 hover:underline"
                >
                  sds.merpati@gmail.com
                </a>
              </p>

              <div className="mt-6">
                <iframe
                  title="Lokasi Sekolah"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.922666923152!2d106.8060391!3d-6.166810699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d9c01f366f%3A0xce969c15250dade3!2sSekolah%20Dasar%20Merpati!5e0!3m2!1sid!2sid!4v1747330318170!5m2!1sid!2sid"
                  width="100%"
                  height="250"
                  className="rounded-xl border border-gray-300"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Form Kontak */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Kirim Pesan
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-600 mb-1">Nama</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Alamat email"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">
                    Nomor Whatsapp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Nomor Whatsapp"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Pesan</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-teal-600 transition-all"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kontak;
