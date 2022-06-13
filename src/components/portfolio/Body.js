import React from "react";
import Hotel from "../../img/hotel.png";
import Quran from "../../img/quran.PNG";
import WaktuSholat from "../../img/waktu-sholat.png";

const Body = () => {
  return (
    <div>
      <div className="px-20 py-10">
        <h1 className="portfolio uppercase text-4xl">Portfolio</h1>
        <div className="lg:grid xl:grid-cols-3 lg:grid-cols-2 mt-10">
          <div className="bg-white shadow-md">
            <img alt="portfolio" src={Hotel} className="" />
            <div className="button py-4 px-3">
              <a
                href="https://github.com/muhfarhan13/aplikasi-pemesanan-hotel"
                className="bg-cyan-500 text-white px-4 py-2 rounded-full"
              >
                Source code
              </a>
              <a
                href="https://hotelgenggong.tepicode.com"
                className="bg-cyan-500 text-white px-4 py-2 rounded-full ml-4"
              >
                Visit
              </a>
            </div>
          </div>
          <div className="lg:ml-4 bg-white shadow-md my-6 lg:my-0">
            {" "}
            <div>
              <img alt="portfolio" src={Quran} className="" />
              <div className="button py-4 lg:py-5 px-3">
                <a
                  href="https://github.com/muhfarhan13/quran-reactjs"
                  className="bg-cyan-500 text-white px-4 py-2 rounded-full"
                >
                  Source code
                </a>
                <a
                  href="https://alquran-onlin.vercel.app"
                  className="bg-cyan-500 text-white px-4 py-2 rounded-full ml-4"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md xl:ml-4 lg:mt-4 xl:mt-0">
            {" "}
            <div>
              <img alt="portfolio" src={WaktuSholat} className="" />
              <div className="button py-4 xl:py-5 px-3">
                <a
                  href="https://github.com/muhfarhan13/waktu-shalat-v.3"
                  className="bg-cyan-500 text-white px-4 py-2 rounded-full"
                >
                  Source code
                </a>
                <a
                  href="https://alquran-onlin.vercel.app"
                  className="bg-cyan-500 text-white px-4 py-2 rounded-full ml-4"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
