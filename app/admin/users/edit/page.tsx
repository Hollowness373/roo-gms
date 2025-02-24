"use client"

import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { redirect, useSearchParams } from 'next/navigation'
import { handleFetchUser } from '@/lib/admin/actions/dbUtils'
import EditUserForm from '@/components/admin/forms/EditUserForm'

const Page = () => {

    const searchParams = useSearchParams();
        const id = searchParams.get("id")!;
        if(!id) {
            redirect("/admin"); //if no params passed, redirect to admin
        }

        const [ userData, setUserData] = useState<{ 
            id: string;
            inGameName: string;
            classId: string;
        } | null>(null);

        useEffect(() => {
            handleFetchUser({id}).then((data) => setUserData(data || null));
        }, [])

    return (
        <>
        <Button asChild className='back-btn'>
            <Link href="/admin/users">Go Back</Link>
        </Button>
        <section className="w-full max-w-2xl">
            <EditUserForm userData={userData} />
        </section>
    </>
    )
}

export default Page