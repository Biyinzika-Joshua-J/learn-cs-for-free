import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { updateCurrentQuestion } from "../../features/quizeSlice";

const QuizeQuestions = ({ questions }) => {
  const dispatch = useDispatch();
  const currentQuestionIdx = useSelector(
    (state) => state.quize.currentQuestion
  );
  let correntAns = questions[currentQuestionIdx].correctAnswer[1];

  const [correctAnsBackgroundColor, setCorrectAnsBackgroundColor] =
    useState(false);
  const [wrongAnsBackgroundColor, setWrongAnsBackgroundColor] = useState(false);
  const [wrongAnsIndex, setWrongAnsIndex] = useState(0);

  function handleSelectedOption(idx, option) {
    correntAns = questions[currentQuestionIdx].correctAnswer[1];
    if (correntAns === option) {
      setCorrectAnsBackgroundColor(true);
    } else {
      setCorrectAnsBackgroundColor(true);
      setWrongAnsBackgroundColor(true);
      setWrongAnsIndex(idx);
    }
  }

  function prevHandler() {
    if (currentQuestionIdx != 0) {
      dispatch(updateCurrentQuestion(currentQuestionIdx - 1));
      setCorrectAnsBackgroundColor(false);
      setWrongAnsBackgroundColor(false);
    }
  }

  function nextHandler() {
    if (currentQuestionIdx != 28) {
      dispatch(updateCurrentQuestion(currentQuestionIdx + 1));
      setCorrectAnsBackgroundColor(false);
      setWrongAnsBackgroundColor(false);
    }
  }


  return (
    <div className="flex justify-center relative  ">
      <div className="py-8 w-[100%] ">
        <div className="italic text-center text-[1.2rem]">
          {questions[currentQuestionIdx].question}
        </div>
        {questions[currentQuestionIdx].options.map((option, idx) => (
          <button
            onClick={() => handleSelectedOption(idx, option)}
            key={idx}
            className={`${
              correctAnsBackgroundColor &&
              option === correntAns &&
              "bg-blue-400"
            } ${
              wrongAnsBackgroundColor && idx === wrongAnsIndex && "bg-red-500"
            } block w-[100%] my-2 py-4 border-2 border-black font-bold `}
          >
            {" "}
            <span className="text-center px-4">{option}</span>
            <span className="">
              {correctAnsBackgroundColor && option === correntAns && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="1xl"
                  style={{ color: "white" }}
                />
              )}
            </span>
            <span>
              {wrongAnsBackgroundColor && idx === wrongAnsIndex && (
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  size="1xl"
                  style={{ color: "white" }}
                />
              )}
            </span>
          </button>
        ))}

        <div className="">
          {correctAnsBackgroundColor && (
            <div>
              {" "}
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="1xl"
                style={{ color: "#3b82f6" }}
              />{" "}
              Correct Answer: {questions[currentQuestionIdx].correctAnswer[1]}{" "}
            </div>
          )}
        </div>

        <div className="flex flex-row justify-between items-center py-2">
          <button
            onClick={() => prevHandler()}
            className={`bg-blue-400 hover:bg-blue-200 py-2 px-4 active:scale-50 transition-all ease-in-out`}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
          </button>
          <span>{currentQuestionIdx + 1 + " of " + 29}</span>
          <button
            onClick={() => nextHandler()}
            className={`bg-blue-400 hover:bg-blue-200 py-2 px-4 active:scale-50 transition-all ease-in-out`}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizeQuestions;
