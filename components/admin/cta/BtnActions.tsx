"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { handleKick, handleDeleteUser } from '@/lib/admin/actions/dbUtils';


interface Props {
  src: string;
  alt: string;
  method: "KICK" | "EDIT" | "DELETE" | "DELETEBOOK" | "EDITBOOK";
  width: number;
  height: number;
  id: string;
}

const BtnActions: React.FC<Props> = ({ src, alt, width, height, id, method}) => {

  const router = useRouter();

  const onBtnHandler = (id: string) => {
    switch (method) {
      case "KICK":
        handleKick({id});
        break;
      case "DELETE":
        handleDeleteUser({id});
        break;
      case "EDIT":
        router.push(`/admin/users/edit?id=${id}`);
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