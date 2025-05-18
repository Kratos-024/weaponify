import { MdReadMore } from "react-icons/md";

const WeaponCard = () => {
  return (
    <section className="bg-[#1C1C1C] rounded-t-xl ">
      <div className=" flex flex-col w-[480px]  rounded-xl">
        {" "}
        <div className="w-full">
          <iframe
            className=" rounded-xl rounded-b-none"
            title="T-90"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed"
            style={{ width: "100%", height: "410px" }}
          ></iframe>
        </div>
        <div className=" px-9 py-5 space-y-3">
          {" "}
          <h3 className="text-gray-600">By Admin</h3>
          <p className="text-white text-[21px]">The t90,Used in cod</p>
          <p className="text-white text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            obcaecati illo optio
          </p>
          <p className="flex items-center gap-2">
            <span>Read More</span>
            <MdReadMore />
          </p>
        </div>
      </div>
    </section>
  );
};

export const WeaponGallery = () => {
  return (
    <section className="bg-[#17171A] py-[96px]">
      <div className="max-w-[1960px] px-[64px] mx-auto min-w-[480px]">
        <div>
          <h2 className="text-4xl text-white font-bold text-center">
            Legendary Weapons & War Machines
          </h2>
          <p className="text-center text-white">
            Swipe through elite firepower and armored beasts
          </p>
        </div>
        <div className="flex gap-3 mt-9 justify-center">
          <WeaponCard />
          <WeaponCard />
          <WeaponCard />
        </div>
      </div>
    </section>
  );
};
