import "../../App.css";

export const Features = () => {
  return (
    <section className="bg-[#17171A] w-full max-sm:w-full">
      <div className="pt-[126px] pb-[38px] px-[48px] ">
        <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2  lg:grid-cols-4 justify-center items-center  gap-[96px]">
          <div className="flex  gap-4 flex-col items-center ">
            <div className=" bg- rounded-full p-4 shadow-glow-red">
              <img
                className="vibrate"
                width={48}
                src="./images/svgs/3d-svgrepo-com.svg"
              />
            </div>
            <h3 className="text-white">Explore in 3D</h3>
            <p className="max-w-md text-center text-white ">
              Rotate, zoom, and inspect every detail of high-quality 3D weapon
              models — from pistols to futuristic rifles.
            </p>
          </div>{" "}
          <div className="flex  gap-4 flex-col items-center ">
            <div className=" bg- rounded-full p-4 shadow-glow-red">
              <img
                className="vibrate"
                width={48}
                src="./images/svgs/game-controller-svgrepo-com.svg"
              />
            </div>
            <h3 className="text-white">In-Game Appearances</h3>
            <p className="max-w-md text-center text-white">
              Track where each weapon appears across your favorite games like
              COD, Valorant, or CS:GO.
            </p>
          </div>{" "}
          <div className="flex  gap-4 flex-col items-center ">
            <div className=" bg- rounded-full p-4 shadow-glow-red">
              <img
                className="vibrate"
                width={48}
                src="./images/svgs/idea-svgrepo-com.svg"
              />
            </div>
            <h3 className="text-white">Compare Weapons Side-by-Side</h3>
            <p className="max-w-md text-center text-white">
              Analyze two weapons based on power, accuracy, recoil, and design —
              instantly.
            </p>
          </div>{" "}
          <div className="flex  gap-4 flex-col items-center ">
            <div className=" bg- rounded-full p-4 shadow-glow-red">
              <img
                className="vibrate"
                width={48}
                src="./images/svgs/history-svgrepo-com.svg"
              />
            </div>
            <h3 className="text-white">Real-World Origins</h3>
            <p className="max-w-md text-center text-white">
              Discover the historical context and usage of each weapon in
              real-life battles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
