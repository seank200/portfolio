import Container from '@components/Container';
import Section from '@components/Section';
import SectionHeading from './SectionHeading';
import StickyContainer from './StickyContainer';

const contents = {
  sigmate: {
    easy: {
      h: 'Information in One Place',
      front: 'From real-time marketplace data to user-committed wiki content.',
      back: '',
    },
    reliable: {
      h: 'Cross-Checked and Scam-Free Content',
      front:
        'Both users and moderators can "verify", or "flag" any piece of information shared within the platform. The results, along with any changelogs to the content, are instantly shared to all users, allowing for easy distinction between true and sound facts, from fradulent/misleading fake news.',
      back: '',
    },
    valuation: {
      h: 'Integrated Asset Valuation',
      front:
        'Assets valuated based on both on/off-chain data, including utilities, funding, social hype, and more.',
      back: '',
    },
  },
};

export default function Portfolio() {
  return (
    <Section id="home__section_portfolio">
      <Container className="pt-24 flex flex-col text-background-on">
        <SectionHeading color="secondary">Portfolio</SectionHeading>
        <p className="mb-6 font-light leading-relaxed">
          My past works range from small, full-stack personal projects to
          contributions to larger open-source projects. I enjoy, and am good at
          learning new concepts and trying them out in my projects. All projects
          below were planned and implemented by myself in whole or in part.
        </p>
      </Container>
      <SigmatePortfolio
        title="Sigmate"
        subtitle="A wiki platform for the NFT community"
      />
      <PoolinkPortfolio
        title="Poolink"
        subtitle="Save, share and explore links"
      />
      <YREMSPortfolio
        title="YREMS"
        subtitle="Event participant management system"
      />
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
    <div className={`w-full h-screen pb-10 bg-gray-200 ${className || ''}`}>
      {children}
    </div>
  );
}

function SigmatePortfolio({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <PortfolioHero className="flex flex-col justify-center items-center">
        <StickyContainer className="flex flex-col justify-start items-center">
          <h3 className="text-6xl font-semibold leading-relaxed">{title}</h3>
          <p className="font-light text-2xl">{subtitle}</p>
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

function PoolinkPortfolio({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <PortfolioHero className="flex justify-center items-center">
        <StickyContainer className="flex flex-col items-center">
          <h3 className="text-6xl font-semibold leading-relaxed">{title}</h3>
          <p className="font-light text-2xl">{subtitle}</p>
        </StickyContainer>
      </PortfolioHero>
      <div className="w-full h-screen"></div>
    </>
  );
}

function YREMSPortfolio({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <PortfolioHero className="flex justify-center items-center">
        <StickyContainer className="flex flex-col items-center">
          <h3 className="text-6xl font-semibold leading-relaxed">{title}</h3>
          <p className="font-light text-2xl">{subtitle}</p>
        </StickyContainer>
      </PortfolioHero>
      <div className="w-full h-screen"></div>
    </>
  );
}
