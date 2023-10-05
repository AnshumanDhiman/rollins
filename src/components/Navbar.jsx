/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeLink =
    "group relative before:absolute before:inset-x-0 before:top-[42px] before:h-1 before:bg-theme_2";
  const inactiveLink =
    "group relative before:absolute before:inset-x-0 before:top-[42px] before:h-1 before:bg-theme_2 before:origin-center   before:scale-x-0  before:transition before:duration-500 hover:before:origin-center hover:before:scale-x-100";

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    document.getElementById("hamburger").checked = false;
  };

  const handleMenuLinkClick = () => {
    closeMenu();
  };

  const handleDropdownLinkClick = () => {
    closeMenu();
    toggleDropdown();
  };

  return (
    <div
      className={`shadow-sm fixed w-full top-0 transition-all duration-300 z-50 ${
        isSticky ? "bg-white shadow-xl z-[999]" : ""
      }`}
    >
      <header>
        <div className="z-20 ">
          <div className="px-6 md:px-12 lg:mx-auto lg:px-6 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <Link to="">
                  {/* <div className="flex justify-center items-center">
                    <img src={logo} alt="logo" className="w-20" />
                  </div> */}
                </Link>
              </div>

              <div className="flex items-center justify-end border-l lg:border-l-0 z-20">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-theme_2 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-theme_2 transition duration-300"
                  ></div>
                </label>

               <div className="peer-checked:translate-x-0 z-50 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-theme_1 border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul className="px-6 pt-32 text-white space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                      <li>
                        <NavLink
                          to=""
                          className={({ isActive }) =>
                            isActive ? `${activeLink}` : `${inactiveLink}`
                          }
                          onClick={handleMenuLinkClick}
                        >
                          <span className="relative ">Home</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="about"
                          className={({ isActive }) =>
                            isActive ? `${activeLink}` : `${inactiveLink}`
                          }
                          onClick={handleMenuLinkClick}
                        >
                          <span className="relative group-hover:">
                            About Us
                          </span>
                        </NavLink>
                      </li>
                      <li>
                      <NavLink
                          to="services"
                          className={({ isActive }) =>
                            isActive ? `${activeLink}` : `${inactiveLink}`
                          }
                          onClick={handleMenuLinkClick}
                        >
                          <span className="relative ">Services</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="contact"
                          className={({ isActive }) =>
                            isActive ? `${activeLink}` : `${inactiveLink}`
                          }
                          onClick={handleMenuLinkClick}
                        >
                          <span className="relative group-hover:">
                            Contact
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
