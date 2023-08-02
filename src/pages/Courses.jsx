import React from "react";
import { coursesList } from "../data/courses_list";
import { Card } from "../components";

const Courses = () => {
  return (
    <div className="dark:bg-black dark:text-white py-8">
      <div className="py-8">
        <h1 className="text-center text-3xl font-bold">
          All Courses
        </h1>
      </div>
      <div className="mx-auto w-[90%]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
          {coursesList["courses"].slice(0, 4).map((course, idx) => (
            <Card
              url={"/course"}
              title={course.courseName}
              bio={course.shortBio}
              level={course.level}
              id={course.courseId}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
