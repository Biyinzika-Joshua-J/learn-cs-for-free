import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const CourseProgress = () => {
  let percentage = 18;
  return (
    <div className="mr-8" style={{ width: 50, height: 50 }}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={{
          path: {
            // Path color
            stroke: `#3b82f6`,
          },
        }}
      >
        <FontAwesomeIcon
          icon={faTrophy}
          size="1xl"
          style={{ color: "#3b82f6" }}
        />
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CourseProgress;
