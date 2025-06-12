import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { WeaponPage } from "./pages/WeaponPage";
import "react-toastify/dist/ReactToastify.css";
import Whislist from "./pages/Whislist";
import Contact from "./components/ContactUs";
import { AboutUs } from "./components/AboutUs";
import Faqs4 from "./components/FAQs";

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
          <Route path={`shop/contactUs`} element={<Contact />}></Route>
          <Route path={`shop/AboutUs`} element={<AboutUs />}></Route>
          <Route path={`shop/FAQs`} element={<Faqs4 />}></Route>
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
export default App;
