"use server"

import { auth } from '@/auth'
import { db } from "@/database/drizzle";
import { users } from '@/database/schema';
import { eq, sql } from "drizzle-orm";



export async function getSession() {
    const session = await auth();

    //const user = await db.execute(sql`select * from users where ingame_name = ${name}`);
    //const user = await db.select().from(users)
    //const userImage = JSON.stringify(user.rows[0].user_image);
    return session
}
//name: string | null | undefined