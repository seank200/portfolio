import ThemedImage from '@/components/ThemedImage';
import portfolioDict from '@/components/contents/Portfolio';
import { SupportedLang } from '@/i18n/utils';
import Container from '@/components/Container';
import StickyContainer from '../StickyContainer';
import PortfolioHero from './PortfolioHero';
import sigmateLogo from '@/public/images/LOGO_Sigmate.png';
import sigmateLogoDark from '@/public/images/LOGO_Sigmate_Dark.png';
import sigmateHome from '@/public/images/Sigmate_Home.png';
import sigmateMinting from '@/public/images/Sigmate_Minting.png';
import sigmateWH from '@/public/images/Sigmate_WH.png';
import Image from 'next/image';

export function SigmatePortfolio({ lang }: { lang: SupportedLang }) {
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
      <Container className="py-16 flex justify-between items-start">
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">{SIGMATE_EASY_H}</h2>
          <p className="text-lg">{SIGMATE_EASY_FRONT}</p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <Image
            src={sigmateHome}
            alt="Sigmate Home Screen"
            width={540}
            className="rounded shadow-lg"
          />
          <Image
            src={sigmateMinting}
            alt="Sigmate Home Screen"
            width={540}
            className="rounded shadow-lg"
          />
          <Image
            src={sigmateWH}
            alt="Sigmate Home Screen"
            width={400}
            className="rounded shadow-lg"
          />
        </div>
      </Container>
    </>
  );
}
