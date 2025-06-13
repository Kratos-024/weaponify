import { useParams } from "react-router-dom";
import { NavBar } from "../components/ShopPage/NavBar";
import { useEffect, useState } from "react";
import { getEachWeapon } from "../apis/app";
import { fakeWeapon, type ResponseWeaponData } from "../types/weapon";
import "firebase/compat/firestore";
import { Footer } from "../components/HomePage/Footer";
import SketchfabModelViewer from "../components/HomePage/ModelViewer";
import { WeaponDescription } from "../components/WeaponInfo/WeaponDescription";
import { WeaponBuySection } from "../components/WeaponInfo/WeaponBuySection";
function extractSketchfabUrl(htmlString: string): string | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const iframe = doc.querySelector("iframe");
  return iframe?.getAttribute("src") || null;
}
export const WeaponPage = () => {
  const weaponId = useParams()["id"] || "";
  const weaponName = useParams()["name"] || "";
  const [weaponData, setWeaponData] = useState<ResponseWeaponData>(fakeWeapon);
  const [loaded, setLoaded] = useState(false);
  const sketchFabUrI = extractSketchfabUrl(weaponData["sketchFabUrl"]) || "";
  useEffect(() => {
    const runThePromise = async () => {
      const value = await getEachWeapon(weaponId, weaponName);
      if (value) {
        setWeaponData(value);
        setLoaded(true);
      } else {
        setLoaded(false);
      }
    };

    if (!loaded) {
      runThePromise();
    }
  }, [loaded]);

  return (
    <section>
      {!loaded && (
        <div className=" flex items-center justify-center my-auto w-full h-screen">
          404, !sorry try another modal Need time to add those
        </div>
      )}
      {loaded && (
        <div>
          {" "}
          <NavBar />
          <div className="xl:max-w-[1480px] mx-auto mt-9 px-4 space-y-6 mb-[96px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="w-full order-1">
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-white p-1 rounded-lg shadow-sm border">
                  <SketchfabModelViewer sketchFabUrl={sketchFabUrI} />
                </div>
              </div>
              <div className="w-full order-2">
                <WeaponBuySection
                  weaponData={{
                    shortDesc:
                      weaponData.history[0].points[0] +
                      weaponData.history[0]?.points[1],
                    stars: weaponData.stars,
                    noOfPeopleReviewed: weaponData.noOfPeopleReviewed,
                    name: weaponData.name,
                  }}
                  embedUrl={sketchFabUrI}
                />
              </div>
            </div>
            <WeaponDescription weaponData={weaponData} />
          </div>
          <Footer />
        </div>
      )}
    </section>
  );
};
