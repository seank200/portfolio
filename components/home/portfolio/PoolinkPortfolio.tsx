import Image from 'next/image';
import poolinkLogo from '@/public/images/LOGO_Poolink.png';
import portfolioDict from '@/components/contents/Portfolio';
import { SupportedLang } from '@/i18n/utils';
import StickyContainer from '../StickyContainer';
import PortfolioHero from './PortfolioHero';

export function PoolinkPortfolio({ lang }: { lang: SupportedLang }) {
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
