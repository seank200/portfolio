import Section from '@/components/Section';
import Container from '@/components/Container';
import ScrollGuide from '@/components/ScrollGuide';
import HeroCtaPrimary from '@/components/Home/HeroCtaPrimary';
import Memoji from '@components/Home/Memoji';

export default function Hero() {
  return (
    <Section id="home__section_hero" className="relative">
      <Container className="flex justify-between items-center h-screen text-background-on">
        <div className="flex flex-col">
          <h1 className="mb-6 text-5xl font-semibold leading-snug">
            Passion-Driven
            <br />
            <span className="text-gradient">Backend Web Developer</span>
          </h1>
          <p className="group mb-24 text-2xl font-light leading-relaxed">
            Hi, I&apos;m Youngwoo Kim&nbsp;
            <span className="relative transition-transform group-hover:rotate-12">
              👋
            </span>
            . <br className="hidden md:inline" />I am a developer based on
            Seoul, South Korea.
          </p>
          <div className="flex space-x-4">
            <HeroCtaPrimary />
            <button className="px-6 py-2 rounded-md border-2 border-background-on font-medium text-background-on transition-colors hover:border-primary hover:text-primary">
              Contact Me
            </button>
          </div>
        </div>
        <Memoji />
      </Container>
      <ScrollGuide
        scrollTo="#home__section_work_experience"
        text="Learn more about me"
      />
    </Section>
  );
}
