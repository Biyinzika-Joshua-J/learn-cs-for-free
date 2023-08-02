import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router'
import { QuizeContainer } from '../components';
import { quizes_collection } from '../data/quizes_collection';
import { course_names } from '../data/course_names';
import {QuizeQuestions, QuizeProgress} from '../components';
import { useSelector } from 'react-redux';


const Quize = () => {
    const navigate = useNavigate();
    const {id:quizId} = useParams();
    const questions = quizes_collection[quizId];
    const isQuizWindowOpen = useSelector(state => state.quize.open);

    useEffect(() => {
        if (isQuizWindowOpen === false){
            navigate('/quizes')
        }
    }, [isQuizWindowOpen])

 
  return (
    <div>
        <QuizeContainer>
            <h1 className='text-center text-2xl font-bold'>{course_names[quizId]}</h1>
            <QuizeProgress/>
            <QuizeQuestions questions={questions}/>
        </QuizeContainer>
    </div>
  )
}

export default Quize