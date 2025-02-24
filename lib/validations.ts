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
});

export const guideSchema = z.object({
    title: z.string().trim().min(2).max(100),
    author: z.string().trim().min(2).max(100),
    classCategory: z.string().min(3),
    description: z.string().trim().min(20).max(10000),
    summary: z.string().trim().min(10),
    coverUrl: z.string().nonempty(),
    coverColor: z.string().trim().regex(/^#[0-9A-F]{6}$/i),
    videoUrl: z.string(),
});

export const adminUserSchema = z.object({
    inGameName: z.string().min(3),
    classId: z.string().min(3),
    password: z.string(),
});