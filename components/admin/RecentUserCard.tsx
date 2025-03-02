import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

const RecentUserCard = ({ id, inGameName, email, userImage }: User) => {
  return (
    <li>
        <div className='flex flex-col justify-center items-center mt-6 bg-light-300 p-2 rounded-2xl'>
            {userImage === "" ? (
                <Avatar >
                    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn-image" />
                </Avatar>
            ) : (
                <Avatar>
                    <AvatarImage src={userImage as string} alt="user-image" />
                </Avatar>
            )}
            <h2 className='text-dark-400 font-semibold text-base'>{inGameName}</h2>
            <p className='text-center text-slate-500 text-xs truncate w-full whitespace-nowrap overflow-hidden'>
                {email}
            </p>
        </div>
    </li>
  )
}

export default RecentUserCard