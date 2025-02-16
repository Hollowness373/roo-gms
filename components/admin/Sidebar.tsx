"use client"

import React, { useEffect, useState} from 'react'
import { adminSideBarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Session } from 'next-auth'

const Sidebar = ({ session, userImage }: { session: Session, userImage: String }) => {

    const pathName = usePathname();

  return (
    <div className='admin-sidebar'>
        <div>
            <div className="logo">
                <Image src="/icons/admin/logo.svg" alt='logo' height={50} width={50}/>
                <h1>Panda</h1>
            </div>
            <div className="mt-10 flex flex-col gap-5">
                {adminSideBarLinks.map((link) => {
                    const isSelected = (link.route !== '/admin' && pathName.includes(link.route) && link.route.length > 1 || pathName === link.route);

                    return (
                        <Link href={link.route} key={link.route}>
                            <div className={cn('link', isSelected && "bg-primary-admin shadow-sm")}>
                                <div className="relative size-5">
                                    <Image src={link.img} alt='route-icon' fill className={`${isSelected ? "brightness-0 invert" : ""}  object-contain`} />
                                </div>
                                <p className={cn(isSelected ? 'text-white' : 'text-dark')}>{link.text}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
        <div className="user">
            {userImage === "" ?
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn-image" />
                </Avatar>
            :
                <Avatar>
                    <AvatarImage src={userImage as string} alt="shadcn-image" />
                </Avatar>
            }
            <div className="flex flex-col max-md:hidden">
                <p className='font-semibold text-dark-200'>{session?.user?.name}</p>
                <p className='text-light-500 text-xs'>{session?.user?.email}</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar