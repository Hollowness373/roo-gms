"use server";

import { db } from "@/database/drizzle";
import { guides } from "@/database/schema";

export const createGuide = async (params: GuideParams) => {
    try {
        const newGuide = await db.insert(guides).values({...params}).returning();

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