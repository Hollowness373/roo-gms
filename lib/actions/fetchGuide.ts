"use server"


import { db } from "@/database/drizzle";
import { guides } from '@/database/schema';
import { eq, ilike, or } from "drizzle-orm";
import { desc } from "drizzle-orm";

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

export async function initialFetchGuide() {
    
    try {
        const guidesList = (await db.select().from(guides).limit(24).orderBy(desc(guides.createdAt))) as Guide[];

        return guidesList;
    } catch (error) {
        console.log(error, "Error guide query");
    }

}

export async function queryFetchGuide({query}: {query: string}) {
    
    const formattedQuery = `%${query.split('').join('%')}%`;
    
    try {
        const guidesList = (await db.select()
            .from(guides)
            .limit(24)
            .where(or(ilike(guides.title, formattedQuery), 
                ilike(guides.author, formattedQuery),
                ilike(guides.classCategory, formattedQuery)
            ))
            .orderBy(desc(guides.createdAt))) as Guide[];

        return guidesList;
    } catch (error) {
        console.log(error, "Error guide query");
    }

}