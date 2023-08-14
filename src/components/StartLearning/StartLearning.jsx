import React from "react";
import LearnVectorIllustration from "../../assets/images/learning-vector.png";

const StartLearning = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="lg:w-[60%] py-8 w-[90%] mx-auto gap-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center ">
          <div className="">
            <img
              width={250}
              height={250}
              src={LearnVectorIllustration}
              alt="learning vector illustration"
              className=""
            />
          </div>
          <div className="">
            <h2 className="text-3xl pb-4 font-bold">Start Learning</h2>
            <p className="">
              Follow a structured approach in your learning. Show up every day
              and live the rest to us. Get started by finding a course
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
