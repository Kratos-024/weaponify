import SketchfabModelViewer from "../HomePage/ModelViewer";
import { WeaponBuyInfo } from "./WeaponBuyInfo";
import type { ResponseWeaponData } from "../../../public/types/weapon";
import { WeaponDescription } from "./WeaponDescription";
function extractSketchfabUrl(htmlString: string): string | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const iframe = doc.querySelector("iframe");

  return iframe?.getAttribute("src") || null;
}

export default function BuySection({
  weaponData,
}: {
  weaponData: ResponseWeaponData;
}) {
  const sketchFabUrI = extractSketchfabUrl(weaponData["sketchFabUrl"]) || "";

  return (
    <section>
      <div className="xl:max-w-[1480px] mx-auto mt-9 px-4 space-y-6 mb-[96px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* 3D Model Viewer - Always visible */}
          <div className="w-full order-1">
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-white p-1 rounded-lg shadow-sm border">
              <SketchfabModelViewer sketchFabUrl={sketchFabUrI} />
            </div>
          </div>

          {/* Buy Info - Always visible */}
          <div className="w-full order-2">
            <WeaponBuyInfo />
          </div>
        </div>

        <WeaponDescription weaponData={weaponData} />
      </div>
    </section>
  );
}
