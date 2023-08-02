import React from "react";
import { quizes } from "../data/quizes";
import { Card } from "../components";
import { useDispatch } from "react-redux";
import { updateQuizeIsOpen } from "../features/quizeSlice";
import { updateCurrentQuestion } from "../features/quizeSlice";

const Quizes = () => {

  const dispatch = useDispatch();

  function openQuizeHandler(){
    dispatch(updateQuizeIsOpen());
    dispatch(updateCurrentQuestion(0));
  }

  return (
    <div className="py-8">
      <div className="mx-auto w-[90%] flex flex-col items-center">
        <h1 className="text-center text-3xl pb-10">Quizes</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {quizes["quizes"].map((quize, idx) => (
            <Card
              url={"/quizes"}
              key={idx}
              id={quize.id}
              image={quize.image}
              title={quize.name}
              questions={quize.number_of_questions}
              duration={quize.duration_minutes}
              onClick={()=>openQuizeHandler()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizes;
