import React from 'react'
import {Card} from '../'
import { coursesList } from '../../data/courses_list'

const Courses = () => {
  return (
    <div className='dark:bg-black dark:text-white py-8'>
        <div className="mx-auto w-[90%]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
            {
                coursesList["courses"].map((course, idx) => (
                    <Card title={course.courseName} bio={course.shortBio} level={course.level} id={course.courseId} image={course.image}/>
                ))
            }
              
            </div>
        </div>
    </div>
  )
}

export default Courses