import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  signInWithGoogle,
  userCreateAccount,
  userLoginAccount,
} from "../apis/app";
import { toast } from "react-toastify";

export const AccountCreation = ({
  showAccountHandler,
}: {
  showAccountHandler: any;
}) => {
  const [createAccount, setCreateAccount] = useState(false);
  const [_, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userCreateAccountHandler = async () => {
    const response = await userCreateAccount(email, password);
    if (response.success) {
      toast.success(
        "Account created successfully now login with same crendentials"
      );
      setCreateAccount(!createAccount);
      window.location.reload();
    } else {
      toast.error("Something went wrong please try again");
    }
  };
  const userLoginAccountHandler = async () => {
    const response = await userLoginAccount(email, password);

    if (response.success) {
      toast.success("Logged in");
      showAccountHandler();
      window.location.reload();
    } else {
      toast.error("Something went wrong please try again");
    }
  };

  const signInWithGoogleHandler = async () => {
    const provider = await signInWithGoogle();
    if (provider.success) {
      toast.success("Logged in");
      showAccountHandler();
      window.location.reload();
    } else {
      toast.error("Something went wrong please try again");
    }
  };
  return (
    <section className="bg-black/30 fixed inset-0 z-50 backdrop-blur-sm w-full h-screen">
      <div className="group relative flex items-center justify-center h-screen">
        {/* {"Login Account"} */}

        <div
          className={`bg-white w-[420px] rounded-2xl px-3 py-5 transition-all duration-300 ${
            createAccount
              ? "opacity-0 translate-y-[-20px]"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div onClick={showAccountHandler} className=" cursor-pointer">
            <RxCross2 className=" absolute right-5 w-8 h-8" />{" "}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-white text-[36px]">
              <img className=" w-[64px] " src="/hydra.png" />
              <h1 className=" custom-orbitron text-[29px] text-black font-bold">
                Weaponify
              </h1>
            </div>
            <div className="b text-center">
              <h3 className="font-semibold text-[28px]">Welcome Back</h3>
              <p className="text-md">Please enter your email to sign in</p>
            </div>
            <div className="flex gap-5 mt-3">
              <div onClick={signInWithGoogleHandler}>
                {" "}
                <img
                  className="w-[28px] cursor-pointer h-[28px]"
                  src="/google-icon-logo-svgrepo-com.svg"
                />
              </div>

              <img
                className="w-[28px] cursor-pointer h-[28px]"
                src="/apple-black-logo-svgrepo-com.svg"
              />
            </div>
            <div className="flex mt-2 items-center gap-4 text-gray-500">
              <hr className="flex-1" />
              <span className="text-sm">or</span>
              <hr className="flex-1" />
            </div>
          </div>
          <div className="px-4 py-4 flex gap-3 flex-col">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="JohnDoe@example"
                className="w-full px-3 rounded-lg py-2 outline-none bg-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="apple123@"
                className="w-full px-3 rounded-lg py-2 outline-none bg-gray-200"
              />
            </div>
            <div>
              <button
                onClick={userLoginAccountHandler}
                className="bg-black w-full cursor-pointer active:opacity-90 text-white rounded-lg py-2"
              >
                Sign In
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <a
                onClick={() => {
                  setCreateAccount(!createAccount);
                }}
                href="#"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Create Now
              </a>
            </p>
          </div>
        </div>

        {/* {"Create Account"} */}
        <div
          className={`absolute bg-white w-[420px] rounded-2xl px-3 py-5 transition-all duration-300 ${
            createAccount
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[20px] pointer-events-none"
          }`}
        >
          <div onClick={showAccountHandler} className=" cursor-pointer">
            <RxCross2 className=" absolute right-5 w-8 h-8" />{" "}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-white text-[36px]">
              <img className=" w-[64px] " src="./images/Logo/hydra.png" />
              <h1 className=" custom-orbitron text-[29px] text-black font-bold">
                Weaponify
              </h1>
            </div>
            <div className="b text-center">
              <h3 className="font-semibold text-[28px]">Create Account</h3>
              <p className="text-md">Please enter your details to sign up</p>
            </div>
            <div className="flex gap-5 mt-3">
              <div onClick={signInWithGoogleHandler}>
                {" "}
                <img
                  className="w-[28px] cursor-pointer h-[28px]"
                  src="./images/svgs/google-icon-logo-svgrepo-com.svg"
                  alt="Google"
                />
              </div>

              <img
                alt="Apple"
                className="w-[28px] cursor-pointer h-[28px]"
                src="./images/svgs/apple-black-logo-svgrepo-com.svg"
              />
            </div>
            <div className="flex mt-2 items-center gap-4 text-gray-500">
              <hr className="flex-1" />
              <span className="text-sm">or</span>
              <hr className="flex-1" />
            </div>
          </div>
          <div className="px-4 py-4 flex gap-3 flex-col">
            <div className="flex flex-col gap-1">
              <label>Full Name</label>
              <input
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                placeholder="John Doe"
                className="w-full px-3 rounded-lg py-2 outline-none bg-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="JohnDoe@example.com"
                className="w-full px-3 rounded-lg py-2 outline-none bg-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Create a strong password"
                className="w-full px-3 rounded-lg py-2 outline-none bg-gray-200"
              />
            </div>
            <div>
              <button
                onClick={userCreateAccountHandler}
                className="bg-black w-full cursor-pointer active:opacity-90 text-white rounded-lg py-2"
              >
                Create Account
              </button>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <a
                onClick={() => {
                  setCreateAccount(!createAccount);
                }}
                href="#"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
