import { z } from "zod";

export const signUpSchema = z.object({
    inGameName: z.string().min(3),
    email: z.string().email(),
    classId: z.string().min(3),
    password: z.string().min(8),
});

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})