"use client"

import React from 'react'

const GuideVideo = ({ uri }: {uri: string | null}) => {

    return (
        <>
            <div
                className='video-wrapper'>
                <iframe
                    src={uri!} 
                    title='Panda Guide' 
                    allowFullScreen
                >
                </iframe>
            </div>
        </>
    
  )
}

export default GuideVideo;