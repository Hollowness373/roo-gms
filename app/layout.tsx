import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react"
import localFont from "next/font/local";
import { ReactNode } from "react";
import { auth } from "@/auth";
import { Analytics } from "@vercel/analytics/react"

const ibmPlexSans = localFont({
  src: [
    {path: '/fonts/ibmPlexSans-Regular.ttf', weight: '400', style: 'normal'},
    {path: '/fonts/ibmPlexSans-Medium.ttf', weight: '500', style: 'normal'},
    {path: '/fonts/ibmPlexSans-SemiBold.ttf', weight: '600', style: 'normal'},
    {path: '/fonts/ibmPlexSans-Bold.ttf', weight: '700', style: 'normal'},
  ]
})

const bebasNeue = localFont({
  src: [
    {path: '/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal'},
  ],
  variable: '--bebas-neue',
});

export const metadata: Metadata = {
  title: "ROO Panda",
  description: "ROO Panda is a guild management system",
};

const RootLayout = async({ children }: { children: ReactNode }) => {
  const session = await auth()

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
          {children}
          <Toaster />
          <Analytics />
        </body>
      </SessionProvider>
    </html>
  );
}
export default RootLayout;