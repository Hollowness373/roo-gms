"use client"

import ChangeAvatar from '@/components/ChangeAvatar'
import { sampleAvatars } from '@/constants'
import React, { useState, useEffect } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { getSession } from '@/lib/actions/session'
import Image from 'next/image'
import FileUpload from '@/components/FileUpload'


interface AvatarProps {
    image: string;
    alt: string;
}

const page = () => {


    const [ selectedAvatar, setSelectedAvatar ] = useState<string>();
    const [ userProfile, setUserProfile ] = useState<string | null>();
    const [ file, setFile ] = useState<any>()

    useEffect(() => {
        getSession().then(session => {
            console.log(session)
            if (session) {
                const { userImage } = session;
                setUserProfile(userImage);
            }
        });
    }, [])

    const setAvatar = (res : AvatarProps) => {
        console.log(res.image)
        setSelectedAvatar(res.alt)
    }

    return (
    <div className='w-full bg-dark-300 rounded-3xl flex flex-col items-center p-10'>
        <h1 className='text-white text-5xl font-semibold'>Change Profile Picture</h1>
        <button className='flex justify-center items-center rounded-full'>
            <div className='absolute z-10 rounded-full bg-dark-300 bg-opacity-55 p-2'>
                
                <Image 
                    src={"/icons/img-upload.svg"}
                    alt='img-upload'
                    height={30}
                    width={30}
                />
            </div>
            {userProfile === "" ? 
                <Avatar className='h-40 w-40'>
                    <AvatarImage src={'https://github.com/shadcn.png'}  />
                </Avatar>
            :
                <Avatar className='h-40 w-40'>
                    <AvatarImage src={userProfile as string} alt='user-image' />
                </Avatar>
                }
        </button>
        <div className='w-full mt-20 p-5 '>
            <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {sampleAvatars.map((data) => (
                    <ChangeAvatar
                        key={data.image}
                        image={data.image}
                        alt={data.alt}
                        className='h-32 w-32'
                        selected={selectedAvatar === data.alt ? 'border-[5px] border-primary' : ''}
                        handleBtn={() => setAvatar(data)}
                    />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default page