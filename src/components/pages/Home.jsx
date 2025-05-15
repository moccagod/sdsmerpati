import Footer from "../layouts/Footer";
import Hero from "../layouts/Hero";
import Navbar from "../layouts/Navbar";
import ProfilGuru from "../layouts/ProfilGuru";
import Sambutan from "../layouts/Sambutan";
import Stats from "../layouts/Stats";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sambutan />
      <Stats />
      <ProfilGuru />
      <Footer />
    </div>
  );
};

export default Home;
