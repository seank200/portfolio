import Footer from '@/components/Footer';
import Hero from '@/components/home/sections/Hero';
import Portfolio from '@/components/home/sections/Portfolio';
import WorkExperience from '@/components/home/sections/WorkExperience';
import Nav from '@/components/Nav';
import { experienceContents } from '@/components/contents/WorkExperience';
import type { SupportedLang } from '@i18n/utils';

const SUPPORTED_LANGS: SupportedLang[] = ['kr', 'en'];

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => {
    lang;
  });
}

export default function Home({ params }: { params: { lang: SupportedLang } }) {
  return (
    <>
      <Nav lang={params.lang} />
      <main>
        <Hero lang={params.lang} />
        <WorkExperience contents={experienceContents} />
        <Portfolio lang={params.lang} />
      </main>
      <Footer lang={params.lang} />
    </>
  );
}
