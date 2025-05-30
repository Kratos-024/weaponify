import { getDatabase, set, ref } from "firebase/database";
import app from "../firebase/fireSdk";
import {
  assualtRefile,
  tanks,
  semiAutoMatic,
  sniper,
} from "../../public/weapons";
const addWeapon = (
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
const arrayWeapon = [assualtRefile, tanks, semiAutoMatic, sniper];
function addToDB() {
  arrayWeapon.map((weaponObject) => {
    weaponObject.map((item) => {
      try {
        addWeapon(item.sketchFabUrl, item.category, item.uniqueCode, item.sNo);
      } catch (error) {
        console.log(error);
      }
    });
  });
}
export default addToDB;
