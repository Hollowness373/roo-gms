"use server"

import { db } from '@/database/drizzle';
import { users, guides } from '@/database/schema';
import { eq } from 'drizzle-orm';

export const fetchHomeData = async() => {

    try {
        const totalPanda = (await db.select().from(users).where(eq(users.status, "APPROVED"))).length
        const totalUsers = (await db.select().from(users)).length;
        const totalGuides = (await db.select().from(guides)).length;

        return {
            totalPanda,
            totalUsers,
            totalGuides
        }

    } catch(error) {
        console.log("Error collecting data", error);
        return { totalPanda: 0, totalUsers: 0, totalGuides: 0 };
    }
}