import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  route: string;
  routeStatus: boolean;
  cover: string;
  title: string;
  description: string;
  
}

const SimulatorCard = ({route, routeStatus, cover, title, description}: Props) => {

  const handleRoute = (e: any) => {
    if (!routeStatus) {
      e.preventDefault();
    }
  }

  return (
    <li>
      <Link href={route} onClick={(e) => handleRoute(e)} className='flex flex-col bg-dark-300 p-5 rounded-2xl gap-4 max-w-sm'>
        <Image
            src={cover}
            alt='card-cover'
            height={250}
            width={450}
            loading="lazy"
        />
        <div>
            <h1 className='text-primary font-semibold text-2xl'>{title}</h1>
            <p className='text-justify break-words text-white mt-3'>
                {description}
            </p>
        </div>
      </Link>
    </li>
  )
}

export default SimulatorCard