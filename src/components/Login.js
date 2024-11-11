import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="bg-cover bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg')]">
      <Header />
      <form className="w-4/12 bg-black bg-opacity-80 m-auto px-20 py-14">
        <h1 className="text-4xl font-bold text-white mb-3">
          {isRegistered ? "Sign In" : "Sign Up"}
        </h1>
        {!isRegistered && (
          <input
            type="text"
            placeholder="First Name"
            className="border-[1px] text-white w-full mt-4 p-3 rounded-md bg-opacity-5 bg-black"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="border-[1px] text-white w-full mt-4 p-3 rounded-md bg-opacity-5 bg-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-[1px] text-white w-full mt-4 p-3 rounded-md  bg-opacity-5 bg-black"
        />
        <button
          type="submit"
          className="bg-red-600 text-white w-full rounded-md p-2  mt-4 font-semibold"
        >
          {isRegistered ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 mt-4 mb-20 ">
          {isRegistered ? "New to Netflix? " : "Already registered "}
          <span
            className="text-white font-semibold hover:underline"
            onClick={() => {
              setIsRegistered(!isRegistered);
            }}
          >
            {isRegistered ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;