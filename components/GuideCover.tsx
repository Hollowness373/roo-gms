import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import GuideCoverSvg from './GuideCoverSvg';

type GuideCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<GuideCoverVariant, string> = {
    extraSmall: 'guide-cover_extra_small',
    small: 'guide-cover_small',
    medium: 'guide-cover_medium',
    regular: 'guide-cover_regular',
    wide: 'guide-cover_wide',

}

interface Props {
    className?: string;
    variant?: GuideCoverVariant;
    coverColor: string;
    coverImage: string;
}

const GuideCover = ({ className, variant = 'regular', coverColor = '#012B48', coverImage = 'https://placehold.co/400x600.png'}: Props) => {
  return (
    <div className={cn('relative transition-all duration-300', variantStyles[variant], className)}>
        <GuideCoverSvg coverColor={coverColor}/>
        <div className='absolute z-10' style={{ left: '12%', width: '87.5%', height: "88%"}}>
            <Image src={coverImage} alt='guide cover' fill className='rounded-sm object-fill' />
        </div>
    </div>
  )
}

export default GuideCover