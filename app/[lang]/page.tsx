import Footer from '@/components/Footer';
import Hero from '@/components/Home/Hero';
import Portfolio from '@/components/Home/Portfolio';
import WorkExperience from '@/components/Home/WorkExperience';
import Nav from '@/components/Nav';
import { portfolioContents } from '@/components/contents/Portfolio';
import { experienceContents } from '@/components/contents/WorkExperience';

export default function Home({ params }: { params: { lang: string } }) {
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
