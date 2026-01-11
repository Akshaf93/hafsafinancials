import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer
import FramerLazyMotion from "@/components/FramerLazyMotion"; 
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Hafsa Financials | Global Advisory",
  description: "IFRS Advisory, Financial Modeling & Risk Management",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        <FramerLazyMotion>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer /> {/* Add Footer Here */}
        </FramerLazyMotion>
        <SpeedInsights />
      </body>
    </html>
  );
}