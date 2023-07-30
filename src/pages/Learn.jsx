import React from "react";
import {
  LearnCourseContentOutline,
  VideoContainer,
  VideoTabs,
  VideoTabsResults,
} from "../components";

const Learn = () => {
  return (
    <div className="relative min-h-[100vh]">
      <div className="grid grid-cols-3 gap-0">
        <div className="lg:col-span-2 col-span-3 w-[105%]">
          <VideoContainer />
          <VideoTabs />
          <VideoTabsResults/>
        </div>
        <div className="hidden lg:flex">
          <LearnCourseContentOutline />
        </div>
      </div>
    </div>
  );
};

export default Learn;
