"use client"

import GuideList from '@/components/GuideList'
import React from 'react'
import { initialFetchGuide, queryFetchGuide } from '@/lib/actions/fetchGuide';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import GuideSearchResult from '@/components/GuideSearchResult';

const Page = () => {
  const [guidesList, setGuidesList] = useState<Guide[]>([]);
  const [ query, setQuery ] = useState("")
  const [isLoading, setIsLoading] = useState(true);

  const fetchAll = () => {
    initialFetchGuide().then((data) => {
      if (data) {
        setGuidesList(data);
      }
      setIsLoading(false)
    });
  }

  useEffect(() => {
    initialFetchGuide().then((data) => {
      if (data) {
        setGuidesList(data);
      }
      setIsLoading(false)
    });
  }, []);

  useEffect(() => {
    if (query === "") {
      fetchAll();
      return
    }
    setIsLoading(true)
    queryFetchGuide({ query }).then((data) => {
      if (data) {
        setGuidesList(data);
      }
      setIsLoading(false)
    });
  }, [query])

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-light-100 mb-4'>LEARN NEW GAME MECHANICS:</h2>
        <h1 className='text-white text-5xl font-semibold'>Explore and Search for</h1>
        <div className='flex flex-row'>
          <h1 className='text-light-200 text-5xl font-semibold'>Any Guide </h1>
          <h1 className='text-white text-5xl font-semibold ml-3'>In Our Library</h1>
        </div>
        <div className='flex flex-row px-5 w-[50%] mt-6 bg-dark-300 rounded-md'>
          <Image 
            src={"/icons/search-fill.svg"}
            alt='search-icon'
            height={20}
            width={20}
          />
          <Input 
            type="search"
            placeholder='Search guide title, author, or class..'
            onChange={(e) => setQuery(e.target.value)}
            className='w-full min-h-14 border-none text-base placeholder:font-normal text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none'
          />
        </div>
      </div>
      {isLoading ? (
        <div className="mt-28 h-screen flex justify-center">
          <div >
            <img src='/images/fetching.gif' alt='fetching-view' height={150} width={150}/>
            </div>
        </div>
      ) : (
        <GuideSearchResult 
          title='Search Results:'
          guides={ guidesList || [] }
          containerClassName='mt-28'
        /> 
      )}
    </>
  )
}

export default Page;

/*
{isLoading ? (
        <div className="flex justify-center mt-28 h-100 bg-red">Loading...</div>
      ) : (
        <GuideList 
          title='Guides:'
          guides={guidesList || []}
          containerClassName='mt-28'
        />
      )}
*/