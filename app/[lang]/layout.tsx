import '../globals.css';
import '../fonts.css';
import { Inter } from 'next/font/google';
import { SUPPORTED_LANGS, SupportedLang } from '@/i18n';
import { createIntlMetadata } from '@/i18n/metadata';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLang };
}) {
  const metadata = createIntlMetadata(
    { description: 'Full stack web developer project portfolio' },
    { description: '풀스택 웹 개발자 프로젝트 포트폴리오' }
  );

  return metadata[params.lang];
}

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
        <meta name="msapplication-TileColor" content="#2b5797" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9665ec" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`m-0 w-full min-h-screen bg-background text-background-on font-sans ${inter.className}`}
      >
        <Nav lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
