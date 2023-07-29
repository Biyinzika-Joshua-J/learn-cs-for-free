import React from 'react'

const VideoContainer = () => {
  return (
    <div className='w-[100%] h-[80vh] bg-black'>
        <iframe className='w-[100%] h-[100%]' width="560" height="315" src="https://www.youtube.com/embed/d86ws7mQYIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoContainer