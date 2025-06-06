"use client";
import React, { ReactNode, useState } from "react";
import { logInUser } from "@/actions/registration.action";
import { signUpUser } from "@/actions/registration.action";

import { CiLogin } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import { ErrorType } from "next/dist/client/components/react-dev-overlay/pages/pages-dev-overlay";

function LogIn() {
  //EXPAND ON THE ERROR SYSTEM. IN THE SIGN UP, IF EVERYTHING IS EMPTY ERROR IS "ANONYMOUS SIGN-INS ARE DISABLED" @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const [animation, setanimation] = useState("");
  const [errorOccuredLogIn, seterrorOccuredLogIn] = useState<unknown>(null);
  const [errorOccuredSignUp, seterrorOccuredSignUp] = useState<unknown>(null);

  const [logInData, setlogInData] = useState<DataType>({
    email: "",
    password: "",
    firstName: "",
  });
  const [signUpData, setsignUpData] = useState<DataType>({
    email: "",
    password: "",
    firstName: "",
  });

  type DataType = {
    email: string;
    password: string;
    firstName: string;
  };

  const animateBar = () => {
    if (animation !== "animate-BarRight") {
      setanimation("animate-BarRight");
    } else {
      setanimation("animate-BarLeft");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes("log")) {
      if (name.includes("Email")) {
        logInData.email = value;
      } else {
        logInData.password = value;
      }
    } else {
      if (name.includes("Email")) {
        signUpData.email = value;
      } else if (name.includes("Password")) {
        signUpData.password = value;
      } else {
        signUpData.firstName = value;
      }
    }
  };

  const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = await logInUser(logInData.email, logInData.password);
    seterrorOccuredLogIn(error);
  };

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = await signUpUser(signUpData.email, signUpData.password, signUpData.firstName);
    seterrorOccuredSignUp(error);
  };

  return (
    <div className="w-screen h-screen content-center justify-items-center bg-gradient-to-t from-black from-5% to-gray-600">
      <div className="w-2/5  h-2/3 bg-white/55 flex flex-col items-center rounded-3xl shadow-lg shadow-cyan-700/10 ">
        <div className="w-full flex flex-col  items-center">
          <ul className="flex justify-center">
            <li className="flex mx-3 text-3xl  cursor-pointer" onClick={animateBar}>
              Log In
            </li>
            <li className="mx-3 text-3xl cursor-pointer " onClick={animateBar}>
              Sign Up
            </li>
          </ul>
          <div className="bg-black w-1/2  h-1  overflow-hidden">
            <div className={`bg-cyan-500 w-1/2 h-full ${animation}`}></div>
          </div>
          <div></div>
        </div>
        {animation !== "animate-BarRight" ? (
          <div className="w-2/3 h-2/3 my-10">
            {/* Log-In */}
            <div className="">
              <form
                onSubmit={(e) => {
                  logIn(e);
                }}
                className="flex flex-col items-center"
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  name="logInEmail"
                  onChange={(e) => handleChange(e)}
                  className="mb-4 p-2 border border-black rounded text-black placeholder-black"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="logInPassword"
                  onChange={(e) => handleChange(e)}
                  className="mb-4 p-2 border border-black rounded text-black placeholder-black"
                />
                {errorOccuredLogIn ? <p className="text-red-500 font-bold">Error: {JSON.stringify(errorOccuredLogIn)}</p> : <></>}
                <button className="flex items-center bg-amber-500 text-black px-4 py-2 rounded hover:bg-cyan-600 cursor-pointer transition-all">
                  Log In <CiLogin className="mx-2  text-2xl" />
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="w-2/3 h-2/3 my-10">
            <form onSubmit={(e) => signUp(e)}>
              <div className="flex flex-col items-center">
                <input
                  type="Input"
                  placeholder="FirstName"
                  name="signUpFirstName"
                  onChange={(e) => handleChange(e)}
                  className="mb-4 p-2 border border-black rounded text-black placeholder-black"
                />
                <input
                  type="Email"
                  placeholder="Email Address"
                  name="signUpEmail"
                  onChange={(e) => handleChange(e)}
                  className="mb-4 p-2 border border-black rounded text-black placeholder-black"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="signUpPassword"
                  onChange={(e) => handleChange(e)}
                  className="mb-4 p-2 border border-black rounded text-black placeholder-black"
                />
                {errorOccuredSignUp ? <p className="text-red-500 font-bold">Error: {JSON.stringify(errorOccuredSignUp)}</p> : <></>}

                <button className="flex items-center bg-amber-500 text-black px-2 py-2 rounded hover:bg-cyan-600 cursor-pointer transition-all">
                  Sign Up <FaUserPlus className="mx-2  text-1xl" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LogIn;
