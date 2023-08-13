import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import CheckBox from "./CheckBox";

const LearnContentMenuItem = ({
  title,
  mins,
  url,
  topic,
  video_idx,
  courseId,
  currentVideoIdx,
}) => {
  return (
   
      <button className={`flex flex-col  justify-between py-2  w-[100%] px-2`}>
        <div className="flex flex-row items-center">
          <div class=" ">
            <CheckBox />
          </div>
          <Link to={`/learn/${courseId}/${topic}/${video_idx}`} className={``}>
            <div className="ml-4">{title}</div>
          </Link>
        </div>

       <Link to={`/learn/${courseId}/${topic}/${video_idx}`} className={``}>
       <div className="flex flex-row items-center">
          <div className="ml-8">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className="ml-4">
            <span className="text-gray-500">{mins} min</span>
          </div>
        </div>
       </Link>
      </button>
    
  );
};

export default LearnContentMenuItem;
