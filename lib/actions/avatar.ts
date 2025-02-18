'use server'

import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { Session } from 'next-auth';

export async function fetchUserImage({session}: {session: Session}) {

    const getUserData = await db.select().from(users).where(eq(users.email, session?.user?.email as string)).limit(1)
    const image = getUserData.map((u) => u.userImage)[0]


    return image
}