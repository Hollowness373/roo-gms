"use client"

import React, { useEffect, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const successRateMap: { [key: number]: number } = {
  0: 100,
  1: 100,
  2: 100,
  3: 55,
  4: 50,
  5: 45,
  6: 40,
  7: 30,
  8: 25,
  9: 10,
  10: 20
};

const Page = () => {

  const [ useBlessed, setBlessed ] = useState(false)
  const [ itemLvl, setItemtLvl ] = useState(0);
  const [ itemRefine, setItemRefine ] = useState("");
  const [ successRate, setSuccessRate ] = useState(0);

  let refineAudio = new Audio("/sounds/refining.mp3");
  let successAudio =  new Audio("/sounds/success.mp3");
  let failAudio = new Audio("/sounds/fail.mp3")

  useEffect(() => {
    setSuccessRate(successRateMap[itemLvl] || 0);
  }, [itemLvl])

  const handleRefine = () => {
    const generateNumber = Math.floor(Math.random() * 100) + 1; //rolls a number from 1 - 100
    if (generateNumber > successRate) {
      failAudio.play();
      //console.log("Fail : ", generateNumber) // debugger
      console.log("Refinement Failed!")
      return false
   }
   successAudio.play();
   return true
  }

  const onRefine = () => {
    refineAudio.play();
    const result = handleRefine();
    //roll for downgrade
    const generateNumber = Math.floor(Math.random() * 100) + 1;
    if(!result && generateNumber <= 50) {
      //decrement lvl
      failAudio.play();
      setItemtLvl(itemLvl - 1);
      return
    }else if (!result && generateNumber > 50) {
      failAudio.play();
      return
    }
    successAudio.play();
    setItemtLvl(itemLvl + 1);
  }

  return (
    <div className='flex flex-col items-center w-full rounded-2xl'>
      <div className='flex flex-col items-center p-10 bg-dark-300 w-1/2 h-full rounded-2xl'>
        <h1 className='text-white text-5xl font-semibold'>Refinement Simulator</h1>
        <div className='simulator-container'>
          <div className='flex flex-row items-center gap-2'>
            <h2 className='text-white text-2xl'>Current Level: </h2>
            <h2 className='text-primary text-2xl'>{itemLvl}</h2>
          </div>
          <div className='flex flex-col items-center rounded-2xl'>
            <Image
              src={"/images/2h-weap.png"}
              alt='two-handed-weap'
              height={192}
              width={192}
              className='rounded-2xl'
            />
            <div className='flex flex-row gap-1'>
              <h2 className='text-white text-base'>Refinement Success Rate:</h2>
              <h2 className='text-primary text-base'>{successRate}%</h2>
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
          <Button onClick={onRefine}>Refine</Button>
        </div>
      </div>
    </div>
  )
}

export default Page