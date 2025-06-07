import { motion } from "framer-motion";

const BrandComponent = ({ img }: { img: string }) => {
  return (
    <div className="  vibrate w-[228px] max-xl:w-[196px] max-md:w-[192px] []">
      <img src={img} />
    </div>
  );
};

export const ShopBy = () => {
  return (
    <section className="bg-[#17171A] max-sm:w-[520px]">
      <div className="py-[126px] px-[48px] pb-[156px]">
        <h2 className="text-[28px] custom-orbitron mb-[64px] text-center font-semibold text-white">
          SHOP BY POPULAR BRANDS
        </h2>

        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.2 }}
          className="px-[64px] space-y-9"
        >
          <div className=" space-y-9 max-lg:block hidden">
            <div
              className=" 
justify-items-center"
            >
              <BrandComponent img="../Logo/polyhaven_logo.png" />
            </div>
            <div
              className="grid grid-cols-2
max-md:w-[296px] gap-y-[28px] gap-x-[148px]  justify-items-center "
            >
              <BrandComponent img="../Logo/3D_Warehouse_logo.png" />
              <BrandComponent img="../Logo/cg_logo.png" />
              <BrandComponent img="../Logo/Mixamo_logo.png" />
              <BrandComponent img="../Logo/cg_logo.png" />
              <BrandComponent img="../Logo/cg_logo.png" />
              <BrandComponent img="../Logo/vectary_logo.png" />{" "}
              <BrandComponent img="../Logo/cg_logo.png" />
              <BrandComponent img="../Logo/vectary_logo.png" />
            </div>
          </div>
          <div
            className="xl:w-full max-xl:w-[980px] 
           max-lg:w-[980px]  grid-cols-4 lg:grid hidden
            justify-items-center"
          >
            <BrandComponent img="../Logo/3D_Warehouse_logo.png" />
            <BrandComponent img="../Logo/cg_logo.png" />
            <BrandComponent img="../Logo/Mixamo_logo.png" />
            <BrandComponent img="../Logo/polyhaven_logo.png" />
          </div>
          <div className=" lg:grid hidden grid-cols-3 max-xl:w-[910px]  justify-items-center items-center mt-4">
            <BrandComponent img="../Logo/TS_logo.png" />
            <BrandComponent img="../Logo/vectary_logo.png" />
            <BrandComponent img="../Logo/Mixamo_logo.png" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
