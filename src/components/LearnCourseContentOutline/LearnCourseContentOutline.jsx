import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { LearnContentMenu } from "../";

const LearnCourseContentOutline = () => {
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
        <LearnContentMenu />
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu /> <LearnContentMenu /> <LearnContentMenu />{" "}
        <LearnContentMenu />
      </div>
    </div>
  );
};

export default LearnCourseContentOutline;
