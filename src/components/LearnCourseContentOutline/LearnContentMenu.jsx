import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { LearnContentMenuItem } from "../";
import courses_content from "../../data/courses_content";
import { useParams } from "react-router";


const children = [
  {
    link: "",
    time: "",
  },
];

const LearnContentMenu = ({ title, children }) => {
  const id = useParams();
  console.log(id)
  console.log(courses_content["courses"])
  const [open, setOpen] = useState(false);
  function openHandler() {
    setOpen((prev) => !prev);
  }
  return (
    <div className=" border-b-[1px] border-black">
      <button
        onClick={() => openHandler()}
        className="flex flex-row items-center  border-1 border-gray-500 bg-gray-300 w-[100%]"
      >
        <div className=" flex flex-col  justify-between w-[100%] ">
          <div className="font-bold">Introduction to computer science</div>
          <div className="ml-4 mr-auto">
            <span className="text-gray-500 text-[14px]" >1/20 | 40 mins</span>
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
          <LearnContentMenuItem />
          <LearnContentMenuItem />
          <LearnContentMenuItem />
          <LearnContentMenuItem />
        </div>
      )}
    </div>
  );
};

export default LearnContentMenu;
