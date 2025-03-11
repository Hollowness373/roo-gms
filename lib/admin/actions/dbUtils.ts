"use server"


import { db } from "@/database/drizzle";
import { users, guides, logs } from '@/database/schema';
import { eq } from "drizzle-orm";
import { auth } from '@/auth'

interface Props {
    id: string;
    target: string;
}


export async function handleKick({id, target}: Props) {
    const session = await auth();
    const initiator = session?.user?.name as string;

    try{
        await db.update(users).set({status: 'REJECTED'}).where(eq(users.id, id));
        //log
        await db.insert(logs).values({
            target,
            initiator: initiator,
            action: 'has been kicked by'
        })

    } catch(error) {
        console.log(error, 'Error kicking user');
    }
}

export async function handleDeleteUser({id, target}: Props) {
    const session = await auth();
    const initiator = session?.user?.name as string;

    try{
        await db.delete(users).where(eq(users.id, id));

        //log
        await db.insert(logs).values({
            target,
            initiator: initiator,
            action: 'has been banned by'
        })

    } catch(error) {
        console.log(error, 'Error banning user');
    }
}

export async function handleDeleteGuide({id, target}: Props) {
    const session = await auth();
    const initiator = session?.user?.name as string;

    try{
        await db.delete(guides).where(eq(guides.id, id));

        //log
        await db.insert(logs).values({
            target,
            initiator: initiator,
            action: 'guide has been deleted by'
        })

    } catch(error) {
        console.log(error, 'Error banning user');
    }
}

export async function handleFetchGuide(id: string) {

    try{
        const guideData = (await db.select().from(guides).where(eq(guides.id, id)).limit(1))[0];
        return guideData;
    } catch(error) {
        console.log(error, 'Error fetching guide data');
    }
}

export async function handleFetchUser(id: string) {

    try{
        const userData = (await db.select().from(users).where(eq(users.id, id)).limit(1))[0];
        return userData;
    } catch(error) {
        console.log(error, 'Error fetching guide data');
    }
}