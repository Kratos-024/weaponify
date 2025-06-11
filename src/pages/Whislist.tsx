import { NavBar } from "../components/ShopPage/NavBar";
import { TiDelete } from "react-icons/ti";

export const Whislist = () => {
  return (
    <section>
      <NavBar />
      <section>
        <div>
          <h2 className=" text-[48px] text-center my-9">Whilist</h2>
          <div className=" h-screen mx-auto lg:w-[1280px] -red-300">
            <div className="flex text-[21px] items-center justify-between ">
              <div>
                <div className=" cursor-pointer">
                  <TiDelete className=" w-[28px] h-[28px]" />
                </div>
                <img src="" />
              </div>
              <p>Ak-47</p>
              <span>$45.53</span>
              <span>2 in stocks</span>
              <button
                className="hover:opacity-90 bg-[#ececec] w-fit
           hover:pinkishBg  rounded-2xl px-4 py-4 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
