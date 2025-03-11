"use client"

import ChangeAvatar from '@/components/ChangeAvatar'
import { sampleAvatars } from '@/constants'
import React, { useState, useEffect } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { getSession } from '@/lib/actions/session'
import Image from 'next/image'
import FileUpload from '@/components/FileUpload'
import { Button } from '@/components/ui/button'
import { updateAvatar } from '@/lib/validations'
import { z } from 'zod'
import { toast } from '@/hooks/use-toast';
import { updateUserAvatar } from '@/lib/admin/actions/avatar'
import { useRouter } from 'next/navigation'


interface AvatarProps {
    image: string;
    alt: string;
}

const page = () => {

    const router = useRouter();
    const [ selectedAvatar, setSelectedAvatar ] = useState<string>();
    const [ userProfile, setUserProfile ] = useState<string | null>();
    const [ file, setFile ] = useState<any>();
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        getSession().then(session => {
            if (session) {
                const { userImage } = session;
                setUserProfile(userImage);
            }
        });
    }, [])

    const setAvatar = (res : AvatarProps) => {
        setSelectedAvatar(res.image)
    }

    useEffect(() => {
        if(file) {
            setUserProfile(`https://ik.imagekit.io/nmxcxnfxh${file}`)
        }
    }, [file])

    const onSave = async(path: z.infer<typeof updateAvatar>) => {
        //sending data to db
        const result = await updateUserAvatar(path);

        if (result.success) {
            toast({
            title: "Updated",
            description: "User data has been successfully updated.",
            });
            router.push(`/`);
        } else {
            toast({
            title: "Error",
            description: result.message,
            variant: 'destructive'
            })
        }
    }

    const handleSaveBtn = () => {
        const userImage = file ? `https://ik.imagekit.io/nmxcxnfxh${file}` : selectedAvatar;

        if (userImage) {
            const params = { userImage };
            onSave(params);
        } else {
            // handle the case where no image is provided
            console.error("No image selected");
            return
        }
    }

    return (
    <div className='w-full rounded-3xl flex flex-col items-center p-10'>
        <h1 className='text-white text-5xl font-semibold'>Change Profile Picture</h1>
        <div className='flex justify-center items-center mt-20'>
            <div className='absolute z-10 rounded-full bg-dark-300 bg-opacity-55 p-2'>
                {isLoading ? (
                    <div className='z-10'>
                        <h2 className='text-primary text-xl'>Uploading...</h2>
                    </div>
                ) : (
                    <FileUpload
                        type="image"
                        accept="image/*"
                        placeholder="Upload a cover image"
                        folder="ProfileImage"
                        variant="dark"
                        onFileChange={setFile}
                        setIsLoading={setIsLoading}
                    />
                )}
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
        </div>
        <div className='flex flex-col justify-center items-center mt-10 text-light-100 gap-2 text-lg'>
            <h2>Upload your avatar</h2>
            <h2>Or</h2>
            <h2>Choose from our collection</h2>
        </div>
        <div className='w-full my-10 p-5 '>
            <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {sampleAvatars.map((data) => (
                    <ChangeAvatar
                        key={data.image}
                        image={data.image}
                        alt={data.alt}
                        className='h-36 w-36'
                        selected={selectedAvatar === data.image ? 'border-[5px] border-primary' : ''}
                        handleBtn={() => setAvatar(data)}
                    />
                ))}
            </ul>
        </div>
        <Button onClick={handleSaveBtn} className='guide-overview_btn'>
            <Image src="/icons/save-icon.svg" alt='save' width={20} height={20} />
            <p className='font-bebas-neue text-xl text-dark-100'>Save</p>
        </Button>
    </div>
  )
}

export default page