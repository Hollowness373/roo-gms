"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { auth } from '@/auth'

export const updateUserAvatar = async (params: UpdateAvatar) => {

    const session = await auth();
    const { userImage } = params;

    try {
        const updateAvatar = await db.update(users)
        .set({userImage})
        .where(eq(users.id, session?.user?.id as string))
        .returning();

        return {
            success: true,
            data: JSON.parse(JSON.stringify(updateAvatar[0])),
        }

    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "An error occurred while updating user data."
        }
    }
    
}