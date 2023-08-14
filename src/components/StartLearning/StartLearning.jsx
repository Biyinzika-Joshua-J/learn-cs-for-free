import React from "react";
import LearnVectorIllustration from "../../assets/images/learning-vector.png";

const StartLearning = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="lg:w-[60%] py-8 w-[90%] mx-auto gap-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center ">
          <div className="lg:order-1 md:order-2 order-2">
            <img
              width={350}
              height={350}
              src={LearnVectorIllustration}
              alt="learning vector illustration"
              className=""
            />
          </div>
          <div className="lg:order-2 md:order-1 order-1">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Start Learning</h2>
            <p className="dark:text-gray-400 text-gray-400">
              Experience a well-structured curriculum that guides you through
              essential concepts via top-notch YouTube videos. Progress
              logically from fundamentals to advanced topics. Start your
              learning journey, leveraging our interactive in-browser video
              interface for a seamless educational adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
