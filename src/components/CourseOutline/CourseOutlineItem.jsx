import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const CourseOutlineItem = ({ title, mins, url, courseId }) => {
  return (
    <div className="flex flex-row items-center justify-between py-2">
      <div className="flex flex-row items-center">
        <div className="^pr-2">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className="pl-4">
          <Link
            className="text-blue-600 font-bold underline underline-offset-2"
            to={`/learn/${courseId}`}
          >
            {title}
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="pr-2">
          <Link className="text-blue-500 underline underline-offset-2" to={"/"}>
            Watch
          </Link>
        </div>
        <div className="pl-2 text-gray-400">{mins} mins</div>
      </div>
    </div>
  );
};

export default CourseOutlineItem;
