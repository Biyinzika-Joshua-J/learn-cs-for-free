import React from 'react'

const FindCourse = () => {
  return (
    <div className='dark:bg-black dark:text-white'>
        <div className="lg:w-[60%] py-8 w-[90%] mx-auto gap-5">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center ">
                <div className="">
                    <h2 className="text-3xl pb-4 font-bold">Find a course</h2>
                    <p className="">
                        We have gathered the best free video resources that provide a structure way 
                        to teach your self computer science all for free.Get started by searching for a 
                        course

                    </p>
                </div>
                <div className="">
                    <img src="https://cdn.pixabay.com/photo/2015/10/30/12/14/search-1013911_1280.jpg" alt="" className="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FindCourse