import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { LearnContentMenuItem } from "../";




const children = [
  {
    link: "",
    time: "",
  },
];

const LearnContentMenu = ({ title, position, mins, lesonsNum, videos, topic, courseId}) => {

  const [open, setOpen] = useState(false);
  function openHandler() {
    setOpen((prev) => !prev);
  }
  return (
    <div className=" border-b-[1px] border-black">
      <button
        onClick={() => openHandler()}
        className="flex flex-row items-center justify-between  border-1 border-gray-500 bg-gray-300 w-[100%]"
      >
        <div className=" flex flex-col ml-2 items-start w-[100%] ">
          <div className="font-bold capitalize">{position}. {title}</div>
          <div className="ml-4 ">
            <span className="text-gray-500 text-[14px]" >0/{lesonsNum}/ | {mins} mins</span>
          </div>
        </div>
        <div className="">
          <button className="py-4 px-4" onClick={() => openHandler()}>
            {open === true ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
        </div>
      </button>
      {open && (
        <div className="border-2 border-gray-300 py-4 px-4">
        {
          videos.map((video, idx) => (
            <LearnContentMenuItem key={idx} title={video.title} mins={video.minutes} url={video.youtubeUrl} video_idx={idx}  topic={topic} courseId={courseId}/>
          ))
        }
         
        </div>
      )}
    </div>
  );
};

export default LearnContentMenu;
