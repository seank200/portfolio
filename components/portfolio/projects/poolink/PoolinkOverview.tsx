import Image from "next/image";
import { MyLang, createIntlDict } from "@lib/i18n";
import poolinkLogo from "@images/projects/poolink/LOGO_Poolink.png";
import poolinkHeroImage from "@images/projects/poolink/overview/1-1.png";
import poolinkHeroMobile from "@images/projects/poolink/overview/1-3.png";
import Heading from "@components/portfolio/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";

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
  },
);

export default function PoolinkOverview({ lang }: { lang: MyLang }) {
  const { H_HERO } = dict[lang];

  return (
    <>
      <Image
        src={poolinkHeroMobile}
        alt="Poolink"
        className="sm:hidden w-full"
      />
      <div className="pl-8 relative container">
        <Image
          src={poolinkHeroImage}
          alt="Poolink"
          className="hidden sm:block"
        />
        <Heading
          level={4}
          className="sm:absolute left-24 bottom-8 block text-4xl md:text-5xl font-bold leading-snug md:leading-snug"
        >
          {H_HERO}
          <Image
            src={poolinkLogo}
            alt="Poolink Logo"
            className="ml-0.5 mr-4 inline-block w-[6ch]"
          />
          <FontAwesomeIcon icon={faLink} className="h-em" />
        </Heading>
      </div>
    </>
  );
}
