import "./App.css";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import SketchfabModelViewer from "./components/ModelViewer";
import { WeaponGallery } from "./components/WeaponGallery";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <SketchfabModelViewer />
      <WeaponGallery />
    </div>
  );
}

export default App;
