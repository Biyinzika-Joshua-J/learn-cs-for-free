import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./videoContainer.css";
import courses_content from "../../data/courses_content";

const VideoContainer = ({ topic, video_idx, courseId }) => {
  let videoLesson = courses_content["courses"][courseId]["content"]["lessons"][topic]["videos"][video_idx].youtubeUrl;
  
  return (
    <div className="w-[100%] h-[80vh] bg-black relative hoverable">
      <div className="absolute top-52 left-5 nav-btn">
        <button className="" onClick={() => {}}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            style={{ color: "#fff" }}
            size="xl"
          />
        </button>
      </div>
      <div className="absolute top-52 right-5 nav-btn">
        <button className="" onClick={() => {}}>
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
        src={videoLesson}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
