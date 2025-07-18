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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
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
