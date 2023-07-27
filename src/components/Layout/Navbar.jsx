import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

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
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
