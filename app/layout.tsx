import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Creative Developer Portfolio",
  description: "Portfolio of a Web Developer & Creative Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 selection:bg-accent-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
