import "./App.css";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import WeaponGallery from "./components/WeaponGallery";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <WeaponGallery />
      <Footer />
    </div>
  );
}

export default App;
