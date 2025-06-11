import { getDatabase, set, ref, get } from "firebase/database";
import {
  assualtRifles,
  tanks,
  semiAutoMatic,
  sniperRefiles,
  weaponAccessories,
  tnt,
  meleeWeapons,
  historicalWeapon,
} from "../../public/weapons";
import { type AiGenratedWeaponData } from "../../public/types/weapon";
import { app } from "../firebase/fireSdk";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { arrayUnion, doc, getFirestore, updateDoc } from "firebase/firestore";
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
  meleeWeapons,
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
const addDataWeapon = async (weaponData: AiGenratedWeaponData) => {
  try {
    const db = getDatabase(app);
    const name = weaponData[0].name;
    const id = weaponData[4].uniqueCode;

    await set(ref(db, `weaponData/${name}/${id}`), {
      sketchFabUrl: weaponData[4].sketchFabUrl,
      id,
      name,
      specsTech: weaponData[1].specsTech,
      appearance: weaponData[2].appearance,
      history: weaponData[3].history,
    });
    console.log(`Weapon data for ${name} saved successfully.`);
    return true;
  } catch (error) {
    console.error("Error saving weapon data:", error);
    throw error; // re-throw to let caller handle it
  }
};

const addWeaponToDB = async (weapon: AiGenratedWeaponData) => {
  try {
    const response = await addDataWeapon(weapon);
    console.log(weapon[0].name);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const userCreateAccount = async (email: string, password: string) => {
  try {
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error: any) {
    console.error("Account creation error:", error.code, error.message);
    return { success: false, error };
  }
};

export const userLoginAccount = async (email: string, password: string) => {
  try {
    const auth = getAuth(app);
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response.user) {
      //@ts-ignore
      sessionStorage.setItem("accessToken", response.user.accessToken);
      return { success: true };
    } else {
      console.log("Login failed: No user returned");
      return { success: false, error: "No user returned" };
    }
  } catch (error: any) {
    console.error("Login error:", error.code, error.message);
    return { success: false, error };
  }
};

export const addToWishlist = async (
  weaponId: string,
  imgSrc: string,
  name: string,
  inStock: number
) => {
  try {
    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.log("No user logged in.");
      return { data: null, status: false };
    }

    const userRef = doc(db, "users", user.uid);
    const item = {
      weaponId,
      imgSrc,
      name,
      inStock,
    };

    await updateDoc(userRef, {
      wishlist: arrayUnion(item),
    });

    return { data: item, status: true };
  } catch (error) {
    console.log("Error occurred in wishlist:", error);
    return { data: null, status: false, error };
  }
};

export const checkUser = () => {
  try {
    const token = sessionStorage.getItem("accessToken");
    if (!token) {
      throw new Error(
        "Session Storage is expired or not present, Re-Authenticate"
      );
    }
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.getIdToken);
        return { data: "", status: true };
      } else {
        console.log("No user logged in.");
        return { data: "", status: false };
      }
    });
  } catch (error) {
    console.log("Error has been occured during authentication", error);
    return { data: "", status: false };
  }
};
export { addArrayOfWeaponsToDB, addWeaponToDB, getEachWeapon };
