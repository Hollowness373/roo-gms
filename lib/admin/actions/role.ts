"use server"

import { auth } from '@/auth'
import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import { eq } from 'drizzle-orm';

export const checkRole = async() => {
    const session = await auth();

    try {
        const result = await db
        .select({result: users.role})
        .from(users)
        .where(eq(users.id, session?.user?.id ?? ""))
        .limit(1)

        const isAuthorize = result[0].result === "DEV" || result[0].result === "LEADER"
        if (isAuthorize) {
            return true
        } else {
            return false
        }

    } catch(error) {
        console.log(error)
        return false
    }
}