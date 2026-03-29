import type { Metadata } from "next";
import { Geist, Geist_Mono, Gelasio } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gelasio = Gelasio({
  variable: "--font-gelasio",
});

export const metadata: Metadata = {
  title: "Planholders",
  description: "Next app practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gelasio.variable} h-full antialiased`}
      data-theme="autumn"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
