"use server";

import { db } from "@/database/drizzle";
import { users, logs } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";
import { auth } from "@/auth";

export const adminUpdateUser = async (params: AdminUpdateUser, id: string, target: string) => {

    const { inGameName, password, classId } = params;
    const session = await auth();
    const initiator = session?.user?.name as string;

    const hashedPassword = await hash(password, 10);

    if(password.length === 0) {
        //check if password has been changed
        try {
            const updateUser = await db.update(users).set({
                inGameName,
                classId,
            }).where(eq(users.id, id)).returning();

            //log
            await db.insert(logs).values({
                target,
                initiator: initiator,
                action: `'s data was updated by`
            })
    
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

            //log
            await db.insert(logs).values({
                target,
                initiator: initiator,
                action: `'s data was updated by`
            })
    
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