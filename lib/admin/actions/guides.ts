"use server";

import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { guides, logs} from "@/database/schema";
import { eq } from "drizzle-orm";

export const createGuide = async (params: GuideParams) => {

    const { title } = params;
    const session = await auth();
    const initiator = session?.user?.name as string
    try {
        const newGuide = await db.insert(guides).values({...params}).returning();
        //log
        await db.insert(logs).values({
            target: title,
            initiator: initiator,
            action: 'guide was added by'
        })

        return {
            success: true,
            data: JSON.parse(JSON.stringify(newGuide[0])),
        }

    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "An error occurred while creating the guide."
        }
    }
}
export const updateGuide = async (params: GuideParams, id: string, target: string) => {
    const session = await auth();
    const initiator = session?.user?.name as string
    try {
        const updateGuide = await db.update(guides).set({...params}).where(eq(guides.id, id)).returning();
        //logs
        await db.insert(logs).values({
            target,
            initiator: initiator,
            action: 'guide was updated by'
        })

        return {
            success: true,
            data: JSON.parse(JSON.stringify(updateGuide[0])),
        }

    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "An error occurred while updating the guide."
        }
    }
}