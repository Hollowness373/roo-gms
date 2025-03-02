"use server"


import { db } from "@/database/drizzle";
import { guides } from '@/database/schema';
import { eq } from "drizzle-orm";

interface Props {
    id: string;
}

export async function handleFetchGuide({id}: Props) {

    try{
        const guideData = (await db.select().from(guides).where(eq(guides.id, id)).limit(1))[0];
        return guideData;
    } catch(error) {
        console.log(error, 'Error fetching guide data');
    }

}