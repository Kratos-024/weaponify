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
export const auth = getAuth();

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
    throw error;
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

export const addToCart = async (
  weaponId: string,
  imgSrc: string,
  name: string,
  price: number,
  inStock: number,
  quantity: number = 1
) => {
  const auth = getAuth();
  const db = getFirestore(app);
  const user = auth.currentUser;

  if (!user) return { status: false, message: "User not authenticated" };

  const userRef = doc(db, "users", user.uid);

  try {
    const docSnap = await getDoc(userRef);
    let existingCart = [];

    if (docSnap.exists() && docSnap.data().cart) {
      existingCart = docSnap.data().cart;
    }

    const existingItemIndex = existingCart.findIndex(
      (item: {
        weaponId: string;
        imgSrc: string;
        name: string;
        price: number;
        inStock: number;
        quantity: number;
      }) => item.weaponId === weaponId
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += quantity;
      await setDoc(
        userRef,
        {
          cart: existingCart,
        },
        { merge: true }
      );
    } else {
      await setDoc(
        userRef,
        {
          cart: arrayUnion({
            weaponId,
            imgSrc,
            name,
            price,
            inStock,
            quantity,
            addedAt: new Date().toISOString(),
          }),
        },
        { merge: true }
      );
    }

    return { status: true, message: "Item added to cart successfully" };
  } catch (err) {
    console.error("Firestore Error:", err);
    return { status: false, error: err, message: "Failed to add item to cart" };
  }
};

export const getFromCart = async () => {
  try {
    const auth = getAuth();
    const db = getFirestore(app);
    const user = auth.currentUser;

    if (!user) return { status: false, message: "User not authenticated" };

    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      const cart = userData.cart || [];

      return {
        status: true,
        data: userData,
        cart: cart,
        itemCount: cart.length,
        totalAmount: cart.reduce(
          (
            total: number,
            item: {
              weaponId: string;
              imgSrc: string;
              name: string;
              price: number;
              inStock: number;
              quantity: number;
            }
          ) => total + item.price * item.quantity,
          0
        ),
      };
    } else {
      return { status: false, message: "No cart found" };
    }
  } catch (error) {
    console.error("Error occurred while fetching cart:", error);
    return { status: false, error, message: "Failed to fetch cart" };
  }
};

export const updateCartItemQuantity = async (
  weaponId: string,
  newQuantity: number
) => {
  const auth = getAuth();
  const db = getFirestore(app);
  const user = auth.currentUser;

  if (!user) return { status: false, message: "User not authenticated" };

  const userRef = doc(db, "users", user.uid);

  try {
    const docSnap = await getDoc(userRef);

    if (docSnap.exists() && docSnap.data().cart) {
      let cart = docSnap.data().cart;

      const itemIndex = cart.findIndex(
        (item: {
          weaponId: string;
          imgSrc: string;
          name: string;
          price: number;
          inStock: number;
          quantity: number;
        }) => item.weaponId === weaponId
      );

      if (itemIndex !== -1) {
        if (newQuantity <= 0) {
          cart = cart.filter(
            (item: {
              weaponId: string;
              imgSrc: string;
              name: string;
              price: number;
              inStock: number;
              quantity: number;
            }) => item.weaponId !== weaponId
          );
        } else {
          cart[itemIndex].quantity = newQuantity;
        }

        await setDoc(userRef, { cart }, { merge: true });
        return { status: true, message: "Cart updated successfully" };
      } else {
        return { status: false, message: "Item not found in cart" };
      }
    } else {
      return { status: false, message: "Cart is empty" };
    }
  } catch (err) {
    console.error("Firestore Error:", err);
    return { status: false, error: err, message: "Failed to update cart" };
  }
};

export const removeFromCart = async (weaponId: string) => {
  const auth = getAuth();
  const db = getFirestore(app);
  const user = auth.currentUser;

  if (!user) return { status: false, message: "User not authenticated" };

  const userRef = doc(db, "users", user.uid);

  try {
    const docSnap = await getDoc(userRef);

    if (docSnap.exists() && docSnap.data().cart) {
      const cart = docSnap
        .data()
        .cart.filter(
          (item: {
            weaponId: string;
            imgSrc: string;
            name: string;
            price: number;
            inStock: number;
            quantity: number;
          }) => item.weaponId !== weaponId
        );

      await setDoc(userRef, { cart }, { merge: true });
      return { status: true, message: "Item removed from cart successfully" };
    } else {
      return { status: false, message: "Cart is empty or item not found" };
    }
  } catch (err) {
    console.error("Firestore Error:", err);
    return {
      status: false,
      error: err,
      message: "Failed to remove item from cart",
    };
  }
};

// export const clearCart = async () => {
//   const auth = getAuth();
//   const db = getFirestore(app);
//   const user = auth.currentUser;

//   if (!user) return { status: false, message: "User not authenticated" };

//   const userRef = doc(db, "users", user.uid);

//   try {
//     await setDoc(userRef, { cart: [] }, { merge: true });
//     return { status: true, message: "Cart cleared successfully" };
//   } catch (err) {
//     console.error("Firestore Error:", err);
//     return { status: false, error: err, message: "Failed to clear cart" };
//   }
// };

export const getCartItemCount = async () => {
  try {
    const cartData = await getFromCart();
    if (cartData.status) {
      return {
        status: true,
        count: cartData.cart?.length || 0,
        totalQuantity:
          cartData.cart?.reduce(
            (
              total: number,
              item: {
                weaponId: string;
                imgSrc: string;
                name: string;
                price: number;
                inStock: number;
                quantity: number;
              }
            ) => total + item.quantity,
            0
          ) || 0,
      };
    }
    return { status: false, count: 0, totalQuantity: 0 };
  } catch (error) {
    console.error("Error getting cart count:", error);
    return { status: false, count: 0, totalQuantity: 0 };
  }
};

export { addArrayOfWeaponsToDB, addWeaponToDB, getEachWeapon };
