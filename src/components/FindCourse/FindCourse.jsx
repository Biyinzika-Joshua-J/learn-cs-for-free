import React from "react";
import SearchVector from "../../assets/images/searching-vector.png";

const FindCourse = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="lg:w-[60%] py-8 w-[90%] mx-auto gap-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center ">
          <div className="">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Find a course</h2>
            <p className="dark:text-gray-400 text-gray-400">
              Embark on your computer science journey with ease. Explore a
              curated collection of free, high-quality online courses, primarily
              from YouTube, designed to empower you with essential CS knowledge.
              Start your learning adventure today.
            </p>
          </div>
          <div className="">
            <img
              src={SearchVector}
              alt="Searching vector illustration"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCourse;
