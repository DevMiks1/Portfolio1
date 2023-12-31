import {Routes, Route, } from "react-router-dom"

import {Home, About, CarPaintings, CarTinsmiths,  WebDevelopments, Project, ContactUs, PageNotFound} from "../pages"

export const AllRoutes = () => {
  return (
    <div className="bg-white text-black dark:bg-option dark:text-white">      
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="carpaintings" element={<CarPaintings />}></Route>  
            <Route path="cartinsmiths" element={<CarTinsmiths />}></Route> 
            <Route path="webdevelopments" element={<WebDevelopments />}></Route>
            <Route path="project" element={<Project />}></Route>
            <Route path="contactus" element={<ContactUs />}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>          
        </Routes>
    </div>
  )
}