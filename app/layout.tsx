import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />  {/* Add this line */}
        {children}
      </body>
    </html>
  );
}

}