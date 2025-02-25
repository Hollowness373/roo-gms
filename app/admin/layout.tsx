import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'
import '@/styles/admin.css';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import { eq } from 'drizzle-orm';

const layout = async( { children }: { children : ReactNode }) => {

  const session = await auth();

  const getUserData = await db.select().from(users).where(eq(users.email, session?.user?.email as string)).limit(1)
  const image = getUserData.map((u) => u.userImage)[0]

  if(!session?.user?.id) {
    redirect("/")
  }
  
  //Check if the user has a valid role for admin access for 2nd layer of security
  const isAdmin = await db
    .select({isAdmin: users.role})
    .from(users)
    .where(eq(users.id, session?.user?.id))
    .limit(1)
    .then((res) => res[0]?.isAdmin === "ADMIN" || res[0]?.isAdmin === "DEV" || res[0]?.isAdmin === "LEADER");
  // Improve query performance by indexing and query profiling
  if(!isAdmin) {
      redirect("/");
  }
  
  return (
    <main className="flex min-h-screen w-full flex-row">
        <Sidebar session={session} userImage={image as string}/>
        <div className="admin-container">
            <Header session={session} />
            {children}
        </div>
    </main>
  )
}

export default layout