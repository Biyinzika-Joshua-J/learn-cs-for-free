import React from 'react'
import {Card} from '../'
import { coursesList } from '../../data/courses_list'

const Courses = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white py-8'>
        <div className="mx-auto w-[90%]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
            {
                coursesList["courses"].slice(0,4).map((course, idx) => (
                    <Card url={'/course'} title={course.courseName} bio={course.shortBio} level={course.level} id={course.courseId} image={course.image}/>
                ))
            }
              
            </div>
        </div>
    </div>
  )
}

export default Courses