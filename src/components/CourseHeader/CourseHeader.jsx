import React from "react";

const CourseHeader = ({ image }) => {
  return (
    <div className="relative">
      <div className="w-[100vw] h-[50vh]">
        <img className="w-[100%] h-[100%] object-cover" src={image} alt="" />
      </div>
      <div className="absolute top-0 left-0 z-10 bg-black bg-opacity-50 w-[100%] h-[100%] flex justify-center items-center">
        <div className="">
          <h1 className="text-white text-center z-20 py-4 px-4 text-3xl font-bold">
            Introduction to computer science
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
