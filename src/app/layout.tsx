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

export const metadata: Metadata = {
  title: "Pawfect Grooming | Professional Dog Grooming",
  description:
    "Local, loving, and professional dog grooming. Baths, full grooms, nail trims, and more.",
  keywords: [
    "dog grooming",
    "pet grooming",
    "bath and brush",
    "nail trim",
    "deshedding",
  ],
  openGraph: {
    title: "Pawfect Grooming",
    description:
      "Local, loving, and professional dog grooming. Baths, full grooms, nail trims, and more.",
    url: "https://agentic-4701926a.vercel.app",
    siteName: "Pawfect Grooming",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pawfect Grooming",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
