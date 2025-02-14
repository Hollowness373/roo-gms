"use server"
import React from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import { eq } from 'drizzle-orm';

const UserAvatar = async(user) => {

  const userImage = await db.select().from(users).where(eq(users.email, user))
  
  console.log(userImage)

  return (
    <Avatar className='mr-3'>
        <AvatarImage src={"https://ik.imagekit.io/nmxcxnfxh/ProfileImage/bryan-profile-pic.jpg"} alt="user-profile" />
    </Avatar>
  )
}

export default UserAvatar