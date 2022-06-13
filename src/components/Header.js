import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between px-20 py-10">
        <h1 className="font-semibold text-xl uppercase">MUHFARHAN13</h1>
        <div className="nav-link hidden md:block">
          <NavLink to="/" className="px-4">
            Home
          </NavLink>
          <NavLink to="/work-experience" className="px-4">
            Work Experience
          </NavLink>
          <NavLink to="/skills" className="px-4">
            Skills
          </NavLink>
          <NavLink to="/portfolio" className="px-4">
            Portfolio
          </NavLink>
        </div>
        <div className="md:hidden">
          <nav>
            <section className="MOBILE-MENU flex md:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <NavLink to="/work-experience">Work Experience</NavLink>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <NavLink to="/skills">Skills</NavLink>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <NavLink to="/portfolio">Portfolio</NavLink>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
      </div>
    </div>
  );
};

export default Header;
