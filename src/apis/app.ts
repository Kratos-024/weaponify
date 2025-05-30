import { getDatabase, set, ref } from "firebase/database";
import app from "../firebase/fireSdk";
const addWeapon = (weaponUrl: string, weaponModel: string, _id: number) => {
  try {
    const db = getDatabase(app);

    set(ref(db, `weaponUrl/${weaponModel}/${_id}`), {
      urlString: weaponUrl,
    });
  } catch (error) {
    console.log(error);
  }
};
//  assualtRefile.map((weaponUrl: string) => {
//     try {
//       addWeapon(weaponUrl, "Assualt Refile", _id);
//       _id++;
//     } catch (error) {
//       console.log(error);
//     }
//   });
export default addWeapon;
