"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserCollection } from ".//../lib/firestore-db"

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [user, setUser] = useState([])
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setUser({username, phone, email})
      })
      .catch((error) => {
        console.log(error);
      });
    createUserCollection();
  };
  return (
    <div className="sign-in-container">
      <h1 className="pt-10 text-2xl text-center w-[50%] mx-auto">
        Create Account
      </h1>
      <form onSubmit={signUp} className="mt-3 md:w-[90%] w-[80%] mx-auto">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <div id="signup-name" className="mx-5 text-black">
            Name{" "}
          </div>
          <input
            id="signup-name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="rounded-full w-full shadow-md px-5 p-3 mb-1 bg-transparent text-black border-2 border-black"
          />
        </div>

        <div>
          <div id="signup-name" className="mx-5 text-black">
            Phone No.{" "}
          </div>
          <input
            id="signup-phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="rounded-full w-full shadow-md px-5 p-3 mb-1 bg-transparent text-black border-2 border-black"
          />
        </div>

        <div>
          <div id="signup-email" className="mx-5 text-black">
            Email{" "}
          </div>
          <input
            id="signup-email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="rounded-full w-full shadow-md px-5 p-3 mb-3 mx-3 bg-transparent text-black border-2 border-black"
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
        
        <div className="md:w-[30%] w-[50%] mx-auto pb-10">
        <button
          type="submit"
          className="rounded-full w-full shadow-md px-5 p-3 bg-transparent text-black border-2 border-black"
        >
          Sign Up
        </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
