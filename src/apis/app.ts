import { getDatabase, set, ref } from "firebase/database";
import app from "../firebase/fireSdk";
import {
  tanks,
  assualtRifles,
  semiAutoMatic,
  sniperRefiles,
} from "../../public/weapons";
import { type Weapon } from "../../public/types/weapon";

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
const arrayWeapon = [sniperRefiles, tanks, semiAutoMatic, assualtRifles];
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

const addWeapon = async (weaponData: Weapon) => {
  try {
    const db = getDatabase(app);
    const name = weaponData[0].name;
    const id = weaponData[4].uniqueCode;
    const response = await set(ref(db, `weaponData/${name}/${id}`), {
      id: id,
      name: weaponData[0].name,
      specsTech: weaponData[1].specsTech,
      appearance: weaponData[2].appearance,
      history: weaponData[3].history,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const addWeaponToDB = async (weapon: Weapon) => {
  try {
    const response = await addWeapon(weapon);
    console.log(response);
  } catch (error) {}
};
export { addArrayOfWeaponsToDB, addWeaponToDB };
