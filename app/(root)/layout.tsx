import { auth } from '@/auth'
import Header from '@/components/Header'
import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const layout = async({children} : { children: ReactNode}) => {

  const session = await auth();

  if(!session) {
    redirect("/sign-in")
  }

  const getUserData = await db.select().from(users).where(eq(users.email, session?.user?.email as string)).limit(1)

  const { userImage, role } = getUserData[0];
  const isAdmin = role === "ADMIN" || role === "DEV" || role === "LEADER";

  return <main className='root-container'>
    <div className='mx-auto max-w-7xl'>
        <Header session={session} userProfile={userImage as string} userRole={isAdmin} />

        <div className='mt-20 pb-20'>
            {children}
        </div>
    </div>
  </main>
}

export default layout