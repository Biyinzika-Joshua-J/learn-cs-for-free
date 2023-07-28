import React from "react";
import { CourseHeader, Tabs, TabsContentResults } from "../components";

const CourseDetails = () => {
  return (
    <>
      <CourseHeader
        image={
          "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
        }
      />
      <Tabs/>
      <TabsContentResults/>
    </>
  );
};

export default CourseDetails;
