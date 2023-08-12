import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const LearnContentMenuItem = ({title,mins, url, topic, video_idx, courseId }) => {
  return (
      <Link to={`/learn/${courseId}/${topic}/${video_idx}`}>
        <button className="flex flex-col  justify-between py-2 hover:bg-gray-500 w-[100%] px-2">
      <div className="flex flex-row items-center">
        <div class=" ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-black "
          />
        </div>
        <div className="ml-4">{title}</div>
      </div>

      <div className="flex flex-row items-center">
        <div className="ml-8">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className="ml-4">
          <span className="text-gray-500">{mins} min</span>
        </div>
      </div>
    </button>
      </Link>
  );
};

export default LearnContentMenuItem;
