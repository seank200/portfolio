import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Youngwoo Kim',
  description: 'Developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`m-0 w-full min-h-screen bg-background ${inter.className}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
