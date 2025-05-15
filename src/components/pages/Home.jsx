import BeritaArtikel from "../layouts/BeritaArtikel";
import CaraPendaftaran from "../layouts/CaraPendaftaran";
import Footer from "../layouts/Footer";
import Hero from "../layouts/Hero";
import Navbar from "../layouts/Navbar";
import PrestasiSekolah from "../layouts/PrestasiSekolah";
import ProfilGuru from "../layouts/ProfilGuru";
import Sambutan from "../layouts/Sambutan";
import SectionKontak from "../layouts/SectionKontak";
import Stats from "../layouts/Stats";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sambutan />
      <Stats />
      <ProfilGuru />
      <CaraPendaftaran />
      <PrestasiSekolah />
      <SectionKontak />
      <BeritaArtikel />
      <Footer />
    </div>
  );
};

export default Home;
