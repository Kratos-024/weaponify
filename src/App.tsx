import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { WeaponPage } from "./pages/WeaponPage";
import "react-toastify/dist/ReactToastify.css";
import Whislist from "./pages/Whislist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route
            path={`shop/weapon/:id/:name`}
            element={<WeaponPage />}
          ></Route>
          <Route path={`shop/whislist`} element={<Whislist />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
export default App;
