import { SupportedLang } from '@/i18n/utils';
import Container from '@components/Container';
import Section from '@components/Section';
import SectionHeading from '@components/home/SectionHeading';
import portfolioDict from '@/components/contents/Portfolio';
import { SigmatePortfolio } from '../portfolio/SigmatePortfolio';
import { PoolinkPortfolio } from '../portfolio/PoolinkPortfolio';
import { YREMSPortfolio } from '../portfolio/YRMESPortfolio';
import PortfolioOverview from '../portfolio/PortfolioOverview';

export default function Portfolio({ lang }: { lang: SupportedLang }) {
  const { PORTFOLIO, SUBHEADING } = portfolioDict[lang];

  return (
    <Section id="portfolio">
      <Container className="pt-24 flex flex-col text-background-on">
        <SectionHeading color="secondary">{PORTFOLIO}</SectionHeading>
        <p className="mb-8 leading-relaxed">{SUBHEADING}</p>
        <PortfolioOverview lang={lang} />
      </Container>
      <SigmatePortfolio lang={lang} />
      <PoolinkPortfolio lang={lang} />
      <YREMSPortfolio lang={lang} />
    </Section>
  );
}
