import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AboutCourse, CourseContent, CourseResources } from '..'

const TabsContentResults = () => {
 const activeTabIdx = useSelector(state => state.tabs.activeTabIdx)

  return (
    <div>
        {activeTabIdx === 0 && <AboutCourse/>}
        {activeTabIdx === 1 && <CourseContent/>}
        {activeTabIdx === 2 && <CourseResources/>}
    </div>
  )
}

export default TabsContentResults