"use client"

import React, { useEffect, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SimulatorCard from '@/components/SimulatorCard';
import { simCardLinks } from '@/constants';


const Page = () => {


  return (
    <div className='flex flex-col items-center w-full rounded-2xl'>
      <h1 className='text-white text-5xl font-semibold'>Simulate Game Mechanics</h1>
      <ul className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 mt-20'>
        {simCardLinks.map((data) => (
          <SimulatorCard 
            key={data.id} 
            route={data.route}
            routeStatus={data.routeStatus}
            cover={data.img}
            title={data.cardTitle}
            description={data.cardDescription}
          />
        ))}
      </ul>
    </div>
  )
}

export default Page