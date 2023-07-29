import React from 'react'
import { LearnCourseContentOutline, VideoContainer } from '../components'

const Learn = () => {
  return (
    <div className='relative min-h-[100vh]'>
       <div className="grid grid-cols-3 gap-0">
          <div className="col-span-2">
                <VideoContainer/>
            </div>
            <LearnCourseContentOutline/>
       </div>
    </div>
  )
}

export default Learn