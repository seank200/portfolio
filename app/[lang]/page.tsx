import Footer from '@/components/Footer';
import Hero from '@/components/Home/Hero';
import Portfolio from '@/components/Home/Portfolio';
import WorkExperience from '@/components/Home/WorkExperience';
import Nav from '@/components/Nav';
import { portfolioContents } from '@/components/contents/Portfolio';
import { experienceContents } from '@/components/contents/WorkExperience';
import type { SupportedLanguage, IntlContents } from '@/components/contents';

const SUPPORTED_LANGS: SupportedLanguage[] = ['kr', 'en'];

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => {
    lang;
  });
}

export default function Home({
  params,
}: {
  params: { lang: SupportedLanguage };
}) {
  return (
    <>
      <Nav lang={params.lang} />
      <main>
        <Hero />
        <WorkExperience contents={experienceContents} />
        <Portfolio contents={portfolioContents} />
      </main>
      <Footer />
    </>
  );
}
