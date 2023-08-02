import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

const QuizeProgress = () => {
    const [progress, setProgress] = useState(0)
    const currentQuestionIdx = useSelector(state => state.quize.currentQuestion);

    useEffect(()=>{
        let updateProgress = parseInt(((currentQuestionIdx+1)/29)*100);
        setProgress(updateProgress);
    }, [currentQuestionIdx])

    
  return (
    <div className='py-4'>
        <div className="w-[100%] relative">
            <div className="absolute top-0 left-0 w-[100%] bg-gray-400 h-2"></div>
            <div style={{width:`${progress}%`}} className={`absolute z-50 top-0 left-0  bg-blue-400 h-2 transition-all ease-in-out`}></div>
        </div>
    </div>
  )
}

export default QuizeProgress