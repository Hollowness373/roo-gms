import GuideForm from '@/components/admin/forms/GuideForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
        <Button asChild className='back-btn'>
            <Link href="/admin/guides">Go Back</Link>
        </Button>
        <section className="w-full max-w-2xl">
            <GuideForm />
        </section>
    </>
  )
}

export default Page