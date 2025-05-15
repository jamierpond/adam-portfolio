import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Pond | Creative Strategist & Copywriter",
  description: "Crafting Narratives. Building Brands. Evoking Emotion. — Explore innovative campaigns and strategic brand narratives by Adam Pond.",
  keywords: ["creative portfolio", "brand strategy", "advertising", "copywriting", "campaign development", "Adam Pond"],
  creator: "Adam Leigh Pond",
  authors: [{ name: "Adam Leigh Pond", url: "https://adamleighpond.com" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://adamleighpond.com",
    title: "Adam Pond | Creative Strategist & Copywriter",
    description: "Crafting Narratives. Building Brands. Evoking Emotion.",
    siteName: "Adam Pond Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Pond | Creative Strategist & Copywriter",
    description: "Discover compelling campaigns and brand narratives by Adam Pond",
    creator: "@adamleighpond",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Portfolio",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#6366f1" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
