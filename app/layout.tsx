import './globals.css';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';

import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        <Header />           {/* Header stays */}
        <div className="pt-16">
          {children}         {/* page.tsx content is injected here automatically */}
        </div>
        <Footer />           {/* Footer stays */}
      </body>
    </html>
  );
}
