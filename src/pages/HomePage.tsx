import { Header } from "../components/HomePage/Header";
import { Features } from "../components/HomePage/Features";
import WeaponGallery from "../components/HomePage/WeaponGallery";
import { Footer } from "../components/HomePage/Footer";
import { Categories } from "../components/HomePage/Categories";
import { ShopBy } from "../components/HomePage/ShopBy";
import { useState } from "react";
import { AccountCreation } from "../components/AccountCreation";

export const HomePage = () => {
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const showAccountHandler = () => {
    console.log(showAccount);
    setShowAccount(!showAccount);
  };

  return (
    <>
      <div className=" overflow-x-hidden ">
        {" "}
        {showAccount && (
          <div className=" ">
            <AccountCreation showAccountHandler={showAccountHandler} />
          </div>
        )}
        <Header showAccountHandler={showAccountHandler} />
        <Features />
        <Categories />
        <ShopBy />
        <WeaponGallery />
        <Footer />
      </div>
    </>
  );
};
