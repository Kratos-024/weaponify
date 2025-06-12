import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { WeaponPage } from "./pages/WeaponPage";
import "react-toastify/dist/ReactToastify.css";
import Whislist from "./pages/Whislist";
import Contact from "./components/ContactUs";
import { AboutUs } from "./components/AboutUs";
import Faqs4 from "./components/FAQs";
import Loader from "./Loader";
import ShoppingCartApp from "./components/Cart";

const AppWrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="shop/weapon/:id/:name" element={<WeaponPage />} />
        <Route path="shop/whislist" element={<Whislist />} />
        <Route path="shop/contactUs" element={<Contact />} />
        <Route path="shop/AboutUs" element={<AboutUs />} />
        <Route path="shop/FAQs" element={<Faqs4 />} />
        <Route path="shop/cart" element={<ShoppingCartApp />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
