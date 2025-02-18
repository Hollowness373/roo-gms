"use server"


import { db } from "@/database/drizzle";
import { users } from '@/database/schema';
import { eq } from "drizzle-orm";

interface Props {
    id: string;
}

export async function handleBan({id}: Props) {

    try{
        await db.update(users).set({status: 'REJECTED'}).where(eq(users.id, id));

    } catch(error) {
        console.log(error, 'Error banning user');
    }

}