"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";

export const adminUpdateUser = async (params: AdminUpdateUser, id: string) => {

    const { inGameName, password, classId } = params;

    const hashedPassword = await hash(password, 10);

    if(password.length === 0) {
        try {
            const updateUser = await db.update(users).set({
                inGameName,
                classId,
            }).where(eq(users.id, id)).returning();
    
            return {
                success: true,
                data: JSON.parse(JSON.stringify(updateUser[0])),
            }
    
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: "An error occurred while updating user data."
            }
        }
    } else {
        try {
            const updateUser = await db.update(users).set({
                inGameName, 
                password: hashedPassword, 
                classId,
            }).where(eq(users.id, id)).returning();
    
            return {
                success: true,
                data: JSON.parse(JSON.stringify(updateUser[0])),
            }
    
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: "An error occurred while updating user data."
            }
        }
    }

}