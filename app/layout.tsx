// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ... fonts and metadata ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* UPDATED: Removed 'overflow-hidden' or 'fixed' if they were there */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}