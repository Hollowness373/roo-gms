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
import { Button } from '@/components/ui/button'


const Page = async() => {

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    const usersData = await db.select().from(users);

    const roleBtnStyle = (role: string) => {
        switch (role) {
            case "USER":
                return "text-green-600 font-bold bg-green-200/65 hover:bg-green-200 rounded-2xl disabled:pointer-events-none disabled:opacity-100 w-20"
            case "ADMIN":
                return "text-primary-admin font-bold bg-blue-300/65 hover:bg-blue-300 rounded-2xl disabled:pointer-events-none disabled:opacity-100 w-20";
            case "LEADER":
                return "text-amber-500 font-bold bg-amber-200/65 hover:bg-amber-200 rounded-2xl disabled:pointer-events-none disabled:opacity-100";
            case "DEV":
                return "text-red-600 font-bold bg-red-400/65 hover:bg-red-400 rounded-2xl disabled:pointer-events-none disabled:opacity-100 w-20";
        }
    }

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
                            <TableHead className='pl-11'>Role</TableHead>
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
                                <TableCell>
                                    <Button disabled className={`${roleBtnStyle(user.role as string)}`}>
                                        {user.role}
                                    </Button>
                                </TableCell>
                                <TableCell>{user.createdAt?.toLocaleDateString('en-us', options).replace(/([a-zA-Z]+)\./, '$1.')}</TableCell>
                                <TableCell>
                                    <div className='cta-btn'>
                                        <BtnActions
                                            id={user.id}
                                            target={user.inGameName}
                                            method="EDIT"
                                            src='/icons/admin/edit.svg'
                                            alt='edit-btn'
                                            width={20}
                                            height={20}
                                        />
                                        <BtnActions
                                            id={user.id}
                                            target={user.inGameName}
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