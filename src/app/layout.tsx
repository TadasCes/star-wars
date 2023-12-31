"use client";
import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav/Nav";
import { Provider } from "react-redux";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star was App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ReduxProvider>
          <div className="grid grid-cols-6 auto-rows-max">
            <Nav />
            <div className="col-span-6 md:col-span-5 row-span-1">
              {children}
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
