"use server"


import { db } from "@/database/drizzle";
import { users } from '@/database/schema';
import { eq } from "drizzle-orm";

interface Props {
    id: string;
}

export async function handleDeleteUser({id}: Props) {

    try{
        await db.delete(users).where(eq(users.id, id));

    } catch(error) {
        console.log(error, 'Error banning user');
    }

}