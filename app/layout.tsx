import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M-Crystals | Luxury Guest House",
  description:
    "Experience luxury beachfront accommodation in Richards Bay. Book your stay at M-Crystals today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white">

        {/* 🔥 NAVBAR */}
        <Navbar />

        {/* 📄 PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* 🔻 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}