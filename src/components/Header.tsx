"use client";
import { useState } from "react";
import Logo from "../../public/Logo.png";
import Link from "next/link";

function Header() {
  const [showSideBar, setshowSideBar] = useState(false);
  const [animationType0, setanimationType0] = useState("");
  const [animationType1, setanimationType1] = useState("");
  const [animationType2, setanimationType2] = useState("");

  const openSideBar = () => {
    console.log("Works so far");
    setshowSideBar(!showSideBar);
    if (animationType0 == "animate-topBurgerIcon") {
      setanimationType0("animate-topBurgerIconRe");
      setanimationType1("animate-middleBurgerIconRe");
      setanimationType2("animate-bottomBurgerIconRe");
    } else {
      setanimationType0("animate-topBurgerIcon");
      setanimationType1("animate-middleBurgerIcon");
      setanimationType2("animate-bottomBurgerIcon");
    }
  };

  return (
    <>
      <div className="sticky top-0 w-full h-35 bg-gradient-to-t  from-opacity to-black flex justify-between items-center animate-easeInTop">
        <div className="flex w-3/12 h-full items-center">
          <div className=" w-4/12 h-full content-center justify-items-center cursor-pointer" onClick={openSideBar}>
            <div className={`bg-white w-12 h-1 rounded-4xl my-2 ${animationType0}`}></div>
            <div className={`bg-white w-12 h-1 rounded-4xl my-2 ${animationType1}`}></div>
            <div className={`bg-white w-12 h-1 rounded-4xl my-2 ${animationType2}`}></div>
          </div>
          <Link href={"/menu"}>Menu</Link>
        </div>

        <div className=" w-2/12 h-full flex items-center justify-center">
          <img src={Logo.src} className="w-auto h-full"></img>
        </div>
        <div className=" w-3/12 h-full"></div>
      </div>
      {showSideBar == true ? (
        <div className=" w-full h-screen  sticky top-35">
          <div className="bg-red-300 w-1/4 h-11/12 cursor-pointer animate-easeInLeft"></div>
        </div>
      ) : (
        <div className=" w-full h-screen  sticky top-35">
          {/* <div className="bg-red-300 w-1/4 h-11/12 cursor-pointer hidden animate-easeInLeft" style={{ animationDirection: "reverse" }}></div> */}
          <div className="bg-red-300 w-1/4 h-11/12 cursor-pointer hidden animate-easeOutLeft"></div>
        </div>
      )}
    </>
  );
}

export default Header;
