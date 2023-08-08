import React from "react";
import {
  LearnCourseContentOutline,
  VideoContainer,
  VideoTabs,
  VideoTabsResults,
} from "../components";
import { useParams } from "react-router";
import courses_content from "../data/courses_content";

const Learn = () => {
  const {id:courseId} = useParams();
  const content = courses_content["courses"][courseId]["content"]


  return (
    <div className="relative min-h-[100vh]">
      <div className="grid grid-cols-3 gap-0">
        <div className="lg:col-span-2 col-span-3 w-[105%]">
          <VideoContainer />
          <VideoTabs />
          <VideoTabsResults courseId={courseId}/>
        </div>
        <div className="hidden lg:flex">
          <LearnCourseContentOutline content={content}/>
        </div>
      </div>
    </div>
  );
};

export default Learn;
