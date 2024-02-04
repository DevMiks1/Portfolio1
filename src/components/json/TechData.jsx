/** @format */

// IMPORT TECHNICAL SKILLS RELATED

// FRONTEND
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import tailwind from "../../assets/skills/tailwind.png";
import chakra from "../../assets/skills/chakra.jpg"
import framer from "../../assets/skills/framer-motion.svg";

// BACKEND
import nodejs from "../../assets/skills/nodejs.png";
import express from "../../assets/skills/express.png";

// TOOLS
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import netlify from "../../assets/skills/netlify.png";
import vercel from "../../assets/skills/vercel.png";
import postman from "../../assets/skills/postman.png";

// IMPORT RELATED TO REACT ICONS
import { FaComments, FaUsers, FaLightbulb, FaHandsHelping, FaClock, FaClipboardCheck, FaUsersCog } from 'react-icons/fa';

export const TechData = {
  frontend: [
    { id: 1, src: html, alt: "html logo", name: "HTML", type: "image" },
    { id: 2, src: css, alt: "css Logo", name: "CSS", type: "image" },
    { id: 3, src: js, alt: "js Logo", name: "JS", type: "image" },
    { id: 4, src: react, alt: "react Logo", name: "REACT", type: "image" },
    { id: 5, src: chakra, alt: "chakra ui Logo", name: "CHAKRA UI", type: "image" },
    { id: 6, src: tailwind, alt: "tailwind Logo", name: "TAILWIND", type: "image" },
    { id: 7, src: framer, alt: "framer Logo", name: "FRAMER MOTION", type: "image" },
  ],
  backend: [
    { id: 1, src: nodejs, alt: "nodejs logo", name: "NODE JS", type: "image" },
    { id: 2, src: express, alt: "expressjs Logo", name: "EXPRESS JS", type: "image" },
    
  ],
  tools: [
    { id: 1, src: git, alt: "git logo", name: "GIT", type: "image" },
    { id: 2, src: github, alt: "github logo", name: "GIT HUB", type: "image" },
    { id: 3, src: netlify, alt: "netlify logo", name: "NETLIFY", type: "image" },
    { id: 4, src: vercel, alt: "vercel logo", name: "VERCEL", type: "image" },
    { id: 5, src: postman, alt: "postman logo", name: "POSTMAN", type: "image" },
    
  ],
  softskills: [
    { id: 1, src: <FaComments/>, alt: "git logo", name: "COMMUNICATION", type: "icon" },
    { id: 2, src: <FaUsers/>, alt: "github logo", name: "ADAPTABILITY", type: "icon" },
    { id: 3, src: <FaLightbulb/>, alt: "netlify logo", name: "PROBLEM-SOLVING", type: "icon" },
    { id: 4, src: <FaClipboardCheck />, alt: "vercel logo", name: "DESICION-MAKING", type: "icon" },
    { id: 5, src: <FaUsersCog />, alt: "postman logo", name: "ATTENTION TO DETAIL", type: "icon" },
    { id: 6, src: <FaClock />, alt: "postman logo", name: "TIME MANAGEMENT", type: "icon" },
    { id: 7, src: <FaHandsHelping />, alt: "postman logo", name: "TIME MANAGEMENT", type: "icon" },
    
  ],
};
