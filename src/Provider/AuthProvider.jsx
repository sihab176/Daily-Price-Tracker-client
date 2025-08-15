import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // Sign Up
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //logIn
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logOut user
  const logOutUser = () => {
    localStorage.removeItem("access-token");
    setLoader(true);
    return signOut(auth);
  };

  //google login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  //password reset
  const passwordRest = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //save user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      if (currentUser) {
        // Get Firebase token

        // Send to backend to get your custom JWT
        try {
          const res = await fetch("http://localhost:3000/jwt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: currentUser.email }),
          });

          const data = await res.json();

          // Save JWT in localStorage
          localStorage.setItem("access-token", data.token);
        } catch (error) {
          console.error("JWT Error:", error);
        }
      } else {
        // Clear JWT on logout
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    createUser,
    loginUser,
    logOutUser,
    user,
    googleLogin,
    updateUser,
    setUser,
    loader,
    setLoader,
    passwordRest,
  };

  return <AuthContext value={authData}>{children} </AuthContext>;
};

export default AuthProvider;
