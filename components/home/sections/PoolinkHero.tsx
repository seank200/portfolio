import Image from 'next/image';
import poolinkLogo from '@images/LOGO_Poolink.png';
import poolinkHeroImage from '@images/poolink/1-1.png';
import poolinkHeroMobile from '@images/poolink/1-3.png';
import { SupportedLang, createIntlDict } from '@/i18n';
import Container from '@/components/Container';

const dict = createIntlDict(
  {
    H_HERO: (
      <>
        Pull In
        <br />
        Your Links to
        <br />
        <span className="hidden">Poolink</span>
      </>
    ),
  },
  {
    H_HERO: (
      <>
        나만의 풀로
        <br />
        링크를
        <br />
        <span className="hidden">Poolink</span>
      </>
    ),
  }
);

export default function PoolinkHero({ lang }: { lang: SupportedLang }) {
  const { H_HERO } = dict[lang];

  return (
    <>
      <Image
        src={poolinkHeroMobile}
        alt="Poolink"
        className="sm:hidden w-full"
      />
      <Container className="py-8 relative">
        <Image
          src={poolinkHeroImage}
          alt="Poolink"
          className="hidden sm:block"
        />
        <h4 className="absolute bottom-8 block text-faded text-4xl md:text-5xl font-bold leading-snug md:leading-snug">
          {H_HERO}
          <Image
            src={poolinkLogo}
            alt="Poolink"
            className="ml-0.5 mr-4 inline-block w-[6ch]"
          />
          🔗
        </h4>
      </Container>
    </>
  );
}
