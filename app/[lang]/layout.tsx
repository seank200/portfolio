import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
    <html lang={params.lang}>
      <body
        className={`m-0 w-full min-h-screen bg-background text-background-on ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
