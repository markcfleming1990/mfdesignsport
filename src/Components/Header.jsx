import React from "react";
import Email from "./Email.jsx";
// import Logo from "../Assets/MFlogo.jpg";
//TODO: Add some kind of profile image
const Header = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-end py-4">
      <div className="">
        <button
          className="font-medium border-2 border-red-600 p-4 rounded-full hover:bg-red-600 hover:text-white"
          onClick={() => window.open({ Email }, "_blank")}
        >
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default Header;
