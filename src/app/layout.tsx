import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { BackToTop } from "@/components/back-to-top";
import { Navbar } from "@/components/navbar";

const newTransport = localFont({
  src: [
    { path: "./fonts/NewTransport-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/NewTransport-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/NewTransport-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/NewTransport-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-new-transport",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Research Outputs",
  description: "Research outputs, publications and artifacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newTransport.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
