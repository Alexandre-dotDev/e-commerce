import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";
import { ResolvingViewport } from 'next/dist/lib/metadata/types/metadata-interface.js';
import { ToasterProvider } from "@/lib/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caixinha - Admin Dashboard",
  description: "Admin dashboard to manage Caixinha data",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body className={inter.className}>
          <ToasterProvider/ >
          <div className="flex max-lg:flex-col text-grey-1">
            <TopBar />
            <LeftSideBar />
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}