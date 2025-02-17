import React from 'react'
import GuideCard from './GuideCard';

interface Props {
  title: string;
  guides: Guide[];
  containerClassName?: string
}

const GuideList = ({ title, guides, containerClassName }: Props) => {

  if(guides.length < 2) return;
  
  return (
    <section className={containerClassName}>
        <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>

        <ul className='guide-list'>
          {guides.map((guide) => (
            <GuideCard key={guide.title} {...guide} />
          ))}
        </ul>
    </section>
  )
}

export default GuideList