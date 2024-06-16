
import Nav from "../components/Nav";
import HeroImg from "../components/Hero";
import Herotext from "../components/Herotext"
import Footer from "../components/Footer";
import "../style.css";

function Home() {
  return (
    <div className="App">
     <Nav />
     <Herotext />
    <HeroImg />
     <Footer />
    </div>
  );
}

export default Home;
 