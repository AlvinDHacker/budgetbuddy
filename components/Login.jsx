"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../lib/firebase";
// import { createUserDocument } from ".//../lib/firestore-db"

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    //   createUserDocument(email);
  };
  return (
    <div className="sign-in-container">
      <h1 className="pt-10 text-2xl text-center w-[50%] mx-auto">
        Log In to your Account
      </h1>
      <form onSubmit={login} className="my-3 md:w-[90%] w-[80%] mx-auto">
        <div className="grid md:grid-cols-2 gap-3">
            <div>
        <div id="signup-email" className="mx-5 text-black">
          Email{" "}
        </div>
        <input
          id="signup-email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="rounded-full w-full shadow-md px-5 p-3 mb-3 bg-transparent text-black border-2 border-black"
        />
            </div>
            <div>
        <div id="signup-password" className="mx-5 text-black">
          Password{" "}
        </div>
        <input
          type="password"
          id="signup-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="rounded-full w-full shadow-md px-5 p-3 mb-3 bg-transparent text-black border-2 border-black"
        />
            </div>

        </div>
        <div className="w-[30%] mx-auto">
        <button
          type="submit"
          className="rounded-full my-5 w-full shadow-md px-5 p-3 mb-3 mx-3 bg-transparent text-black border-2 border-black"
        >
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
