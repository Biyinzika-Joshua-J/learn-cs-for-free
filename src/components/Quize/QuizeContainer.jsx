import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateQuizeIsOpen } from "../../features/quizeSlice";
import { useNavigate } from "react-router";

const QuizeContainer = ({ children }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.quize.open);
  const navigate = useNavigate();

  function onCloseHandler() {
    dispatch(updateQuizeIsOpen());
    navigate("/quizes");
  }
  return (
    <div
      className={`bg-gray-300 ${
        open ? "fixed" : "hidden"
      } top-0 left-0 h-screen w-full`}
    >
      <div className="flex flex-row justify-between w-[90%] py-4">
        <div className=""></div>
        <div className="">
          <button className="" onClick={() => onCloseHandler()}>
            <FontAwesomeIcon icon={faClose} size="xl" />
          </button>
        </div>
      </div>

      <div className="mx-auto lg:w-[80%] w-[90%]">
        {children}
      </div>
    </div>
  );
};

export default QuizeContainer;
