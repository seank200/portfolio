import { SupportedLang } from '@/i18n/utils';
import Container from '@components/Container';
import Section from '@components/Section';
import SectionHeading from '@components/home/SectionHeading';
import StickyContainer from '@components/home/StickyContainer';
import portfolioDict from '@/components/contents/Portfolio';
import sigmateLogo from '@/public/images/LOGO_Sigmate.png';
import sigmateLogoDark from '@/public/images/LOGO_Sigmate_Dark.png';
import poolinkLogo from '@/public/images/LOGO_Poolink.png';
import Image from 'next/image';
import ThemedImage from '@/components/ThemedImage';

export default function Portfolio({ lang }: { lang: SupportedLang }) {
  const { PORTFOLIO, SUBHEADING } = portfolioDict[lang];

  return (
    <Section id="portfolio">
      <Container className="pt-24 flex flex-col text-background-on">
        <SectionHeading color="secondary">{PORTFOLIO}</SectionHeading>
        <p className="mb-8 text-lg leading-relaxed">{SUBHEADING}</p>
      </Container>
      <SigmatePortfolio lang={lang} />
      <PoolinkPortfolio lang={lang} />
      <YREMSPortfolio lang={lang} />
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

function SigmatePortfolio({ lang }: { lang: SupportedLang }) {
  const {
    SIGMATE,
    SIGMATE_DESC,
    SIGMATE_EASY_H,
    SIGMATE_EASY_FRONT,
    SIGMATE_RELIABLE_H,
    SIGMATE_RELIABLE_FRONT,
    SIGMATE_VALUATION_H,
    SIGMATE_VALUATION_FRONT,
  } = portfolioDict[lang];

  return (
    <>
      <PortfolioHero className="flex flex-col justify-center items-center">
        <StickyContainer className="px-8 flex flex-col justify-start items-center">
          <ThemedImage
            src={sigmateLogo}
            darkSrc={sigmateLogoDark}
            alt={`${SIGMATE}`}
            width={300}
            className="mb-4 max-w-[80%]"
          />
          <p className="text-2xl text-center">{SIGMATE_DESC}</p>
        </StickyContainer>
      </PortfolioHero>
      <Container className="py-8">
        <h4 className="text-2xl leading-relaxed">{SIGMATE_EASY_H}</h4>
        <p className="">{SIGMATE_EASY_FRONT}</p>
      </Container>
      <Container className="py-8">
        <h4 className="text-2xl leading-relaxed">{SIGMATE_RELIABLE_H}</h4>
        <p className="">{SIGMATE_RELIABLE_FRONT}</p>
      </Container>
      <Container className="py-8">
        <h4 className="text-2xl leading-relaxed">{SIGMATE_VALUATION_H}</h4>
        <p className="">{SIGMATE_VALUATION_FRONT}</p>
      </Container>
    </>
  );
}

function PoolinkPortfolio({ lang }: { lang: SupportedLang }) {
  const { POOLINK, POOLINK_DESC } = portfolioDict[lang];
  return (
    <>
      <PortfolioHero className="flex justify-center items-center">
        <StickyContainer className="px-8 flex flex-col items-center">
          <Image
            src={poolinkLogo}
            alt={`${POOLINK}`}
            width={300}
            className="mb-6 max-w-[80%]"
          />
          <p className="text-2xl text-center">{POOLINK_DESC}</p>
        </StickyContainer>
      </PortfolioHero>
      <div className="w-full h-screen"></div>
    </>
  );
}

function YREMSPortfolio({ lang }: { lang: SupportedLang }) {
  const { YREMS, YREMS_DESC } = portfolioDict[lang];
  return (
    <>
      <PortfolioHero className="flex justify-center items-center">
        <StickyContainer className="px-8 flex flex-col items-center">
          <h3 className="text-6xl font-semibold leading-relaxed">{YREMS}</h3>
          <p className="text-2xl text-center">{YREMS_DESC}</p>
        </StickyContainer>
      </PortfolioHero>
      <div className="w-full h-screen"></div>
    </>
  );
}
