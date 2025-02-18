import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { db } from '@/database/drizzle'
import { guides } from '@/database/schema'
import BtnActions from '@/components/admin/cta/BtnActions'
import GuideCover from '@/components/GuideCover'

const Page = async() => {

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
  const guidesData = await db.select().from(guides);

  return (
    <section className='w-full rounded-2xl bg-white p-7'>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Guides</h2>
        <Button className='bg-primary-admin' asChild>
          <Link href="/admin/guides/new" className='text-white'>+ Create New Guide</Link>
        </Button>
      </div>
      <div className='mt-7 w-full overflow-hidden'>
        <Table className='rounded-t-xl overflow-hidden'>
          <TableCaption>List of all guides</TableCaption>
            <TableHeader className='bg-primary-admin'>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guidesData.map((guide) => (
                <TableRow key={guide.id}>
                  <TableCell className="flex flex-row items-center gap-2 font-medium">
                    <div className='relative'>
                      <GuideCover
                        variant="extraSmall"
                        className="z-10"
                        coverColor={guide.coverColor}
                        coverImage={guide.coverUrl}
                      />
                    </div>
                    {guide.title}
                  </TableCell>
                  <TableCell>{guide.classCategory}</TableCell>
                  <TableCell>{guide.author}</TableCell>
                  <TableCell>{guide.createdAt?.toLocaleDateString('en-us', options).replace(/([a-zA-Z]+)\./, '$1.')}</TableCell>
                  <TableCell>
                    <BtnActions
                      id={guide.id}
                      method="EDIT"
                      src='/icons/admin/ban.svg'
                      alt='ban-btn'
                      width={20}
                      height={20}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
      </div>
    </section>
  )
}

export default Page