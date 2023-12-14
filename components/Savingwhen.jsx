import { Plane } from "lucide-react";
import Image from "next/image";
import React from "react";

const Savingwhen = () => {
  return (
    <div className="py-6">
      <div className="grid md:cols-2">

      </div>
      <div className="rounded-full shadow-md px-5 p-3 mx-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
        <Plane />
        Travel
      </div>
      <h1 className="pt-10 text-2xl text-center text-black w-[80%] mx-auto">
        When will you Travel ?
      </h1>
      <Image
        src="/img/calendar.png"
        className="mx-auto my-5"
        width={100}
        height={100}
      />
      <input type="date" className="rounded-full shadow-md py-4px-5 p-3 mb-3 mx-3 w-[90%] bg-transparent text-black border-2 border-black" />
      <div className="mx-auto w-[50%]">
      <button className="rounded-full shadow-md px-16 text-center p-3 m-3 bg-transparent text-black border-2 border-black">
        Next
      </button>
      </div>

      <div className="rounded-full shadow-md px-5 p-3 m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
        <Plane />
        Travel
      </div>
      <h1 className="pt-10 text-2xl text-center text-black w-[60%] mx-auto">
        How much Money do you need ?
      </h1>
      <Image
        src="/img/moneybag.png"
        className="mx-auto py-3"
        width={150}
        height={150}
      />
      <div className="mx-5 text-black">Current Cost</div>
      <input className="rounded-full shadow-md px-5 p-3 mb-3 mx-3 w-[90%] bg-transparent text-black border-2 border-black" />
      <div className="mx-auto w-[50%]">
      <button className="rounded-full justify-end shadow-md px-16 p-3 m-3 bg-transparent text-black border-2 border-black">
        Next
      </button>
      </div>
    </div>
  );
};

export default Savingwhen;
