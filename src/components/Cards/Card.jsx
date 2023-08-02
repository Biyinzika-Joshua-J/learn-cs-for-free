import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  title,
  bio,
  url,
  id,
  image,
  level,
  link,
  duration,
  questions,
  onClick,
}) => {
  return (
    <Link
      to={`${url}/${id}`}
      className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col"
      onClick={onClick?() => onClick():()=>{}}
    >
      <img
        className="rounded-t-lg h-36 w-full object-cover"
        src={image}
        alt=""
      />
      <div className="p-5 flex-grow flex flex-col justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bio}
        </p>
        {level && (
          <div className=" relative">
            <div className="w-[100%] h-1 bg-gray-200"></div>
            <div className="absolute top-0 left-0 w-[0%] h-1 bg-blue-400"></div>
            <div className="italic py-2">0% progress</div>
          </div>
        )}
        {level && (
          <div className=" flex flex-row justify-between">
            <div className="">
              <span className="font-bold">Level:</span>
            </div>
            <div className="italic">
              <span
                className={
                  level === "Beginner"
                    ? "text-blue-500"
                    : level === "Intermediate"
                    ? "text-green-600"
                    : "text-red-500"
                }
              >
                {level}
              </span>
            </div>
          </div>
        )}
        {questions && (
          <div className=" flex flex-row justify-between">
            <div className="">
              <span className="font-bold dark:text-white">
                {questions} questions
              </span>
            </div>
            <div className="italic">
              <span className="text-green-500">{duration} min</span>
            </div>
          </div>
        )}
        {/*<a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start Learning
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>*/}
      </div>
    </Link>
  );
};

export default Card;
