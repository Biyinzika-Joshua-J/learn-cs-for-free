import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggleButton from "./ThemeToggleButton";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Menu} from '../'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {CourseProgress} from '../';
import { useParams } from "react-router";
import { readLocalStorageJSONData } from "../../data/local_storage_manager";

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();
  const [showCourseProgress, setShowCourseProgress] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentCourseId = useSelector(state => state.courses.currentCourseId);
  const courseProgressIsUpdated = useSelector(state => state.courses.progress)
  

  //console.log(readLocalStorageJSONData('courses_progress')[currentCourseId]["total_progress_percentage"])


 

  function openMenuHandler(){
    setMenuOpen(true);
  }

  function closeMenuHandler(){
    setMenuOpen(false);
  }

  useEffect(() => {
    if (location.pathname.includes('learn')) {
      setShowCourseProgress(true);
    } else {
      setShowCourseProgress(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (mode == "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [mode]);

  return (
    <>
    <nav className="w-[100vw] py-4 dark:bg-gray-950 relative">
      <div className="mx-auto w-[90%] flex flex-row justify-between">
        <div className="text-3xl dark:text-white">
          <Link to={"/"}>
            <span className="font-bold italic text-[#3b82f6]">
              LearnCSforFree
            </span>
          </Link>
        </div>
        <div className="flex ">
          {/* progress show here */}
          {showCourseProgress && <CourseProgress progress={50}/>}
          <ThemeToggleButton />
          <div className="ml-8">
            <button className="dark:text-white" onClick={()=>openMenuHandler()}>
              <FontAwesomeIcon icon={faBars} size="2xl"/>
            </button>
          </div>
        </div>
      </div>
     
    </nav>
    <Menu open={menuOpen} close={closeMenuHandler} />
    </>
  );
};

export default Navbar;
