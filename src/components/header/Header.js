import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {motion} from "framer-motion" 


import Sun from "../../assets/sun.png"
import Moon from "../../assets/moon.png"

  // header css
import "./header.css"

export const Header = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get the saved theme preference from local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no preference is saved, set the default theme to "light"
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    // Update the class on the root HTML element whenever the theme changes
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the current theme preference to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
   
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };



  return (
    <nav
      id="navbar"
      className="fixed w-full z-50 bg-white  text-black tracking-wider border-b-[1px] border-linelight dark:bg-option dark:border-linedark"   >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-5">
          <motion.button onClick={handleThemeSwitch}
          whileHover={{scale: 1.3}}
          transition={{type: "spring", stiffness: 300}}
          >
            <img
              src={theme === "light"? Moon : Sun}
              alt={theme === "light" ? "Moon" : "Sun"}
              className="w-[20px] h-[20px]"
            />
          </motion.button>
          
          <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <motion.h2 className="text-2xl font-semibold dark:text-white"
          whileHover={{scale: 1.2}}
          transition={{type: "spring", stiffness: 300}}>
            Mikee.<span className="text-secondary">Dev</span>
          </motion.h2>
        </Link>
        </div>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto `}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col dark:text-white font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0"
          >
            <li>
              <NavLink
                to="/"
                className="nav-link  py-2 hover:text-secondary md:p-0"
                onClick={closeMenu}>
                <h2 >Home</h2>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="nav-link py-2 hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                <h2>About
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/carpaintings"
                className="nav-link  py-2 hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                <h2>Services
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className="nav-link py-2 hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                <h2>Project
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="nav-link py-2 hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                <h2>Contact
                </h2>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
