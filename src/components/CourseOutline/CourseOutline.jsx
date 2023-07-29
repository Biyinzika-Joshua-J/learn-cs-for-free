import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {CourseOutlineItem} from '../'

const children =[
    {
        link: '',
        time:'',

    }
]

const CourseOutline = ({title, children}) => {
    const [open, setOpen] = useState(false)
    function openHandler(){
        setOpen(prev => !prev)
    }
  return (
    <div className=' border-b-[1px] border-black'>
        <button onClick={()=>openHandler()} className="flex flex-row items-center  border-1 border-gray-500 bg-gray-300 w-[100%]">
            <div className="">
                <button className="py-4 px-4" onClick={()=>openHandler()}>
                    {open===true?<FontAwesomeIcon  icon={faChevronUp}/>:<FontAwesomeIcon icon={faChevronDown}/>}
                </button>
            </div>
            <div className="ml-8 flex flex-row items-center justify-between w-[100%] ">
                <div className="font-bold">Introduction to computer science</div>
                <div className="pr-4">20 lessons: 40 mins</div>
            </div>
        </button>
       {open && <div className="border-2 border-gray-300 py-4 px-4">
            <CourseOutlineItem/>
            <CourseOutlineItem/>
            <CourseOutlineItem/>
            <CourseOutlineItem/>
        </div>}
    </div>
  )
}

export default CourseOutline