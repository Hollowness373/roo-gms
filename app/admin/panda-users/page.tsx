import React from 'react'
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import BtnActions from '@/components/admin/cta/BtnActions'
import { eq } from 'drizzle-orm'
import { checkRole } from '@/lib/admin/actions/role';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";



const Page = async() => {

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    const usersData = await db.select().from(users).where(eq(users.status, "APPROVED"));

    const isAuthorize = await checkRole();

    const roleBtnStyle = (role: string) => {
        switch (role) {
            case "USER":
                return "text-green-600 font-bold bg-green-200/65 hover:bg-green-200 rounded-2xl w-20 h-9"
            case "ADMIN":
                return "text-primary-admin font-bold bg-blue-300/65 hover:bg-blue-300 rounded-2xl w-20 h-9";
            case "LEADER":
                return "text-amber-500 font-bold bg-amber-200/65 hover:bg-amber-200 rounded-2xl w-20 h-9";
            case "DEV":
                return "text-red-600 font-bold bg-red-400/65 hover:bg-red-400 rounded-2xl w-20 h-9";
        }
    }

     return (
        <section className='w-full rounded-2xl bg-white p-7'>
            <h2 className="text-xl font-semibold">Panda Members</h2>
            <div className='mt-7 w-full overflow-hidden'>
                <Table className='rounded-t-xl overflow-hidden'>
                    <TableCaption>List of all Panda members</TableCaption>
                    <TableHeader className='bg-primary-admin'>
                        <TableRow>
                            <TableHead>IGN</TableHead>
                            <TableHead>Class</TableHead>
                            <TableHead className='pl-11'>Role</TableHead>
                            <TableHead>Date Joined</TableHead>
                            <TableHead className="text-right">Kick</TableHead>
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
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger disabled={!isAuthorize} className={`${roleBtnStyle(user.role as string)} disabled:pointer-events-none disabled:opacity-100`}>
                                            {user.role}
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='bg-dark-300 text-light-100 border-dark-100 '>
                                            <DropdownMenuItem className='focus:bg-accent focus:text-accent-foreground'>ADMIN</DropdownMenuItem>
                                            <DropdownMenuItem className='focus:bg-accent focus:text-accent-foreground'>LEADER</DropdownMenuItem>
                                            <DropdownMenuItem className='focus:bg-accent focus:text-accent-foreground'>DEV</DropdownMenuItem>
                                            <DropdownMenuItem className='focus:bg-accent focus:text-accent-foreground'>USER</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                                <TableCell>{user.createdAt?.toLocaleDateString('en-us', options).replace(/([a-zA-Z]+)\./, '$1.')}</TableCell>
                                <TableCell>
                                    <BtnActions
                                        id={user.id}
                                        method="KICK"
                                        src='/icons/admin/ban.svg'
                                        alt='kick-btn'
                                        width={20}
                                        height={20}
                                    />
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