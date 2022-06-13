import React from "react";
import Javascript from "../../img/js.png";
import Php from "../../img/php.png";
import Laravel from "../../img/laravel.png";
import Reactjs from "../../img/reactjs.png";
import Mysql from "../../img/mysql.png";
import Tailwind from "../../img/tailwind.png";
import Html from "../../img/html.png";
import Css from "../../img/css.png";

const Body = () => {
  return (
    <div>
      <div>
        <div className="px-20 py-10">
          <h1 className="uppercase text-4xl">Skills & Tools</h1>
          <div className="bg-gray-200 px-20 py-10 mt-4 rounded-xl">
            <div className="languange">
              <h2 className="text-2xl mb-8 underline underline-offset-8 decoration-stone-300">
                Programming Languange
              </h2>
              <div className="flex">
                <img alt="js" src={Javascript} className="w-20" />
                <img alt="js" src={Php} className="w-20 ml-8" />
              </div>
            </div>
            <div className="framework mt-16">
              <h2 className="text-2xl mb-8 underline underline-offset-8 decoration-stone-300">
                Framework
              </h2>
              <div className="md:flex">
                <img alt="js" src={Laravel} className="w-20" />
                <img
                  alt="js"
                  src={Reactjs}
                  className="w-20 mt-5 md:mt-0 md:ml-8"
                />
                <img
                  alt="js"
                  src={Tailwind}
                  className="w-20 mt-5 md:mt-0 md:ml-8"
                />
              </div>
            </div>
            <div className="database mt-16">
              <h2 className="text-2xl mb-8 underline underline-offset-8 decoration-stone-300">
                Database
              </h2>
              <div className="flex">
                <img alt="js" src={Mysql} className="w-28" />
              </div>
            </div>
            <div className="database mt-16">
              <h2 className="text-2xl mb-8 underline underline-offset-8 decoration-stone-300">
                Layouting
              </h2>
              <div className="flex">
                <img alt="js" src={Html} className="w-20" />
                <img alt="js" src={Css} className="w-20 ml-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
