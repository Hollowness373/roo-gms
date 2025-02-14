"use client"
import React from 'react'
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
import { getInitials } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { signOutFromServer } from "@/lib/actions/logout"

const MenuProfile = async({ session } : {session: Session}) => {

    const router = useRouter();

    //const getUserImage = await db.select().from(users).where(eq(users.email, session?.user?.email))
        
    const handleLogOut = async() => {
        await signOutFromServer();
    }

    return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarFallback className='bg-amber-100'>
                    {getInitials(session?.user?.name || 'IN')}
                </AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-dark-300 text-light-100 border-dark-100 '>
            <DropdownMenuLabel className='flex flex-row'>
                {session?.user?.image?.length == 0 ? 
                    <Avatar>
                        <AvatarFallback className='bg-amber-100 mr-3'>
                        {getInitials(session?.user?.name || 'IN')}
                        </AvatarFallback>
                    </Avatar>
                    :
                    <Avatar className='mr-3'>
                        <AvatarImage src={"https://ik.imagekit.io/nmxcxnfxh/ProfileImage/bryan-profile-pic.jpg"} alt="user-profile" />
                    </Avatar>
                }
                <div className='flex items-center'>
                    {session?.user?.name}
                </div>
            </DropdownMenuLabel>
        <DropdownMenuSeparator className='bg-dark-100 h-1'/>
            <DropdownMenuItem onClick={() => {router.push("/my-profile")}} className='focus:bg-accent focus:text-accent-foreground'>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {router.push("/my-profile")}} className='focus:bg-accent focus:text-accent-foreground'>Account Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogOut} className='focus:bg-red-400 focus:text-light-300'>Logout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}

export default MenuProfile