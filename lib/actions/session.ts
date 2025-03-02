"use server"

import { auth } from '@/auth'
import { db } from "@/database/drizzle";
import { users } from '@/database/schema';
import { eq, sql } from "drizzle-orm";



export async function getSession() {
    const session = await auth();
    return session
}
