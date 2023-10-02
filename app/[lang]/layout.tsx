import '../globals.css';
import '../fonts.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SUPPORTED_LANGS, SupportedLang } from '@/i18n';

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
  params: { lang: SupportedLang };
}) {
  if (!SUPPORTED_LANGS.includes(params.lang)) return <html></html>;
  return (
    <html lang={params.lang} className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`m-0 w-full min-h-screen bg-background text-background-on ${inter.className}`}
      >
        <Nav lang={params.lang} />
        <main className="pb-12 min-h-screen">{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
