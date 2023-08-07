import React from "react";
import { CourseHeader, Tabs, TabsContentResults } from "../components";
import { useParams } from "react-router";
import courses_content from "../data/courses_content";

const CourseDetails = () => {
  const {id:courseId} = useParams();
  const {books, content, description, name} = courses_content["courses"][courseId]
  return (
    <>
      <CourseHeader
        image={
          "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
        }
      />
      <Tabs/>
      <TabsContentResults courseId={courseId} books={books} content={content} description={description} name={name} />
    </>
  );
};

export default CourseDetails;
