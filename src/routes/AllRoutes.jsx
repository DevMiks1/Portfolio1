/** @format */

import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Project,
  Contact,
  PageNotFound,
  Services,
  ServicesInfo,
  Blogs,
  BlogsInfo,
} from "../pages/compiler/index";
import { Box } from "@chakra-ui/react";

const AllRoutes = () => {
  return (
    <Box bg="primary.800" color="white">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="services/:itemNumber" element={<ServicesInfo />}></Route>
        <Route path="project" element={<Project />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="blogs/:url" element={<BlogsInfo />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
