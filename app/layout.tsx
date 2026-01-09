import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Hafsa Financials | Global Advisory",
  description: "IFRS Advisory, Financial Modeling & Risk Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer /> {/* Add Footer Here */}
      </body>
    </html>
  );
}