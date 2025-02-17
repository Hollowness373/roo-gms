import GuideList from '@/components/GuideList'
import { sampleGuides } from '@/constants'
import React from 'react'

import { db } from "@/database/drizzle";
import { guides } from "@/database/schema";
import { desc } from "drizzle-orm";

const Page = async() => {

  const guidesList = (await db.select().from(guides).limit(24).orderBy(desc(guides.createdAt))) as Guide[];

  return (
    <>
      <form>
        <div>Search Guide</div>
      </form>
      <GuideList 
        title='Guides:'
        guides={guidesList}
        containerClassName='mt-28'
      />
    </>
  )
}

export default Page