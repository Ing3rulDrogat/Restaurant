"use client";
import React, { useState } from "react";

function LogIn() {
  const [animation, setanimation] = useState("");

  const animateBar = () => {
    if (animation !== "animate-BarRight") {
      setanimation("animate-BarRight");
    } else {
      setanimation("animate-BarLeft");
    }
  };
  const function2 = () => {};

  return (
    <div className="w-screen h-screen content-center justify-items-center">
      <div className="w-1/2 h-1/2 bg-amber-700 flex flex-col items-center">
        <div className="w-full flex flex-col  items-center">
          <ul className="flex justify-center">
            <li className="flex mx-3 text-3xl  cursor-pointer" onClick={animateBar}>
              Log-In
            </li>
            <li className="mx-3 text-3xl cursor-pointer " onClick={animateBar}>
              Sign-Up
            </li>
          </ul>
          <div className="bg-black w-1/3 h-1  overflow-hidden">
            <div className={`bg-green-500 w-1/2 h-full ${animation}`}></div>
          </div>
        </div>
        <div className="bg-green-300 w-2/3 h-2/3 my-10">
          {/* Log-In */}
          <div></div>
          {/* Sign Up */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
