import React, { useState } from "react";
import { data } from "../Data/Data.js";
// import { Link } from "react-router-dom";
// import { AiOutlineGlobal } from "react-icons/ai";
// import Senior from "../Assets/seniorResource.png";

const ProjectCards = () => {
  const [projects] = useState(data);
  // const [hover, setHover] = useState(false);
  return (
    <div className="max-w-[1640px] m-auto px-2 py-6">
      <h1 className="text-center">
        Some of my past group and personal projects Ive built
      </h1>

      {/* Website Cards */}

      <div
        className="grid grid-col-2 md:grid-cols-3 gap-6 pt-4"
        // onMouseEnter={() => setHover(true)}
        // onMouseExit={() => setHover(false)}
      >
        {projects.map((project, index) => (
          <div
            onClick={() => window.open(project.url, "_blank")}
            key={index}
            className="border  shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[200px]  object-cover rounded-t-lg "
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{project.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
