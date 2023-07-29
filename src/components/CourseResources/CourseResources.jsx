import React from 'react'
import {Card} from '../'
import { books } from '../../data/books'

const CourseResources = () => {
  return (
    <div className=''>
        <div className="mx-auto py-8 lg:w-[70%] w-[90%] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {
                books["books"].map((book, idx) => (
                    <Card title={book.name} image={book.image} link={book.link}/>
                ))
            }
        </div>
    </div>
  )
}

export default CourseResources