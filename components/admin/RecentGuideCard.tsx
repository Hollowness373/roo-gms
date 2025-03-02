import Link from 'next/link'
import React from 'react'
import GuideCover from '../GuideCover'
import Image from 'next/image'

const RecentGuideCard = ({ id, title, classCategory, coverColor, coverUrl, createdAt, author}: Guide) => {
  return (
    <li>
        <Link href={`/guides/${id}`} className='flex flex-row mt-6 gap-2'>
            <GuideCover 
                variant="small"
                coverColor={coverColor}
                coverImage={coverUrl}
            />
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className='text-dark-400 font-semibold text-base'>{title}</h2>
                    <div className='flex flex-row gap-1 text-slate-500 '>
                        <h2 className='text-sm'>By {author} • </h2>
                        <h2 className='text-sm'>{classCategory}</h2>
                    </div>
                </div>
                <div className='flex gap-1 '>
                    <Image
                        src={"/icons/admin/calendar.svg"}
                        alt='calendar-icon'
                        height={15}
                        width={15}
                    />
                    <p className='text-xs text-slate-500 '>{createdAt?.toLocaleDateString()}</p>
                </div>
            </div>
        </Link>
    </li>
  )
}

export default RecentGuideCard