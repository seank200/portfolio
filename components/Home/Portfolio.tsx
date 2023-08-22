import Container from '@components/Container';
import Section from '@components/Section';
import SectionHeading from './SectionHeading';
import StickyContainer from './StickyContainer';
import type { PortfolioContents } from '@contents/Portfolio';

export default function Portfolio({
  contents,
}: {
  contents: PortfolioContents;
}) {
  return (
    <Section id="home__section_portfolio">
      <Container className="pt-24 flex flex-col text-background-on">
        <SectionHeading color="secondary">
          {contents.general.title}
        </SectionHeading>
        <p className="mb-8 font-light leading-relaxed">
          {contents.general.desc}
        </p>
      </Container>
      <SigmatePortfolio contents={contents} />
      <PoolinkPortfolio contents={contents} />
      <YREMSPortfolio contents={contents} />
    </Section>
  );
}

function PortfolioHero({
  className,
  children,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full h-screen pb-10 bg-surface ${className || ''}`}>
      {children}
    </div>
  );
}

function SigmatePortfolio({ contents }: { contents: PortfolioContents }) {
  return (
    <>
      <PortfolioHero className="flex flex-col justify-center items-center">
        <StickyContainer className="flex flex-col justify-start items-center">
          <h3 className="text-6xl font-semibold leading-relaxed">
            {contents.sigmate.title}
          </h3>
          <p className="font-light text-2xl">{contents.sigmate.subtitle}</p>
        </StickyContainer>
      </PortfolioHero>
      <Container className="py-8">
        <h4 className="text-2xl leading-relaxed">{contents.sigmate.easy.h}</h4>
        <p className="font-light">{contents.sigmate.easy.front}</p>
      </Container>
      <Container className="py-8">
        <h4 className="text-2xl leading-relaxed">
          {contents.sigmate.reliable.h}
        </h4>
        <p className="font-light">{contents.sigmate.reliable.front}</p>
      </Container>
      <Container className="py-8">
        <h4 className="text-2xl leading-relaxed">
          {contents.sigmate.valuation.h}
        </h4>
        <p className="font-light">{contents.sigmate.valuation.front}</p>
      </Container>
    </>
  );
}

function PoolinkPortfolio({ contents }: { contents: PortfolioContents }) {
  return (
    <>
      <PortfolioHero className="flex justify-center items-center">
        <StickyContainer className="flex flex-col items-center">
          <h3 className="text-6xl font-semibold leading-relaxed">
            {contents.poolink.title}
          </h3>
          <p className="font-light text-2xl">{contents.poolink.subtitle}</p>
        </StickyContainer>
      </PortfolioHero>
      <div className="w-full h-screen"></div>
    </>
  );
}

function YREMSPortfolio({ contents }: { contents: PortfolioContents }) {
  return (
    <>
      <PortfolioHero className="flex justify-center items-center">
        <StickyContainer className="flex flex-col items-center">
          <h3 className="text-6xl font-semibold leading-relaxed">
            {contents.yrems.title}
          </h3>
          <p className="font-light text-2xl">{contents.yrems.subtitle}</p>
        </StickyContainer>
      </PortfolioHero>
      <div className="w-full h-screen"></div>
    </>
  );
}
