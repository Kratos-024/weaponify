import { HeroHeader } from "./ContactUs";
import { Footer } from "./HomePage/Footer";
import { NavBar } from "./ShopPage/NavBar";

export const AboutUs = () => {
  return (
    <section className="">
      <NavBar />
      <HeroHeader />(
      <div className="bg-white text-gray-800 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-10 text-gray-900">
            About Weaponify
          </h2>

          <p className="text-lg md:text-xl text-center mb-12 leading-relaxed text-gray-700">
            <strong className="text-gray-900">Weaponify</strong> is your gateway
            to the world of modern military technology — featuring accurate
            data, technical specs, and immersive{" "}
            <span className="font-semibold text-black">3D models</span> of tanks
            and other weapon systems.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4"> What We Do</h3>
              <p className="leading-loose">
                We bring together historical and technical information on
                ground-based military equipment. Our goal is to let users
                interact with weapon systems through{" "}
                <strong>real-time 3D models</strong>, understand their
                development, and explore their use in warfare.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4"> Our Mission</h3>
              <p className="leading-loose">
                To educate and inspire defense enthusiasts, students, creators,
                and professionals through detailed, visually rich, and reliable
                tools for exploring battlefield machines and strategies.
              </p>
            </div>
          </div>

          <div className="grid my-9 max-md:grid-cols-1  max-lg:grid-cols-2  lg:grid-cols-4 justify-center items-center  gap-[96px]">
            <div className="flex  gap-4 flex-col items-center ">
              <div className=" bg- rounded-full p-4 shadow-glow-red">
                <img
                  className="vibrate"
                  width={48}
                  src="../images/3d-svgrepo-com.svg"
                />
              </div>
              <h3 className="text-white">Explore in 3D</h3>
              <p className="max-w-md text-center text-black">
                Rotate, zoom, and inspect every detail of high-quality 3D weapon
                models — from pistols to futuristic rifles.
              </p>
            </div>{" "}
            <div className="flex  gap-4 flex-col items-center ">
              <div className=" bg- rounded-full p-4 shadow-glow-red">
                <img
                  className="vibrate"
                  width={48}
                  src="../images/game-controller-svgrepo-com.svg"
                />
              </div>
              <h3 className="text-white">In-Game Appearances</h3>
              <p className="max-w-md text-center text-black">
                Track where each weapon appears across your favorite games like
                COD, Valorant, or CS:GO.
              </p>
            </div>{" "}
            <div className="flex  gap-4 flex-col items-center ">
              <div className=" bg- rounded-full p-4 shadow-glow-red">
                <img
                  className="vibrate"
                  width={48}
                  src="../images/idea-svgrepo-com.svg"
                />
              </div>
              <h3 className="text-white">Compare Weapons Side-by-Side</h3>
              <p className="max-w-md text-center text-black">
                Analyze two weapons based on power, accuracy, recoil, and design
                — instantly.
              </p>
            </div>{" "}
            <div className="flex  gap-4 flex-col items-center ">
              <div className=" bg- rounded-full p-4 shadow-glow-red">
                <img
                  className="vibrate"
                  width={48}
                  src="../images/history-svgrepo-com.svg"
                />
              </div>
              <h3 className="text-white">Real-World Origins</h3>
              <p className="max-w-md text-black text-center ">
                Discover the historical context and usage of each weapon in
                real-life battles.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🚀 What’s Next?</h3>
            <p className="text-gray-700 mb-6">
              Weaponify is evolving. Soon, you’ll find content on aerial
              systems, warship models, interactive global conflict maps, and
              more.
            </p>
            <button className="bg-black hover:bg-gray-800 transition text-white py-3 px-8 rounded-full font-semibold">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </section>
  );
};
