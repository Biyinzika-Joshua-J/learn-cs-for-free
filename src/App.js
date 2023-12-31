import React, {useEffect} from "react";
import { Routes, Route } from "react-router";
import { Navbar, Footer } from "./components";
import { Home, CourseDetails, Learn, Quizes, About, Quize, Courses, Contact, Donate } from "./pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { buildCourseProgressSchema, readLocalStorageJSONData } from "./data/local_storage_manager";



function App() {
  const mode = useSelector(state => state.theme.mode);
 
  return (
    <div className={`${mode} flex flex-col min-h-screen relative`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails/>} /> {/*will take course id and return details*/}
        <Route path="/learn/:id/:topic?/:video_idx?" element={<Learn/>} /> {/*returns an interface where a user does the actual learning*/}
        <Route path="/about" element={<About/>} />
        <Route path="/quizes" element={<Quizes/>} />
        <Route path="/quizes/:id" element={<Quize/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<Donate/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
