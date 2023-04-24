import React from "react";
import { TbMessage2 } from "react-icons/tb";

const Collab = () => {
  return (
    <div className="max-w-[1640px] px-auto py-12 flex justify-center text-center p-4">
      <div className="">
        <p className="font-bold text-2xl pb-4">Want to work with me?</p>
        <p className="font-medium text-xl pb-6">
          Im more than happy to discuss project design and features.
        </p>
        <div className="flex justify-center">
          <button className="flex p-2 rounded-full border-2 border-red-600 text-red-600 cursor-pointer hover:bg-purple-600 hover:text-white hover:border-purple-600">
            <TbMessage2 size={25} />
            Start a Conversation!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collab;
