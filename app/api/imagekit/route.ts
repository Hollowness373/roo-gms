import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
    publicKey: config.env.imagekit.publicKey,
    privateKey: config.env.imagekit.privateKey,
    urlEndpoint: config.env.imagekit.urlEndpoint
});

export async function GET() {
    const authenticationParameters = imagekit.getAuthenticationParameters();
    return NextResponse.json(authenticationParameters);
}