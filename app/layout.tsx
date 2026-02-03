import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // 1. Import optimized fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FramerLazyMotion from "@/components/FramerLazyMotion"; 
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// 2. Configure Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hafsa Financials | Global Advisory",
  description: "IFRS Advisory, Financial Modeling & Risk Management",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased flex flex-col min-h-screen relative">
        
        {/* 3. PERFORMANCE FIX: Fixed Background Layer */}
        {/* This sits on the GPU layer and doesn't repaint on scroll */}
        <div 
          className="fixed inset-0 z-[-1]"
          style={{
            backgroundColor: "#050505",
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px),
              radial-gradient(circle at center, #1a1a1a 0%, #050505 60%, #000000 100%)
            `,
            backgroundSize: "50px 50px, 50px 50px, cover",
            backgroundRepeat: "repeat, repeat, no-repeat",
          }}
        />

        <FramerLazyMotion>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </FramerLazyMotion>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}