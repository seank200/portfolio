import Container from '@components/Container';
import Section from '@components/Section';
import SectionHeading from './SectionHeader';

export default function Portfolio() {
  return (
    <Section id="home__section_portfolio">
      <Container className="pt-24 flex flex-col text-background-on">
        <SectionHeading color="secondary">Portfolio</SectionHeading>
      </Container>
    </Section>
  );
}
