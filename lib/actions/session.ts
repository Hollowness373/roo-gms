"use server"

import { auth } from '@/auth'
import { db } from "@/database/drizzle";
import { users } from '@/database/schema';
import { eq } from "drizzle-orm";



export async function getSession() {
    const session = await auth();
    const getUserData = await db.select().from(users).where(eq(users.email, session?.user?.email as string)).limit(1)
    
    const { userImage, inGameName, id } = getUserData[0];
    const user = {
        inGameName,
        userImage,
        id
    }
    return user
}
