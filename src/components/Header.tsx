"use client";
import { useEffect, useState } from "react";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { getCurrentUser } from "@/actions/user.actions";
import { createClient } from "@/utils/supabase/server";

function Header() {
  const [showSideBar, setshowSideBar] = useState(false);
  const [animationType0, setanimationType0] = useState("");
  const [animationType1, setanimationType1] = useState("");
  const [animationType2, setanimationType2] = useState("");

  const [isUserSignedIn, setisUserSignedIn] = useState(false);
  const [userData, setuserData] = useState<UserData>({
    email: "",
    name: "",
  });
  type UserData = {
    email: string;
    name: string;
  };

  const getUser = async () => {
    const userdata = await getCurrentUser();
    if (userdata === null) {
      console.log("User not logged in");
      setisUserSignedIn(false);
    } else {
      console.log("User logged in " + userdata?.email);
      setisUserSignedIn(true);
      console.log(userdata);
      userData.email = userdata?.email ?? "";
      userData.name = userdata?.user_metadata.full_name ?? userdata?.user_metadata.first_name ?? "";
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {}, []);

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

  const openAccountMenu = () => {};

  return (
    <>
      <div className="fixed top-0 w-full h-35 bg-gradient-to-t from-opacity to-20% to-black/80 flex opacity-0 justify-between items-center animate-easeInTop z-10 ">
        <div className="flex w-3/12 h-full items-center">
          <div className=" w-4/12 h-full content-center justify-items-center cursor-pointer" onClick={openSideBar}>
            <div className={`bg-white w-12 h-1 rounded-4xl my-2 ${animationType0}`}></div>
            <div className={`bg-white w-12 h-1 rounded-4xl my-2 ${animationType1}`}></div>
            <div className={`bg-white w-12 h-1 rounded-4xl my-2 ${animationType2}`}></div>
          </div>
          <Link href={"/menu"} className="hover:text-amber-500 transition-all text-lg hidden md:flex">
            Menu
          </Link>
        </div>

        <div className="flex-[2] md:flex-none w-2/12 h-full flex items-center justify-center">
          <Link href={"/"}>
            <img src={Logo.src} className="md:w-auto h-full mb-2 cursor-pointer"></img>
          </Link>
        </div>
        <div className=" w-3/12 h-full content-center  flex items-center justify-center">
          {isUserSignedIn == false ? (
            <>
              <Link href={"/registration"} className="text-lg hover:text-amber-500 transition-all flex items-center">
                <VscAccount className="md:mx-3 md:text-2xl  text-4xl" />
                <p className="hidden md:block">Log In / Sign Up</p>
              </Link>
            </>
          ) : (
            <>
              <Link href={"/account"}>
                <div className="flex cursor-pointer items-center" onClick={openAccountMenu}>
                  <VscAccount className="md:mx-3 text-4xl" />
                  <p className="text-lg hidden md:block">Hello, </p> {userData.name}
                </div>
              </Link>
            </>
          )}
          <Link href={"/book-a-table"}>
            <button className="hidden md:block mx-10 px-8 py-3 cursor-pointer rounded-2xl border-2  hover:border-amber-500 hover:text-amber-500 transition-all">
              Book a Table
            </button>
          </Link>
        </div>
      </div>
      {showSideBar == true ? (
        <div className=" w-1/5 h-screen fixed top-35  z-10">
          <div className="bg-black/70 border-r-2 border-t-2 rounded-r-2xl border-amber-500 w-full h-11/12 cursor-pointer animate-easeInLeft flex flex-col items-center">
            <div className=" w-11/12">
              <Link href={"/menu"}>
                <button className=" px-20 py-5 my-2 w-full text-lg cursor-pointer border-1 border-amber-500/0 hover:border-amber-500/100 rounded-2xl transition-all">
                  Menu
                </button>
              </Link>
            </div>
            <div className="w-11/12">
              <Link href={"/book-a-table"}>
                <button className=" px-20 py-5 my-2 w-full text-lg cursor-pointer border-1 border-amber-500/0 hover:border-amber-500/100 rounded-2xl transition-all">
                  Book Table
                </button>
              </Link>
            </div>
            {isUserSignedIn == false ? (
              <div className="w-11/12">
                <Link href={"/registration"}>
                  <button className=" px-20 py-5 my-2 w-full text-lg cursor-pointer border-1 border-amber-500/0 hover:border-amber-500/100 rounded-2xl transition-all">
                    Log In / Sign Up
                  </button>
                </Link>
              </div>
            ) : (
              <div className="w-11/12">
                <Link href={"/account"}>
                  <button className=" px-20 py-5 my-2 w-full text-lg cursor-pointer border-1 border-amber-500/0 hover:border-amber-500/100 rounded-2xl transition-all">
                    Account
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className=" w-1/5 h-screen fixed top-35 z-10">
          {/* <div className="bg-red-300 w-1/4 h-11/12 cursor-pointer hidden animate-easeInLeft" style={{ animationDirection: "reverse" }}></div> */}
          <div className="bg-black/70 hidden border-r-2 border-t-2 rounded-r-2xl border-amber-500 w-full h-11/12 cursor-pointer animate-easeOutLeft"></div>
        </div>
      )}
    </>
  );
}

export default Header;
