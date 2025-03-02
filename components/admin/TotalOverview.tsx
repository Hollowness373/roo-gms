import React from 'react'

interface Props {
    titleCard: string;
    totalNum?: number;
}

const TotalOverview = ({titleCard, totalNum}: Props) => {
  return (
    <div className='w-full bg-white p-6 rounded-2xl flex flex-col'>
        <h2 className='text-slate-500 text-base font-semibold'>{titleCard}</h2>
        <h2 className='font-semibold text-2xl text-dark-400 mt-5'>{totalNum}</h2>
    </div>
  )
}

export default TotalOverview