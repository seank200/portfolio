import { type MyLang, createIntlMeta, LANG_DEFAULT } from "@lib/i18n";
import { type Metadata } from "next";

const meta = createIntlMeta(
  {
    title: {
      template: "%s | Blog",
      default: "Blog",
    },
  },
  {
    title: {
      template: "%s | 블로그",
      default: "블로그",
    },
  },
);

export async function generateMetadata({
  params,
}: {
  params: { lang: MyLang };
}): Promise<Metadata> {
  const { lang = LANG_DEFAULT } = params;
  return meta[lang];
}

export default function page({ params }: { params: { lang: string } }) {
  const { lang } = params;
  return <main className="min-h-screen">Blog: {lang}</main>;
}
