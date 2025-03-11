"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { handleKick, handleDeleteUser, handleDeleteGuide } from '@/lib/admin/actions/dbUtils';


interface Props {
  src: string;
  alt: string;
  method: "KICK" | "EDIT" | "DELETE" | "DELETEGUIDE" | "EDITGUIDE";
  width: number;
  height: number;
  id: string;
  target: string;
}

const BtnActions: React.FC<Props> = ({ src, alt, width, height, id, method, target}) => {

  const router = useRouter();

  const onBtnHandler = (id: string, target: string) => {
    switch (method) {
      case "KICK":
        handleKick({id, target});
        break;
      case "DELETE":
        handleDeleteUser({id, target});
        break;
      case "EDIT":
        router.push(`/admin/users/edit?id=${id}`);
        break;
      case "EDITGUIDE":
        router.push(`/admin/guides/edit?id=${id}`);
        break;
      case "DELETEGUIDE":
        handleDeleteGuide({id, target});
        break;
    }
  }

  return (
      <button className='flex justify-self-end' type='button' onClick={() => onBtnHandler(id, target)}>
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