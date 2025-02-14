'use server'

import { signOut } from "@/auth"

export async function signOutFromServer() {
    return await signOut();
}

