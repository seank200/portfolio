import '../globals.css';
import '../fonts.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Youngwoo Kim',
  description: 'Developer portfolio',
};

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body
        className={`m-0 w-full min-h-screen bg-background text-background-on ${inter.className}`}
      >
        <Nav />
        <main className="pt-20 pb-12 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
