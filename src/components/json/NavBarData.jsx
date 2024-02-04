/** @format */

// IMPORT RELATED TO REACT ICONS
import {
  FaHome,
  FaInfoCircle,
  FaFolderOpen,
  FaPhone,
  FaCog,
} from "react-icons/fa";

export const NavBarData = {
  NavbarDesktop: [
    { id: 1, name: "Home", path: "/", isDesktop: true },
    { id: 2, name: "About", path: "/about", isDesktop: true },
    { id: 3, name: "Services", path: "/services", isDesktop: true },
    { id: 4, name: "Project", path: "/project", isDesktop: true },
    { id: 5, name: "Contact", path: "/contact", isDesktop: true },
  ],
  NavbarMobile: [
    { id: 1, name: "Home", icon: <FaHome />, path: "/", isMobile: true },
    {
      id: 2,
      name: "About",
      icon: <FaInfoCircle />,
      path: "/about",
      isMobile: true,
    },
    {
      id: 3,
      name: "Services",
      icon: <FaCog />,
      path: "/services",
      isMobile: true,
    },
    {
      id: 4,
      name: "Project",
      icon: <FaFolderOpen />,
      path: "/project",
      isMobile: true,
    },
    {
      id: 5,
      name: "Contact",
      icon: <FaPhone />,
      path: "/contact",
      isMobile: true,
    },
  ],
};
