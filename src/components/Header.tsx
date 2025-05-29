"use client";
import { useState } from "react";
import Logo from "../../public/Logo.png";

function Header() {
  const [showSideBar, setshowSideBar] = useState(false);

  const openSideBar = () => {
    console.log("Works so far");
    setshowSideBar(!showSideBar);
  };

  return (
    <>
      <div className="sticky top-0 w-full h-35 bg-gradient-to-t  from-opacity to-black flex justify-between items-center ">
        <div className="flex w-3/12 h-full items-center">
          <div className=" w-4/12 h-full content-center justify-items-center cursor-pointer" onClick={openSideBar}>
            <div className="bg-white w-4/12 h-1/32 rounded-4xl my-2"></div>
            <div className="bg-white w-4/12 h-1/32 rounded-4xl my-2"></div>
            <div className="bg-white w-4/12 h-1/32 rounded-4xl my-2"></div>
          </div>
          <p> Menu</p>
        </div>

        <div className=" w-2/12 h-full flex items-center justify-center">
          <img src={Logo.src} className="w-auto h-full "></img>
        </div>
        <div className=" w-3/12 h-full"></div>
      </div>
      {showSideBar == true ? (
        <div className=" w-full h-screen  sticky top-35">
          <div className="bg-red-300 w-1/4 h-10/12 cursor-pointer background"></div>
        </div>
      ) : (
        <div className=" w-full h-screen  sticky top-35 opacity-0">
          <div className="bg-red-300 w-1/4 h-10/12 cursor-pointer background"></div>
        </div>
      )}
    </>
  );
}

export default Header;
