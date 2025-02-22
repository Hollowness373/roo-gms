"use client"

import React from 'react'
import Image from 'next/image'
import { handleBan } from '@/lib/actions/ban';
import { handleDeleteUser } from '@/lib/actions/deleteUser';
import { useRouter } from 'next/navigation';


interface Props {
  src: string;
  alt: string;
  method: "BAN" | "EDIT" | "DELETE" | "DELETEBOOK" | "EDITBOOK";
  width: number;
  height: number;
  id: string;
}

const BtnActions: React.FC<Props> = ({ src, alt, width, height, id, method}) => {

  const router = useRouter();

  const onBtnHandler = (id: string) => {
    switch (method) {
      case "BAN":
        handleBan({id});
        break;
      case "DELETE":
        handleDeleteUser({id});
        break;
      case "EDITBOOK":
        router.push(`/admin/guides/edit?id=${id}`);
        break;
      
    }
  }

  return (
      <button className='flex justify-self-end' type='button' onClick={() => onBtnHandler(id)}>
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