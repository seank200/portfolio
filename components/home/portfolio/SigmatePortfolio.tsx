import ThemedImage from '@/components/ThemedImage';
import portfolioDict from '@/components/contents/Portfolio';
import { SupportedLang } from '@/i18n/utils';
import Container from '@/components/Container';
import sigmateLogo from '@/public/images/LOGO_Sigmate.png';
import sigmateLogoDark from '@/public/images/LOGO_Sigmate_Dark.png';
import StickyContainer from '../StickyContainer';
import PortfolioHero from './PortfolioHero';

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
