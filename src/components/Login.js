import React, { useRef, useState } from "react";
import Header from "./Header";
import checkFormValidation from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleSubmitForm = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    console.log(emailValue);

    const message = checkFormValidation(emailValue, passwordValue);
    setErrorMsg(message);
    if (message) return;
    if (isRegistered) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <img
        alt="netflix-banner"
        className="bg-no-repeat absolute top-0 h-full w-full z-[1]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />

      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 bg-black bg-opacity-70 m-auto px-20 py-14 mt-24 z-10 relative shadow-2xl shadow-black "
      >
        <h1 className="text-4xl font-bold text-white mb-3">
          {isRegistered ? "Sign In" : "Sign Up"}
        </h1>
        {!isRegistered && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="border-[1px] text-white w-full mt-4 p-3 rounded-md bg-black"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          ref={email}
          className="border-[1px] text-white w-full mt-4 p-3 rounded-md bg-black"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="border-[1px] text-white w-full mt-4 p-3 rounded-md bg-black"
        />
        {errorMsg && <p className="text-red-600 mt-4 mb-4">{errorMsg}</p>}
        <button
          type="submit"
          className="bg-red-600 text-white w-full rounded-md p-2  mt-4 font-semibold"
          onClick={handleSubmitForm}
        >
          {isRegistered ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 mt-4 mb-20 ">
          {isRegistered ? "New to Netflix? " : "Already registered "}
          <span
            className="text-white font-semibold hover:underline cursor-pointer"
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
