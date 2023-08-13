import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./videoContainer.css";
import courses_content from "../../data/courses_content";
import {  useNavigate } from "react-router";

const VideoContainer = ({ topic, video_idx, courseId }) => {
  let videoLessonsLength = courses_content["courses"][courseId]["content"]["lessons"][topic]["videos"].length;
  const navigate = useNavigate();
  
  let videoLesson = courses_content["courses"][courseId]["content"]["lessons"][topic]["videos"][video_idx].youtubeUrl;
  const [videoLessonIdx, setVideoLessonIdx] = useState(parseInt(video_idx));

  useEffect(()=>{
    setVideoLessonIdx(parseInt(video_idx));
  }, [video_idx])


  function nextLessonHandler(){
    if (videoLessonIdx < videoLessonsLength){
      setVideoLessonIdx(prev => prev+1)
    }
  }

  function prevLessonHandler(){
    if (videoLessonIdx >= 1){
      setVideoLessonIdx(prev => prev-1)
    }
  }
  
  return (
    <div className="w-[100%] h-[80vh] bg-black relative hoverable">
      <div className="absolute top-52 left-5 nav-btn">
        <button className="" onClick={() => prevLessonHandler()}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            style={{ color: "#fff" }}
            size="xl"
          />
        </button>
      </div>
      <div className="absolute top-52 right-5 nav-btn">
        <button className="" onClick={() => nextLessonHandler()}>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            style={{ color: "#fff" }}
            size="xl"
          />
        </button>
      </div>
      <iframe
        className="w-[100%] h-[100%]"
        width="560"
        height="315"
        src={courses_content["courses"][courseId]["content"]["lessons"][topic]["videos"][videoLessonIdx].youtubeUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
