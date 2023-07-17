import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
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
      className="fixed w-full z-50 bg-primary text-white tracking-wider"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <h2 className="text-color-white text-2xl">
            Mikee.<span className="text-secondary">Dev</span>
          </h2>
        </Link>
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
          } w-full md:block md:w-auto text-white`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col text-white font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <NavLink
                to="/"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/carpaintings"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary md:p-0"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
