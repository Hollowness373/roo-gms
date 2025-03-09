"use client"

import React, { useState } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

interface Props {
    image: string;
    alt: string;
    className: string;
    selected: string;
    handleBtn: () => void;
}

const ChangeAvatar = ({image, alt, className, selected, handleBtn}: Props) => {

  const [ isSelected, setSelected ] = useState(false);

  const onClickEvent = () => {
    handleBtn();
    setSelected(true);
  }

  return (
    <li>
      <button onClick={onClickEvent}>
        <Avatar className={isSelected ? `${className} ${selected}` : `${className}`}>
          <AvatarImage src={image} alt={alt} />
        </Avatar>
      </button>
    </li>
  )
}

export default ChangeAvatar