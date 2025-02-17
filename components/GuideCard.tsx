import Link from 'next/link'
import React from 'react'
import GuideCover from './GuideCover'
import { cn } from '@/lib/utils'

const GuideCard = ({ id, title, classCategory, coverColor, coverUrl}: Guide) => {
  return <li>
        <Link href={`/guides/${id}`}>
            <GuideCover 
                coverColor={coverColor}
                coverImage={coverUrl}
            />
            <div className={cn('mt-4 xs:max-w-40 max-w-28')}>
                <p className='guide-title'>{title}</p>
                <p className='guide-genre'>{classCategory}</p>
            </div>
        </Link>
  </li>
}
export default GuideCard