import type { Metadata } from 'next';
import { Inter, Syne, Oswald } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import AppProvider from './app-provider';
import { TopMarquee } from "@/components/layout/top-marquee";


export const metadata: Metadata = {
  title: 'Quality Printout - Top-Quality Advertising Prints',
  description: 'From billboards to letterheads, we have you covered! Contact us today for all your printing needs.',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${oswald.variable}`}>
      <body className="font-body antialiased">
        <AppProvider>
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">
              <TopMarquee />
              <Header />
              {children}
            </main>
            <Footer />
          </div>
        </AppProvider>
        <Toaster />
      </body>
    </html>
  );
}
