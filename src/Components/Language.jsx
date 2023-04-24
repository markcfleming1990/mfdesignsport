import React from "react";
import { FiLayers, FiServer } from "react-icons/fi";
// import { IoServerOutline } from "react-icons/io";

const Language = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 grid gap-16 md:grid-cols-2">
      {/* Front-End */}
      <div className=" items-center">
        <div className="flex justify-center">
          <FiLayers size={40} />
        </div>
        <h1 className="py-4 text-2xl font-medium text-center">
          Front-End Development
        </h1>
        <h2 className="py-2 text-xl font-medium text-center">
          These are the tools & languages I use to bring dreams to reality:{" "}
        </h2>
        <ul className="py-5 text-center sm:text-xl">
          <li className="pb-2">React</li>
          <li className="pb-2">HTML</li>
          <li className="pb-2">CSS</li>
          <li className="pb-2">Tailwind</li>
          <li className="pb-2">Bootstrap</li>
          <li className="pb-2">JavaScript</li>
          <li className="pb-2">GitHub</li>
        </ul>
      </div>
      {/* Back-End */}
      <div className="">
        <div className="flex justify-center">
          <FiServer size={40} />
        </div>
        <h1 className="py-4 text-2xl font-medium text-center">
          Back-End Development
        </h1>
        <h2 className="py-2 text-xl font-medium text-center">
          The tools I use to make your dreams come together
        </h2>
        <ul className="py-5 text-center sm:text-xl">
          <li className="pb-2">SQL</li>
          <li className="pb-2">MongoDB</li>
          <li className="pb-2">Node.js</li>
          <li className="pb-2">Express.js</li>
          <li className="pb-2">APIs</li>
        </ul>
      </div>
    </div>
  );
};

export default Language;
