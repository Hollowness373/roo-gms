"use client"

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import RecentGuideCard from './RecentGuideCard'

interface Props {
    recentGuides: Guide[];
}

const RecentGuide = ({recentGuides}: Props) => {

    const router = useRouter();

    const handleRoute = (path: string) => {
        if(path === "guides") {
            router.push("/admin/guides");
        } else if (path === "new-guide") {
            router.push("/admin/guides/new");
        } else {
            return
        }
    }

    return (
        <div className='w-full bg-white p-5 rounded-2xl'>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-dark-400 font-semibold text-xl'>Recently Added Guides</h2>
                <Button onClick={() => handleRoute("guides")} className='bg-light-300 hover:bg-light-300'>
                    <h2 className='text-primary-admin font-bold'>View All</h2>
                </Button>
            </div>
            <div className='mt-4'>
                <Button onClick={() => handleRoute("new-guide")} className='w-full bg-light-300 justify-start hover:bg-light-300 h-20 '>
                    <div className='flex justify-center bg-white h-12 w-12 rounded-full'>
                        <Image
                            src={'/icons/admin/plus.svg'}
                            alt='add-guideBtn'
                            width={18}
                            height={18}
                        />
                    </div>
                    <h2 className='text-dark-400 font-semibold text-base'>Add New Book</h2>
                </Button>
                <ul>
                    {recentGuides.map((guide) => (
                        <RecentGuideCard key={guide.id} {...guide}/>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default RecentGuide