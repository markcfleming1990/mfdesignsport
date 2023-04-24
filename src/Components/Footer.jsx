import React from "react";
import { MdWavingHand } from "react-icons/md";
import { BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1640px] h-[500px] grid justify-between text-center py-12 px-36 bg-red-600">
      <div className="flex justify-center">
        <p className="font-medium text-3xl pb-4 my-24">
          Thank you for stopping by and watching me grow in my development
          journey! I look forward to hearing from you!
          <div className="flex justify-center">
            <MdWavingHand size={45} />
          </div>
        </p>
      </div>
      <div className="flex justify-center mb-2">
        {/* <p>
          Made with <AiOutlineHeart /> by Mark Fleming
        </p> */}
        <div className="flex justify-center">
          <BsGithub size={30} className="mx-2 cursor-pointer" />
          <BsFacebook size={30} className="mx-2 cursor-pointer" />
          <BsTwitter size={30} className="mx-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
