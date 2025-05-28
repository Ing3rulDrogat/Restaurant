import Logo from "../../public/Temp.png";

function Header() {
  return (
    <div className="sticky top-0 w-full h-35 bg-black flex justify-between items-center">
      <div className="bg-amber-100 w-3/12 h-full"></div>
      <div className="bg-black w-2/12 h-full flex items-center justify-center">
        <img src={Logo.src} className="w-auto h-full"></img>
      </div>
      <div className="bg-red-100 w-3/12 h-full"></div>
    </div>
  );
}

export default Header;
