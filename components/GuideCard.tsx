import Link from 'next/link'
import React from 'react'
import GuideCover from './GuideCover'
import { cn } from '@/lib/utils'

const GuideCard = ({ id, title, genre, color, cover}: Guide) => {
  return <li>
        <Link href={`/guides/${id}`}>
            <GuideCover 
                coverColor={color}
                coverImage={cover}
            />
            <div className={cn('mt-4 xs:max-w-40 max-w-28')}>
                <p className='guide-title'>{title}</p>
                <p className='guide-genre'>{genre}</p>
            </div>
        </Link>
  </li>
}
export default GuideCard