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
import BtnActions from '@/components/admin/cta/BtnActions'


const Page = async() => {

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    const usersData = await db.select().from(users);

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
                            <TableHead>Status</TableHead>
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
                                <TableCell>{user.status === "APPROVED" ? "Panda" : "Visitor"}</TableCell>
                                <TableCell className={`${user.role === "ADMIN" ? "text-primary-admin font-bold": "text-green-600"}`}>{user.role}</TableCell>
                                <TableCell>{user.createdAt?.toLocaleDateString('en-us', options).replace(/([a-zA-Z]+)\./, '$1.')}</TableCell>
                                <TableCell>
                                    <div className='flex-row flex justify-end gap-2'>
                                        <BtnActions
                                            id={user.id}
                                            method="EDIT"
                                            src='/icons/admin/edit.svg'
                                            alt='edit-btn'
                                            width={20}
                                            height={20}
                                        />
                                        <BtnActions
                                            id={user.id}
                                            method="DELETE"
                                            src='/icons/admin/trash.svg'
                                            alt='ban-btn'
                                            width={20}
                                            height={20}
                                        />
                                    </div>
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