import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import GuideCover from './GuideCover'

const GuideOverview = ({ title, author, classCategory, videoUrl, coverColor, coverUrl, description, summary } : Guide) => {
  return (
    <section className='guide-overview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1>{title}</h1>
            <div className='guide-info'>
                <p>By <span className='font-semibold text-light-200'>{author}</span></p>
                <p>Category <span className='font-semibold text-light-200'>{classCategory}</span></p>
                <div className='flex flex-row gap-1'>
                    <Image src="/icons/star.svg" alt='star' width={22} height={22} />
                </div>
            </div>
            <p className='guide-description'>{summary}</p>
            <Button className='guide-overview_btn'>
                <Image src="/icons/book.svg" alt='guide' width={20} height={20} />
                <p className='font-bebas-neue text-xl text-dark-100'>View</p>
            </Button>
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