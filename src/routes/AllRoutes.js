import {Routes, Route, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"

import {Home, About, CarPaintings, CarTinsmiths,  WebDevelopments, Project, ContactUs, PageNotFound} from "../pages"







export const AllRoutes = () => {
  const location = useLocation()


  return (
    <div className="bg-white text-black dark:bg-option dark:text-white">
        <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="carpaintings" element={<CarPaintings />}></Route>  
            <Route path="cartinsmiths" element={<CarTinsmiths />}></Route> 
            <Route path="webdevelopments" element={<WebDevelopments />}></Route>
            <Route path="project" element={<Project />}></Route>
            <Route path="contactus" element={<ContactUs />}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>          
        </Routes>
        </AnimatePresence>
    </div>
  )
}



