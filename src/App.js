import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";

// 1. here first comment and we are in Home page
import {Route, Routes} from "react-router-dom";


function App() {
  return (
   <>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/project" element={<Project />} />
        <Route path= "/about" element={<About />} />
        <Route path= "/contact " element={<Contact />} />
        {/* 1. then we have to import our Routes inside our input section above  */}
      </Routes>
   </>
  );
}

export default App;
