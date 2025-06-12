import { CiFacebook } from "react-icons/ci";
import { NavBar } from "./ShopPage/NavBar";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Footer } from "./HomePage/Footer";

export const HeroHeader = ({ text }: { text: string }) => {
  return (
    <section className="w-full mb-16">
      <div className="relative w-full">
        <img
          className="w-full lg:h-[400px]
             max-md:h-[200px] 
        md:object-cover md:object-center"
          src="https://gearnix.risingbamboo.com/wp-content/themes/gearnix/dist/images/breadcrumb.jpg"
          alt="Header background"
        />

        {/* Centered text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
};
const Contact = () => {
  return (
    <section
      className="relative z-10 overflow-hidden
       bg-white dark:bg-dark"
    >
      <NavBar />
      <HeroHeader text="Contact Us" />
      <div className="w-full px-4 mx-auto">
        <h2 className="text-[42px] font-semibold px-[48px]">Contact Us</h2>
        <div className="flex max-lg:items-center justify-center p-8 max-lg:flex-col dark:bg-dark-2 sm:p-12">
          <form className="w-3/4">
            <ContactInputBox type="text" name="name" placeholder="Your Name" />
            <ContactInputBox
              type="text"
              name="email"
              placeholder="Your Email"
            />
            <ContactInputBox
              type="text"
              name="phone"
              placeholder="Your Phone"
            />
            <ContactTextArea
              row="6"
              placeholder="Your Message"
              name="details"
              defaultValue=""
            />
            <div>
              <button
                type="submit"
                className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className=" px-6 max-w-xl mx-auto space-y-4">
            <div>
              <p className="text-lg font-semibold">Address:</p>
              <p>
                123 Suspendis matti, Visaosang Building
                <br />
                VST District, NY Accums, North American
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold">Email:</p>
              <p>support@domain.com</p>
            </div>

            <div>
              <p className="text-lg font-semibold">Call Us:</p>
              <p>(012)-345-67890</p>
            </div>

            <div>
              <p className="text-lg font-semibold">Opening time:</p>
              <p>
                Our store has re-opened for shopping, exchanges every day 11am
                to 7pm
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="text-2xl hover:text-blue-600 transition">
                <CiFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-black transition">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </section>
  );
};

export default Contact;
//@ts-ignore

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};
//@ts-ignore
const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};
