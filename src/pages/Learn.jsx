import React, {useEffect} from "react";
import {
  LearnCourseContentOutline,
  VideoContainer,
  VideoTabs,
  VideoTabsResults,
} from "../components";
import { useParams } from "react-router";
import courses_content from "../data/courses_content";
import { useDispatch } from "react-redux";
import { updateCurrentCourseId } from "../features/coursesSlice";

const Learn = () => {
  const dispatch = useDispatch();
  const {id:courseId, topic, video_idx} = useParams();
  const content = courses_content["courses"][courseId]["content"]

  useEffect(()=>{
    dispatch(updateCurrentCourseId(courseId));
  }, [])

 
  return (
    <div className="relative min-h-[100vh]">
      <div className="grid grid-cols-3 gap-0">
        <div className="lg:col-span-2 col-span-3 w-[105%]">
          <VideoContainer courseId={courseId} topic={topic} video_idx={video_idx}/>
          <VideoTabs />
          <VideoTabsResults courseId={courseId}/>
        </div>
        <div className="hidden lg:flex">
          <LearnCourseContentOutline content={content} topic={topic} video_idx={video_idx} courseId={courseId}/>
        </div>
      </div>
    </div>
  );
};

export default Learn;
