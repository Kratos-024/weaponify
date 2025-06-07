import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <section className="bg-[#17171A] py-[64px] max-sm:w-full">
      <div>
        <div className="mb-[64px] text-white text-center text-lg ">
          <h2 className=" mb-3 text-3xl">Subscribe & Get 45% Discount</h2>
          <p>
            Become a Member and Unlock Exclusive Access to Our Best-Selling
            Products at an Unbeatable 45% Discount!
          </p>
        </div>

        <div
          className=" mx-auto w-fit flex max-sm:w-[350px]
         bg-white rounded-4xl px-3 py-3"
        >
          <input
            placeholder="Enter your email"
            className="px-3 placeholder:text-gray-500 outline-none
             placeholder:text-sm w-[480px] max-md:w-[380px]"
          ></input>
          <button className="text-white px-5 transition-all duration-150 py-2 rounded-3xl bg-[linear-gradient(90deg,_#8A2BE2_0%,_#FF69B4_51%,_#8A2BE2_100%)]">
            Submit
          </button>
        </div>
        <div className="pt-[96px] w-fit flex flex-col items-center justify-center gap-6 mx-auto">
          <div className="flex items-center text-white text-[36px]">
            <img
              className=" w-[196px] "
              src="https://gearnix.risingbamboo.com/wp-content/themes/gearnix/dist/images/logo/light.png"
            />
          </div>
          <ul className="flex items-center max-md:space-x-4 whitespace-nowrap max-md:text-sm text-white space-x-7">
            <li>ABOUT</li>
            <li>SHOP</li>
            <li>PRIVACY POLICY</li>
            <li>TERMS OF SERVICES</li>
            <li>CONTACTS</li>
          </ul>
          <div className="flex items-center gap-3">
            <div
              className="w-fit  rounded-full
             bg-[linear-gradient(90deg,_#8A2BE2_0%,_#FF69B4_51%,_#8A2BE2_100%)] p-3"
            >
              <FaXTwitter color="black" />
            </div>
            <div
              className="w-fit  rounded-full
             bg-[linear-gradient(90deg,_#8A2BE2_0%,_#FF69B4_51%,_#8A2BE2_100%)] p-3"
            >
              <FaInstagram color="black" />
            </div>
            <div
              className="w-fit  rounded-full
             bg-[linear-gradient(90deg,_#8A2BE2_0%,_#FF69B4_51%,_#8A2BE2_100%)] p-3"
            >
              <FaFacebookF color="black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
