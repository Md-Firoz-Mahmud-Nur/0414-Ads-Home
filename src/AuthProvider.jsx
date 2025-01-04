import { useEffect, useState } from "react";
// import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase.config";
import useAxiosPublic from "./Hooks/useAxiosPublic";
import AuthContext from "./AuthContext";

// export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const updateExistingUserProfile = (name, photoUrl) => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photoUrl,
  //   })
  //     .then((result) => {
  //       return result;
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  const updateExistingUserProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleAuthProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth 73", currentUser);

      setUser(currentUser);
      // setLoading(false);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        console.log(userInfo);

        axiosPublic.post("/jwt", userInfo).then((res) => {
          console.log("jwt hit");
          console.log(res);
          console.log("res hit");

          if (res.data.token) {
            console.log("try to set token");

            localStorage.setItem("access-token", res.data.token);
            console.log("token set done");

            setLoading(false);
          }
        });
      } else {
        console.log("try to remove token");
        localStorage.removeItem("access-token");
        setLoading(false);
        console.log("token remove done");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const AuthInfo = {
    user,
    loading,
    createNewUser,
    updateExistingUserProfile,
    login,
    signOutUser,
    googleLogin,
    setUser,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
