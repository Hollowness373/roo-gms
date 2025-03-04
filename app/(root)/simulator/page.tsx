"use client"

import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Page = () => {

  const [ useBlessed, setBlessed ] = useState(false)
  const [ itemRefine, setItemRefine ] = useState("");

  return (
    <div className='flex flex-col items-center w-full rounded-2xl'>
      <div className='flex flex-col items-center p-10 bg-dark-300 w-1/2 h-full rounded-2xl'>
        <h1 className='text-white text-5xl font-semibold'>Refinement Simulator</h1>
        <div className='simulator-container'>
          <div className='flex flex-row items-center gap-2'>
            <h2 className='text-white text-2xl'>Current Level: </h2>
            <h2 className='text-primary text-2xl'>0</h2>
          </div>
          <div className='flex flex-col items-center rounded-2xl'>
            <Image
              src={"/images/2h-weap.png"}
              alt='two-handed-weap'
              height={192}
              width={192}
            />
            <div className='flex flex-row gap-1'>
              <h2 className='text-white text-base'>Refinement Success Rate:</h2>
              <h2 className='text-primary text-base'>40%</h2>
            </div>
          </div>
          <Select onValueChange={setItemRefine}>
            <SelectTrigger className="simulator-form_input">
              <SelectValue placeholder="Select Item Refinement"/>
            </SelectTrigger>
            <SelectContent className='bg-light-600'>
              <SelectItem value="Main Weapon">Main Weapon</SelectItem>
              <SelectItem value="Off Hand">Off Hand</SelectItem>
              <SelectItem value="Armor">Armor</SelectItem>
              <SelectItem value="Glove">Glove</SelectItem>
              <SelectItem value="Shoes">Shoes</SelectItem>
              <SelectItem value="Earrings">Earrings</SelectItem>
              <SelectItem value="Head Wear">Head Wear</SelectItem>
            </SelectContent>
          </Select>
          <div className='flex flex-row items-center gap-2'>
            <Checkbox 
              checked={useBlessed}
              onCheckedChange={() => setBlessed(!useBlessed)}
            />
            <h2 className='text-white text-base'>Use blessed ore.</h2>
          </div>
          <Button>Refine</Button>
        </div>
      </div>
    </div>
  )
}

export default Page