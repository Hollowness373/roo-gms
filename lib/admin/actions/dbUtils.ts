"use server"


import { db } from "@/database/drizzle";
import { users, guides } from '@/database/schema';
import { eq } from "drizzle-orm";

interface Props {
    id: string;
}

export async function handleKick({id}: Props) {

    try{
        await db.update(users).set({status: 'REJECTED'}).where(eq(users.id, id));

    } catch(error) {
        console.log(error, 'Error kicking user');
    }
}

export async function handleDeleteUser({id}: Props) {

    try{
        await db.delete(users).where(eq(users.id, id));

    } catch(error) {
        console.log(error, 'Error banning user');
    }

}

export async function handleFetchGuide({id}: Props) {

    try{
        const guideData = (await db.select().from(guides).where(eq(guides.id, id)).limit(1))[0];
        return guideData;
    } catch(error) {
        console.log(error, 'Error fetching guide data');
    }
}

export async function handleFetchUser({id}: Props) {

    try{
        const userData = (await db.select().from(users).where(eq(users.id, id)).limit(1))[0];
        return userData;
    } catch(error) {
        console.log(error, 'Error fetching guide data');
    }
}