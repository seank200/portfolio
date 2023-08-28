import portfolioDict from '@/components/contents/Portfolio';
import { SupportedLang } from '@/i18n/utils';
import StickyContainer from '../StickyContainer';
import PortfolioHero from './PortfolioHero';

export function YREMSPortfolio({ lang }: { lang: SupportedLang }) {
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
