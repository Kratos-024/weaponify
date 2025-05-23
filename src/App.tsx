import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { WeaponPage } from "./pages/WeaponPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/shop/weapon/info" element={<WeaponPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
