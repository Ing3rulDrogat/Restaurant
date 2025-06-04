import Header from "@/components/Header";
import { Galada } from "next/font/google";

const galadaFont = Galada({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Header />
      <div className="bg-[url('/TempBG.png')]  bg-fixed  bg-repeat bg-top bg-contain">
        <div className="backdrop-brightness-50 flex flex-col">
          <div className=" justify-items-center ">
            <div className="bg-[url('/BG.png')] bg-center bg-no-repeat w-full h-screen bg-amber-700 mb-50   top-0">
              <div className="w-full h-4/12 content-center justify-items-center pt-50">
                <p className={`text-6xl ${galadaFont.className}`}>Welcome to The Iron Flame Steakhouse</p>
                <p className={`text-4xl ${galadaFont.className}`}>
                  Where Fire Meets Flavor — Indulge in the <b className="text-amber-400">Finest</b> Cuts of Meat
                </p>
              </div>
            </div>
            <div className="w-full h-50 bg-amber-700 mb-50 z-0"></div>
            <div className="w-full h-50 bg-amber-700 mb-50"></div>
            <div className="w-full h-50 bg-amber-700 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
