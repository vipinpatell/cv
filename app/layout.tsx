import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


/* -----------------------------------------
   SEO Metadata
------------------------------------------ */
export const metadata: Metadata = {
  title: "Vipin Patel | Frontend Developer | Senior Frontend Engineer",
  description:
    "Vipin Patel – Frontend Developer with 9+ years of experience in React, Next.js, TypeScript, Tailwind CSS, and scalable UI systems.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Javascript Developer",
    "Frontend Engineer",
    "UI Engineer",
    "Best Frontend Developer",
    "best frontend developer in india",
    "html, css, javascript developer",
    "Vipin Patel",
  ],
  openGraph: {
    title: "Vipin Patel | Frontend Developer",
    description:
      "Building scalable, high-performance web applications with React & Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
