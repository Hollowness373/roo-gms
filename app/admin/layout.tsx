import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const layout = async( { children }: { children : ReactNode }) => {

    const session = await auth();

    if(!session?.user?.id) {
        redirect("/")
    }

  return (
    <main className="flex min-h-screen w-full flex-row">
        <p>Sidebar</p>
        <div className="admin-container">
            <p>Header</p>
            {children}
        </div>
    </main>
  )
}

export default layout