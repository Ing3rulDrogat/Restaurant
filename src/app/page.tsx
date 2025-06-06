"use client";
import Header from "@/components/Header";
import { Galada } from "next/font/google";
import { getCurrentUser } from "@/actions/user.actions";
import Link from "next/link";

const galadaFont = Galada({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="w-full min-h-screen relative z-20">
      <Header />
      <div className="bg-[url('/TempBG.png')]  bg-fixed  bg-repeat bg-top bg-contain min-h-screen">
        <div className="backdrop-brightness-50 flex flex-col min-h-screen">
          <div className=" justify-items-center min-h-screen">
            <div className="bg-[url('/BG.png')] bg-center bg-no-repeat w-full h-screen bg-amber-700 mb-40 top-0">
              <div className="w-full h-4/12 content-center justify-items-center pt-50">
                <p className={`text-6xl ${galadaFont.className}`}>Welcome to The Iron Flame Steakhouse</p>
                <p className={`text-4xl ${galadaFont.className}`}>
                  Where Fire Meets Flavor — Indulge in the <b className="text-amber-400 ">Finest</b> Cuts of Meat
                </p>
              </div>
            </div>
            <div className="w-full min-h-[60vh] bg-[#7a5454] mb-40 justify-items-center cursor-pointer ">
              <h1 className="text-3xl py-5"> YOUR LOCAL STEAKHOUSE</h1>
              <p className="w-1/2 h-1/2 text-2xl">
                Born from a passion for premium cuts and bold flavors, our restaurant is dedicated to the art of grilling. We specialize in hand-selected
                steaks, locally sourced ingredients, and open-flame cooking that brings out the natural richness of every dish. From the smoky aroma that fills
                the air to the warm, rustic ambiance of our dining room, every detail is designed to make you feel at home. Join us, and experience what happens
                when fire meets flavor.
              </p>
              <h2 className="text-3xl py-5">Join us, and experience what happens when fire meets flavor.</h2>
              <Link href={"/book-a-table"}>
                <button className="mx-10 px-8 py-3 cursor-pointer rounded-2xl border-2  hover:border-amber-500 hover:text-amber-500 transition-all z-20">
                  Book a Table
                </button>
              </Link>
            </div>
            <div className="w-full min-h-[60vh] bg-amber-700 mb-40"></div>
            <div className="w-full min-h-[60vh] bg-amber-700 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
