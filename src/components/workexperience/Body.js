import React from "react";
import iconRe from "../../img/icon-re.png";

const Body = () => {
  return (
    <div>
      <div className="">
        <div className="lg:flex justify-center px-20 py-10">
          <img src={iconRe} alt="icon-re" className="w-4/12 md:w-2/12 mb-8 lg:mb-0" />
          <div className="xl:ml-20">
            <h1 className="pt font-semibold text-2xl">
              PT. Rekayasa Engineering
            </h1>
            <h1 className="title font-bold text-4xl mt-4">
              Web Developer Internship
            </h1>
            <h3 className="mt-4 text-lg">Sep 2021 - Feb 2022</h3>
            <p className="xl:mr-40 pt-4 text-xl">
              Has an internship experience for 6 months as a web developer at
              PT. Rekayasa Engineering. In charge of making prayer schedule
              applications throughout the city of Indonesia using the javascript
              language and the axios library. also create a web of horror story
              loggers using the laravel framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
