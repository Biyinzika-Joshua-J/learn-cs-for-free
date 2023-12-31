import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { LearnContentMenu } from "../";

const LearnCourseContentOutline = ({ content, video_idx, topic, courseId }) => {
  const topics = [];
  for (const topic in content["lessons"]) {
    topics.push(topic);
  }
  let currentTopic = topic;


  return (
    <div className="absolute  right-0 w-[30%] h-[100%] bg-gray-100 overflow-y-auto ">
      <div className="flex flex-row items-center justify-between py-4 px-4">
        <div className="font-bold">Course Content</div>
        <div className="">
          <button className="" onClick={() => {}}>
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        {topics.map((topic, idx) => (
          <LearnContentMenu
            key={idx}
            position={idx + 1}
            title={topic}
            mins={content["lessons"][topic]["total_mins"]}
            lesonsNum={content["lessons"][topic]["total_lessons"]}
            videos={content["lessons"][topic]["videos"]}
            topic={topic}
            courseId={courseId}
            active={topic.length>0 && currentTopic===topic?true:false}
            currentVideoIdx={video_idx}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnCourseContentOutline;
