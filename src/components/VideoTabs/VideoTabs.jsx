import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateActiveTabIdx } from "../../features/videoTabsSlice";

const tabs = ["Overview", "Notes"];

const mediumScreenBreakpoint = {
    minWidth: 768,
    maxWidth: 1024,
  };

const VideoTabs = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [tabNames, setTabNames] = useState(tabs);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  function changeTabHandler(currentTab) {
    setActiveTab(currentTab);
    dispatch(updateActiveTabIdx(currentTab));
  }


  const checkScreenSize = () => {
    const { innerWidth } = window;
    const isMedium = innerWidth <= mediumScreenBreakpoint.maxWidth;
    setIsMediumScreen(isMedium);
  };

  useEffect(() => {
    // Check the initial screen size
    checkScreenSize();
   

    // Add event listener to detect changes in screen size
    window.addEventListener("resize", checkScreenSize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() =>{
    if (isMediumScreen && tabNames.length === 2){
        setTabNames(state => [...state, 'Content'])
    }else{
        if (activeTab === 2 && isMediumScreen==false){
            setActiveTab(0)
            dispatch(updateActiveTabIdx(0))
        }
        setTabNames(state => tabs)
    }
  }, [isMediumScreen])

  return (
    <div className="py-8 flex justify-center items-center">
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabNames.map((name, idx) => (
          <button
            onClick={() => changeTabHandler(idx)}
            key={idx}
            className={`inline-block p-4 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 ${
              activeTab == idx
                ? "bg-gray-500 text-white"
                : "bg-gray-100 text-black  "
            } py-2 px-2`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoTabs;
