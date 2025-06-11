import { useParams } from "react-router-dom";
import { NavBar } from "../components/ShopPage/NavBar";
import { useEffect, useState } from "react";
import { getEachWeapon } from "../apis/app";
import { fakeWeapon } from "../../public/weapon";
import type { ResponseWeaponData } from "../../public/types/weapon";
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
        // const data = {
        //   uniqueCode: weaponId,
        //   sketchFabUrl:
        //     '<div class="sketchfab-embed-wrapper"> <iframe title="AK-74" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/44c6581b852a4a03a0cd509be06f0dd8/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ak-74-44c6581b852a4a03a0cd509be06f0dd8?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> AK-74 </a> by <a href="https://sketchfab.com/dimalukomo?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> madridista_9248 </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
        // };
        // const generatedData = await GetTheWeaponData(
        //   data.sketchFabUrl,
        //   weaponName,
        //   weaponId
        // );
        // console.log(generatedData);
        // setLoaded(true);
        // let jsonString = generatedData || "";
        // if (jsonString.includes("```")) {
        //   jsonString = jsonString.replace(/```json|```/g, "");
        // }
        // try {
        //   const cleanedData = JSON.parse(jsonString);
        //   addWeaponToDB(cleanedData);
        //   setWeaponData(cleanedData);
        // } catch (err) {
        //   console.error("Invalid JSON:", err);
        // }
      }
    };

    if (!loaded) {
      runThePromise();
    }
  }, [loaded]);

  if (!loaded) return <div>Loading...</div>;

  return (
    <section>
      <NavBar />
      <div className="xl:max-w-[1480px] mx-auto mt-9 px-4 space-y-6 mb-[96px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="w-full order-1">
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-white p-1 rounded-lg shadow-sm border">
              <SketchfabModelViewer sketchFabUrl={sketchFabUrI} />
            </div>
          </div>
          <div className="w-full order-2">
            <WeaponBuySection embedUrl={sketchFabUrI} />
          </div>
        </div>
        <WeaponDescription weaponData={weaponData} />
      </div>
      <Footer />
    </section>
  );
};
