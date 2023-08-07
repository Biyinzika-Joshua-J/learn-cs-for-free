import React from "react";
import { CourseOutline } from "../";

const CourseContent = ({ content, courseId }) => {
  const { lessons } = content;
  const topics = [];
  for (const lesson in lessons) {
    topics.push(lesson);
  }
  console.log(lessons);

  return (
    <div className="py-8">
      <div className="mx-auto w-[80%]">
        {topics.map((topic, idx) => (
          <CourseOutline
            topic={topic}
            key={idx}
            total_lessons={lessons[topic]["total_lessons"]}
            total_mins={lessons[topic]["total_mins"]}
            videos={lessons[topic]["videos"]}
            position={idx+1}
            courseId={courseId}
          />
        ))}

        
      </div>
    </div>
  );
};

export default CourseContent;
