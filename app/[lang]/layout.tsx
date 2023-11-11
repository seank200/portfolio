import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import { LANG_DEFAULT, MyLang, createIntlMeta, myLangs } from "@lib/i18n";

const inter = Inter({ subsets: ["latin"] });

const meta = createIntlMeta(
  {
    title: {
      template: "%s | Youngwoo Kim",
      default: "Youngwoo Kim",
    },
  },
  {
    title: {
      template: "%s | 김영우",
      default: "김영우",
    },
  },
);

export async function generateStaticParams() {
  return myLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: MyLang };
}): Promise<Metadata> {
  const { lang = LANG_DEFAULT } = params;
  return meta[lang];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ctpVariants = "ctp-macchiato ctp-latte ctp-frappe ctp-mocha";
  return (
    <html lang="en">
      <body className={`${inter.className} ${ctpVariants} bg-background`}>
        {children}
      </body>
    </html>
  );
}
