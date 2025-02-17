import ImageKit from "imagekit";
import dummyGuides from "../dummyguides.json";
import { guides } from "./schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";


config({path: ".env.local"});

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
});


const uploadToImageKit = async (url: string, fileName: string, folder: string) => {
    try {
        const response = await imagekit.upload({
            file: url,
            fileName,
            folder,
        })

        return response.filePath;
    } catch (error) {
        console.error("Error uploading to ImageKit", error);
    }
}

const seed = async() => {

    console.log("Seeding database...");

    try {
        for(const guide of dummyGuides){
            const coverUrl = await uploadToImageKit(guide.coverUrl, `${guide.title}.png`, "/guides/cover") as string;
            console.log("Uploaded cover image to ImageKit", coverUrl);

            await db.insert(guides).values({
                ...guide,
                coverUrl,
            })
        }

        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database", error);
    }
};

seed();