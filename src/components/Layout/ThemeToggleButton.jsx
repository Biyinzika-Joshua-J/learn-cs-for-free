import React, { useRef, useEffect } from "react";
import { toggleTheme } from "../../features/themeModeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const btnRef = useRef();

  useEffect(() => {
    switchTheme();
  }, [mode]);

  function toggleThemeHandler() {
    dispatch(toggleTheme());
  }

  function switchTheme() {
    if (mode === "dark") {
      btnRef.current.classList.remove("bg-yellow-500", "-translate-x-2");
      btnRef.current.classList.add("bg-gray-700", "translate-x-full");
    } else {
      btnRef.current.classList.add("bg-yellow-500", "-translate-x-2");
      btnRef.current.classList.remove("bg-gray-700", "translate-x-full");
    }
  }

  return (
    <button
      className="w-20 h-10 rounded-full bg-[#ddd] dark:bg-slate-700 flex items-center transition duration-300 focus:outline-none shadow-xl"
      onClick={toggleThemeHandler}
    >

      <div
        ref={btnRef}
        className="w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-black"
      >
   
        {mode === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#E5E4E2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggleButton;
