"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import RecentUserCard from './RecentUserCard';
import RecentLogs from './RecentLogs';

interface Props {
  newUsers: User[];
  recentLogs: Logs[];
}

const RecentData = ({newUsers, recentLogs}: Props) => {

  const router = useRouter();
  
  return (
    <div className=' w-full justify-between'>
      <div className='w-full bg-white p-5 rounded-2xl'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-dark-400 font-semibold text-xl'>Recent Sign-Ups</h2>
          <Button onClick={() => router.push("/admin/users")} className='bg-light-300 hover:bg-light-300'>
            <h2 className='text-primary-admin font-bold'>View All</h2>
          </Button>
        </div>
        <ul className='gap-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
          {newUsers.map((data) => (
            <RecentUserCard key={data.id} {...data}/>
          ))}
        </ul>
      </div>
      <div className='w-full bg-white p-5 rounded-2xl mt-5'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-dark-400 font-semibold text-xl'>Recent Logs</h2>
          <Button className='bg-light-300 hover:bg-light-300'>
            <h2 className='text-primary-admin font-bold'>View All</h2>
          </Button>
        </div>
        <ul className='mt-6'>
          {recentLogs.map((data) => (
            <RecentLogs key={data.id} {...data}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecentData