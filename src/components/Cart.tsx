import { useEffect, useState } from "react";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { NavBar } from "./ShopPage/NavBar";
import { Footer } from "./HomePage/Footer";
import {
  getFromCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../apis/app";
interface cartType {
  addedAt?: string;
  name: string;
  quantity: number;
  price: number;
  weaponId: string;
  inStock: number;
  imgSrc: string;
}
const ShoppingCartApp = () => {
  const [cartItems, setCartItems] = useState<cartType[]>([]);

  const updateQuantity = (weaponId: string, newQuantity: any) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.weaponId === weaponId ? { ...item, quantity: newQuantity } : item
      )
    );
    updateCartItemQuantity(weaponId, newQuantity);
  };

  const removeItem = (weaponId: string) => {
    setCartItems((items) => items.filter((item) => item.weaponId !== weaponId));
    removeFromCart(weaponId);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  //   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  useEffect(() => {
    const getFromCartHandler = async () => {
      try {
        const response = await getFromCart();
        if (response.status) {
          const data = response.data?.cart;
          setCartItems((prevData) => {
            const merged = [...prevData, ...data];

            const unique = Array.from(
              new Map(merged.map((item) => [item.weaponId, item])).values()
            );

            return unique;
          });
        }
      } catch (error) {
        console.log("Errror has been occured in getFromCartHandler", error);
        return error;
      }
    };
    getFromCartHandler();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#000000] text-white text-center text-sm py-2">
        Free Delivery Orders Over $100+ Don't Miss Out!
      </div>

      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <ArrowLeft className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-gray-600">Go Back</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Cart</h2>
            <p className="text-gray-600 mb-8">Home / Cart</p>

            {/* Cart Table Header */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-700">
                <div className="col-span-2">Product Details</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Price</div>
                <div className="text-center">Total</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.weaponId}
                  className="grid grid-cols-5 gap-4 p-4 border-b border-gray-200 items-center"
                >
                  <div className="col-span-2 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      <img src={item.imgSrc} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.weaponId, item.quantity - 1)
                        }
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.weaponId, item.quantity + 1)
                        }
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-center">${item.price.toFixed(2)}</div>

                  <div className="text-center flex items-center justify-center space-x-2">
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      onClick={() => removeItem(item.weaponId)}
                      className="p-1 rounded-full hover:bg-red-100 text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Total</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub-Total</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Delivery</span>
                  <div className="text-right">
                    <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                      <option>Standard Delivery (Free)</option>
                      <option>Express Delivery ($5.99)</option>
                    </select>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors mb-6">
                Check Out
              </button>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">We Accept</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded">
                    PayPal
                  </span>
                  <span className="bg-purple-600 text-white px-2 py-1 rounded">
                    Stripe
                  </span>
                  <span className="bg-blue-800 text-white px-2 py-1 rounded">
                    Pay
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    G
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Get 5 discount coins at the next step
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCartApp;
