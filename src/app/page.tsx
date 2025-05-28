import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="bg-[url('/Screenshot_2.png')] bg-cover bg-center bg-fixed min-h-screen">
        <div className="backdrop-brightness-50 min-h-screen">
          <Header />
          <div className=" justify-items-center">
            <div className="w-full h-50 bg-amber-700 mb-50"></div>
            <div className="w-400 h-50 bg-amber-700 mb-50"></div>

            <div className="w-400 h-50 bg-amber-700 mb-50"></div>

            <div className="w-400 h-50 bg-amber-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
