import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'


const Page = async() => {

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    const usersData = await db.select().from(users);

    console.log(usersData);

     return (
        <section className='w-full rounded-2xl bg-white p-7'>
            <h2 className="text-xl font-semibold">All Users</h2>
            <div className='mt-7 w-full overflow-hidden'>
                <Table className='rounded-t-xl overflow-hidden'>
                    <TableCaption>List of all users</TableCaption>
                    <TableHeader className='bg-primary-admin'>
                        <TableRow>
                            <TableHead>IGN</TableHead>
                            <TableHead>Class</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Date Joined</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {usersData.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="flex flex-row items-center gap-2 font-medium">
                                    {user.userImage === "" ? (
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn-image" />
                                        </Avatar>
                                    ) : (
                                        <Avatar>
                                            <AvatarImage src={user.userImage as string} alt="user-image" />
                                        </Avatar>
                                    )}
                                    {user.inGameName}
                                </TableCell>
                                <TableCell>{user.classId}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.createdAt?.toLocaleDateString('en-us', options).replace(/([a-zA-Z]+)\./, '$1.')}</TableCell>
                                <TableCell>
                                    <Image src="/icons/admin/ban.svg" className='justify-self-end' alt="edit" width={20} height={20} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default Page;