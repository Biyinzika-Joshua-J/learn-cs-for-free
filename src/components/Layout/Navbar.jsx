import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggleButton from "./ThemeToggleButton";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Menu} from '../'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();
  const [showCourseProgress, setShowCourseProgress] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenuHandler(){
    setMenuOpen(true);
  }

  function closeMenuHandler(){
    setMenuOpen(false);
  }

  useEffect(() => {
    if (location.pathname === "/learn") {
      setShowCourseProgress(true);
    } else {
      setShowCourseProgress(false);
    }
  }, []);

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
    <nav className="w-[100%] py-4 dark:bg-black relative">
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
