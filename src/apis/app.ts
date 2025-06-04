import { getDatabase, set, ref, get } from "firebase/database";
import app from "../firebase/fireSdk";
import {
  assualtRifles,
  tanks,
  semiAutoMatic,
  sniperRefiles,
  weaponAccessories,
  tnt,
  meleWeapons,
  historicalWeapon,
} from "../../public/weapons";
import {
  type ResponseWeaponData,
  type Weapon,
} from "../../public/types/weapon";

const addWeapons = (
  weaponUrl: string,
  weaponModel: string,
  _id: string,
  sNo: number
) => {
  try {
    const db = getDatabase(app);

    set(ref(db, `weaponUrl/${weaponModel}/${_id}`), {
      urlString: weaponUrl,
      serialNumber: sNo,
      category: weaponModel,
      uniqueId: _id,
    });
  } catch (error) {
    console.log(error);
  }
};
const arrayWeapon = [
  assualtRifles,
  tanks,
  semiAutoMatic,
  sniperRefiles,
  weaponAccessories,
  tnt,
  meleWeapons,
  historicalWeapon,
];
function addArrayOfWeaponsToDB() {
  arrayWeapon.map((weaponObject) => {
    weaponObject.map((item) => {
      try {
        addWeapons(item.sketchFabUrl, item.category, item.uniqueCode, item.sNo);
      } catch (error) {
        console.log(error);
      }
    });
  });
}

const addDataWeapon = async (weaponData: ResponseWeaponData) => {
  try {
    const db = getDatabase(app);
    const name = weaponData["name"];
    const id = weaponData["id"];
    const response = await set(ref(db, `weaponData/${name}/${id}`), {
      sketchFabUrl: weaponData["sketchFabUrl"],
      id: id,
      name: weaponData.name,
      specsTech: weaponData.specsTech,
      appearance: weaponData.appearance,
      history: weaponData.history,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getEachWeapon = async (id: string, name: string) => {
  try {
    const db = getDatabase(app);
    const snapshot = await get(ref(db, `weaponData/${name}/${id}`));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const addWeaponToDB = async (weapon: ResponseWeaponData) => {
  try {
    const response = await addDataWeapon(weapon);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { addArrayOfWeaponsToDB, addWeaponToDB, getEachWeapon };
