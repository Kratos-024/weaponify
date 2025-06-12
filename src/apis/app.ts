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
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
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

export const auth = getAuth();
export const addToWishlist = async (
  weaponId: string,
  imgSrc: string,
  name: string,
  inStock: number
) => {
  const auth = getAuth();
  const db = getFirestore(app);
  const user = auth.currentUser;
  if (!user) return { status: false };

  const userRef = doc(db, "users", user.uid);

  try {
    await setDoc(
      userRef,
      {
        wishlist: arrayUnion({
          weaponId,
          imgSrc,
          name,
          inStock,
        }),
      },
      { merge: true }
    );
    return { status: true };
  } catch (err) {
    console.error("Firestore Error:", err);
    return { status: false, error: err };
  }
};
export const getWishlist = async () => {
  try {
    const auth = getAuth();
    const db = getFirestore(app);
    const user = auth.currentUser;

    if (!user) return { status: false, message: "User not authenticated" };

    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return { status: true, data: docSnap.data() };
    } else {
      return { status: false, message: "No wishlist found" };
    }
  } catch (error) {
    console.error("Error occurred while fetching wishlist:", error);
    return { status: false, error };
  }
};

// export const logOutUser = ()=>{
//   try {ET https://firestore.googleapis.com/google.firestore.v1.Firestore/Write/channel?gsessionid=od4fwoOZXSOi94_i3a-zPW8gH2sGcpAgDsQLO8UWRGM&VER=8&database=projects%2Fweaponify%2Fdatabases%2F(default)&RID=rpc&SID=I9AQoY0zRlPEwYxTNCO8dg&AID=0&CI=0&TYPE=xmlhttp&zx=e5rd8r38j318&t=1 net::ERR_ABORTED 400 (Bad Request)
//   const auth = getAuth()
//   await user
//   } catch (error) {

//   }
// }
export { addArrayOfWeaponsToDB, addWeaponToDB, getEachWeapon };
