import React from "react";
import Header from "../components/Header";
import Jumbotron from "../components/home/Jumbotron";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <Jumbotron />
        <div className="hidden xl:block -mt-52">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#06b6d4"
              fill-opacity="1"
              d="M0,320L1440,32L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
