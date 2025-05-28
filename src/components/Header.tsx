import Logo from "../../public/Logo.png";

function Header() {
  return (
    <div className="sticky top-0 w-full h-35 bg-gradient-to-t from-15% from-opacity to-black flex justify-between items-center ">
      <div className="flex w-3/12 h-full items-center">
        <div className=" w-4/12 h-full content-center justify-items-center cursor-pointer">
          <div className="bg-white w-4/12 h-1/32 rounded-4xl my-2"></div>
          <div className="bg-white w-4/12 h-1/32 rounded-4xl my-2"></div>
          <div className="bg-white w-4/12 h-1/32 rounded-4xl my-2"></div>
        </div>
        <h1>Hi</h1>
      </div>

      <div className=" w-2/12 h-full flex items-center justify-center">
        <img src={Logo.src} className="w-auto h-full "></img>
      </div>
      <div className=" w-3/12 h-full"></div>
    </div>
  );
}

export default Header;
