import { useParams } from "react-router-dom";
import { NavBar } from "../components/ShopPage/NavBar";
import WeaponInfoHeader from "../components/WeaponInfo/WeaponInfoHeader";
import { useEffect, useState } from "react";
import { getEachWeapon } from "../apis/app";
import { fakeWeapon, GetTheWeaponData } from "../../public/weapon";
import type { ResponseWeaponData } from "../../public/types/weapon";

export const WeaponPage = () => {
  const weaponId = useParams()["id"] || "";
  const weaponName = useParams()["name"] || "";
  const [weaponData, setWeaponData] = useState<ResponseWeaponData>(fakeWeapon);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const runThePromise = async () => {
      const value = await getEachWeapon(weaponId, weaponName);
      if (value) {
        setWeaponData(value);
        setLoaded(true);
      } else {
        const imgUrls = [
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIoZxFaIlX85kRGpfmjoksYBEepeCP6e_i6nusKATU68vRyR567f_1C8JgOjbbyPAQCuPMmWn5WvTHKUGOg47PLKScGFysDy2z4VzA7KiuYTIT1Nme4b2euw",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8piGj2lUD8UgJadBF74NYup_4b4RdCGD3nRgEkJyLSRjRygVuVz55ADC_QuIFkfP1T3HI5XIGFDwNOxYSC2L0MOQMDbMz2R_5UobA9UHHfLcychFPRZfI",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGPSRl6sjqgdxYr2XPNNEBfJ95l38yft4nxDjcvYorNQj4yXwtLWldCy-2stG2xCWtIUxuvvOhcY5wNrOWE5eQRaBvJGeM3U7xcVOQ12Zl",
        ];
        const data = {
          uniqueCode: "978a546f-8a86-4fe9-ba58-c7febf38a663",
          sketchFabUrl:
            '<div class="sketchfab-embed-wrapper"> <iframe title="AK-74" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/44c6581b852a4a03a0cd509be06f0dd8/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ak-74-44c6581b852a4a03a0cd509be06f0dd8?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> AK-74 </a> by <a href="https://sketchfab.com/dimalukomo?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> madridista_9248 </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
        };
        const generatedData = await GetTheWeaponData(
          data.sketchFabUrl,
          imgUrls,
          data.uniqueCode
        );
        console.log(generatedData);
      }
      setWeaponData(value);
      setLoaded(true);
    };
    runThePromise();
  }, []);

  if (!loaded) return <div>Loading...</div>;

  return (
    <section>
      <NavBar />
      <WeaponInfoHeader weaponData={weaponData} />
    </section>
  );
};
