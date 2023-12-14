"use client";
import React, { useState, useEffect } from "react";
import { storage } from "../lib/firebase";
import {getDownloadURL, ref , uploadBytes} from "firebase/storage"
import {v4} from "uuid"

const Upload = () => {
    const[imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
        })
    })
  };

  useEffect(() => {

  }, [])
  return ( 
    <div className="h-screen">
        <h2 className="px-3 text-lg py-4">Scan your Invoices / Bills</h2>
        <div className="w-[90%] mx-auto py-2">
      <input type="file" onChange={(e) => {setImageUpload(e.target.files[0]);}}/>

        </div>
      <button onClick={uploadImage} className="rounded-full w-[90%] my-2 shadow-md px-5 p-3 mb-3 mx-3 bg-transparent text-black border-2 border-black"> Upload Screenshot</button>
    </div>
  );
};

export default Upload;
