"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import GuideCover from './GuideCover'
import { useRouter } from 'next/navigation';

interface GuideOverviewProps extends Guide {
    showBtn?: boolean;
}

const GuideOverview = ({ id, title, author, classCategory, videoUrl, coverColor, coverUrl, description, summary, showBtn = false } : GuideOverviewProps) => {
    
    const router = useRouter();

    return (
    <section className='guide-overview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1>{title}</h1>
            <div className='guide-info'>
                <p>By: <span className='font-semibold text-light-200'>{author}</span></p>
                <p>Category: <span className='font-semibold text-light-200'>{classCategory}</span></p>
            </div>
            <p className='guide-description'>{summary}</p>
            {showBtn && (
                <Button onClick={() => {router.push(`/guides/${id}`)}} className='guide-overview_btn'>
                    <Image src="/icons/book.svg" alt='guide' width={20} height={20} />
                    <p className='font-bebas-neue text-xl text-dark-100'>View</p>
                </Button>
            )}
        </div>
        <div className='relative flex flex-1 justify-center'>
            <div className='relative'>
                <GuideCover
                    variant="wide"
                    className="z-10"
                    coverColor={coverColor}
                    coverImage={coverUrl}
                />
                <div className='absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden'>
                    <GuideCover
                        variant="wide"
                        coverColor={coverColor}
                        coverImage={coverUrl}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default GuideOverview