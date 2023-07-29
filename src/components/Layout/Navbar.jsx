import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggleButton from "./ThemeToggleButton";
import { useLocation } from "react-router";

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();
  const [showCourseProgress, setShowCourseProgress] = useState(false);

 useEffect(() => {
    if (location.pathname === '/learn'){
      setShowCourseProgress(true)
    }else{
      setShowCourseProgress(false)
    }
 }, [])

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
    <nav className="w-[100%] py-4 dark:bg-black ">
      <div className="mx-auto w-[90%] flex flex-row justify-between">
        <div className="text-3xl dark:text-white">
          <span className="font-bold italic text-[#3b82f6]">LearnCSforFree</span>
        </div>
        <div className="">
          {/* progress show here */}
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
