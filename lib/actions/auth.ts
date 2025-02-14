'use server';

import { eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
import { headers } from "next/headers";
import ratelimit from "../ratelimit";
import { redirect } from "next/navigation";

export const signInWithCredentials = async(params: Pick<AuthCredentials, 'email' | 'password'>) => {
    const { email, password } = params;
    
    const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
    const { success } = await ratelimit.limit(ip);

    if(!success) {
        return redirect('/too-fast');
    }

    try{
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false
        })
        //if error exists
        if(result?.error) { 
            return {
                success: false,
                error: result.error
            }
        }

        return {
            success: true
        }
    }catch(e) {
        console.log(e, 'Signin Error');
        return {
            success: false,
            error: "Signin Error"
        }
    }
}

export const signUp = async(params: AuthCredentials) => {
    const { inGameName, email, password, classId } = params;

    const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
    const { success } = await ratelimit.limit(ip);

    if(!success) {
        return redirect('/too-fast');
    }

    //Check if user already exists
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);

    if(existingUser.length > 0) {
        return {
            success: false,
            error: 'User already exists',
        }
    }

    const hashedPassword =  await hash(password, 10);

    try {
        await db.insert(users).values({
            inGameName,
            email,
            password: hashedPassword,
            classId,
        });

        return {
            success: true
        };
    } catch(e) {
        console.log(e, 'Signup Error');
        return {
            success: false,
        }
    }
};