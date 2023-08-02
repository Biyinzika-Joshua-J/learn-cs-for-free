import React from 'react'
import { useParams } from 'react-router'
import { QuizeContainer } from '../components';
import { quizes_collection } from '../data/quizes_collection';
import { course_names } from '../data/course_names';
import {QuizeQuestions} from '../components';

const Quize = () => {
    const {id:quizId} = useParams();
    const questions = quizes_collection[quizId];
 
  return (
    <div>
        <QuizeContainer>
            <h1 className='text-center text-2xl font-bold'>{course_names[quizId]}</h1>
            <QuizeQuestions questions={questions}/>
        </QuizeContainer>
    </div>
  )
}

export default Quize