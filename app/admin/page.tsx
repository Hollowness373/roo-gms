import React from 'react';
import RecentData from '@/components/admin/RecentData'
import RecentGuide from '@/components/admin/RecentGuide'
import TotalOverview from '@/components/admin/TotalOverview'
import { fetchHomeData } from '@/lib/admin/actions/homedata'
import { db } from "@/database/drizzle";
import { guides, users, logs } from "@/database/schema";
import { desc } from "drizzle-orm";

const Page = async() => {

  const data = await fetchHomeData();
  const guidesList = (await db.select().from(guides).limit(5).orderBy(desc(guides.createdAt))) as Guide[];
  const recentLogs = await db.select().from(logs).limit(5).orderBy(desc(logs.createdAt))
  const newUsers = await db.select().from(users).limit(6).orderBy(desc(users.createdAt))

  return (
    <section className='bg-light-300 w-full'>
      <div className='flex-row flex gap-5'>
          <TotalOverview 
            titleCard='Panda Members'
            totalNum={data?.totalPanda}
          />
          <TotalOverview 
            titleCard='Total Users'
            totalNum={data?.totalUsers}
          />
          <TotalOverview 
            titleCard='Total Guides'
            totalNum={data?.totalGuides}
          />
      </div>
      <div className='mt-5 flex gap-5'>
          <RecentData newUsers={newUsers} recentLogs={recentLogs} />
          <RecentGuide recentGuides={guidesList}/>
      </div>
    </section>
  )
}

export default Page