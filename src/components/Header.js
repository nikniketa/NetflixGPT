import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, WEB_LANGUAGE } from "../utils/constants";
import { toggleGPTView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.gpt.gptView);
  const dispatch = useDispatch();
  useEffect(() => {
    handleGPTView();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const handleGPTView = () => {
    dispatch(toggleGPTView());
  };
  const onSignOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-full px-32 z-10 fixed">
      <img className="w-52 shadow-black float-left" src={LOGO} alt="logo" />
      {user && (
        <div className=" flex float-right mt-5">
          {gptView && (
            <select
              onChange={(e) => handleLanguage(e)}
              className="text-white bg-black mr-3"
            >
              {WEB_LANGUAGE.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="bg-green-700 text-white p-2 mr-2 rounded"
            onClick={handleGPTView}
          >
            {gptView ? "Home" : "GPT Search"}
          </button>
          <img
            alt="netflix-profile"
            src={user.photoURL}
            className="w-9 h-9 rounded-md"
          />
          {/* <p>Hi, {user.displayName}</p> */}
          <button onClick={onSignOutHandler} className="text-white ml-2">
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
