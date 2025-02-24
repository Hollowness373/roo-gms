"use client"

import EditGuideForm from '@/components/admin/forms/EditGuideForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { handleFetchGuide } from '@/lib/admin/actions/dbUtils'


const Page = () => {

    const searchParams = useSearchParams();
    const id = searchParams.get("id")!;
    if(!id) {
        redirect("/admin"); //if no params passed, redirect to admin
    }

    const [guideData, setGuideData] = useState<{ 
        id: string; 
        title: string; 
        author: string; 
        classCategory: string; 
        coverUrl: string; 
        coverColor: string; 
        description: string; 
        summary: string; 
        videoUrl: string | null; 
        createdAt: Date | null; 
    } | null>(null);

    useEffect(() => {
        handleFetchGuide({id}).then((data) => setGuideData(data || null));
    }, [])
    
  return (
    <>
        <Button asChild className='back-btn'>
            <Link href="/admin/guides">Go Back</Link>
        </Button>
        <section className="w-full max-w-2xl">
            <EditGuideForm guideData={guideData} />
        </section>
    </>
  )
}

export default Page;