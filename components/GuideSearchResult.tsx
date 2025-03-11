import React from 'react'
import GuideCard from './GuideCard';
import Image from 'next/image';

interface Props {
  title: string;
  guides: Guide[];
  containerClassName?: string
}

const GuideSearchResult = ({ title, guides, containerClassName }: Props) => {

  //if(guides.length < 2) return;
  console.log(guides);
  
  return (
    <section className={containerClassName}>
        <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>

        {guides.length > 0 ? (
            <ul className='guide-list'>
                {guides.map((guide) => (
                <GuideCard key={guide.title} {...guide} />
                ))}
            </ul>
        ): (
            <div className='flex flex-col items-center h-screen w-full p-28'>
                <Image
                    src={"/icons/no-result.svg"}
                    alt='no-result-icon'
                    height={200}
                    width={200} 
                />
                <h2 className='text-2xl text-white mt-4 mb-1'>No Results Found</h2>
                <p className='text-light-100'>We couldn't find any guides matching your search.</p>
                <p className='text-light-100'>Try using different keywords or check for typos.</p>
            </div>
        )}
    </section>
  )
}

export default GuideSearchResult;