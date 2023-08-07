import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AboutCourse, CourseContent, CourseResources } from '..'

const TabsContentResults = ({name, description, content, books, courseId}) => {
 const activeTabIdx = useSelector(state => state.tabs.activeTabIdx)

  return (
    <div>
        {activeTabIdx === 0 && <AboutCourse description={description}/>}
        {activeTabIdx === 1 && <CourseContent content={content} courseId={courseId}/>}
        {activeTabIdx === 2 && <CourseResources books={books}/>}
    </div>
  )
}

export default TabsContentResults