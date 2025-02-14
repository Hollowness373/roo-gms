"use client"

import React from 'react'
import { cn, getInitials } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Session } from 'next-auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation';
import { signOutFromServer } from "@/lib/actions/logout"

const Header = ({ session, userProfile } : { session: Session, userProfile: String}) => {
  
  const router = useRouter();
  const pathname = usePathname();
    
  const handleLogOut = async() => {
    await signOutFromServer();
  }
    
  return <header className='my-10 flex justify-between gap-5'>
    <Link href="/" className='flex flex-row items-center gap-1'>
        <Image src="/icons/logo.svg" alt='logo' width={60} height={50}/>
        <h1 className='font-semibold text-3xl text-light-100'>Panda</h1>
    </Link>
    <ul className='flex flex-row items-center gap-8'>
        <li>
          <Link 
            href="/guides" 
            className={cn('text-base cursor-pointer capitalize', pathname === '/guides' ? 'text-light-200' : 'text-light-100')}
          >Guides</Link>
        </li>
        <li>
          <Link 
            href="/simulator" 
            className={cn('text-base cursor-pointer capitalize', pathname === '/simulator' ? 'text-light-200' : 'text-light-100')}
          >Simulator</Link>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {userProfile === "" ? 
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn-image" />
                  </Avatar>
                  :
                  <Avatar>
                  <AvatarImage src={userProfile as string} alt="user-profile" />
                </Avatar>
              }
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-dark-300 text-light-100 border-dark-100 '>
              <DropdownMenuLabel className='flex flex-row'>
                {userProfile === "" ?
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn-image" />
                  </Avatar>
                  :
                  <Avatar>
                    <AvatarImage src={userProfile as string} alt="user-image" />
                  </Avatar>
                }
                <div className='flex items-center ml-3'>
                  {session?.user?.name}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className='bg-dark-100 h-1'/>
              <DropdownMenuItem onClick={() => {router.push("/my-profile")}} className='focus:bg-accent focus:text-accent-foreground'>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {router.push("/my-profile")}} className='focus:bg-accent focus:text-accent-foreground'>Account Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogOut} className='focus:bg-red-400 focus:text-light-300'>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
    </ul>
  </header>
}

export default Header;