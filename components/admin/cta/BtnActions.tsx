"use client"

import React from 'react'
import Image from 'next/image'
import { handleBan } from '@/lib/actions/ban';
import { handleDeleteUser } from '@/lib/actions/deleteUser';

interface Props {
  src: string;
  alt: string;
  method: "BAN" | "EDIT" | "DELETE";
  width: number;
  height: number;
  id: string;
}

const BtnActions: React.FC<Props> = ({ src, alt, width, height, id, method}) => {

  const onBanHandler = (id: string) => {
    if (method === "BAN") {
      handleBan({id});
    } else if (method === "DELETE") {
      handleDeleteUser({id})
    }
  }

  return (
      <button className='flex justify-self-end' type='button' onClick={() => onBanHandler(id)}>
        <Image 
          src={src}
          alt={alt} 
          width={width} 
          height={height}
        />
      </button>
  )
}

export default BtnActions