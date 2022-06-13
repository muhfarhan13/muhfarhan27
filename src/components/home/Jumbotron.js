import React from "react";
import Face from "../../img/face.jpg";
import Cv from "../../Muhammad_Farhan_Web_Dev_Resume.pdf";

const Body = () => {
  return (
    <div>
      <div className="xl:flex justify-evenly">
        <div className="bg-white pl-20 w-9/12 py-20">
          <h2 className="text-stone-700 text-3xl lg:text-4xl capitalize font-semibold">
            Hi, I'm Muhammad Farhan
          </h2>
          <h1 className="text-4xl md:text-5xl capitalize font-bold py-4">
            Web Developer Internship
          </h1>
          <p className="text-xl sm:text-2xl xl:w-6/12 mb-6">
            I want to be challenged to grow and further improve my programming
            skills. My greatest passion in life is to use my programming
            knowledge to benefit others.
          </p>
          <a href={Cv} className="bg-cyan-500 px-5 py-2 text-white rounded-sm">
            Download My Cv
          </a>
        </div>
        <div className="bg-gray-200 mt-28 xl:mr-20 grayscale flex xl:flex-none justify-center">
          <img src={Face} alt="my-face" className="w-5/12 xl:w-auto -mt-40" />
        </div>
      </div>
    </div>
  );
};

export default Body;
