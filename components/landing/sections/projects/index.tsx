import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Container';
import Section from '@/components/Section';
import SectionH2 from '@/components/SectionH2';
import ThemedImage from '@/components/ThemedImage';
import { expDict } from '@/components/dict/experiences';
import { SupportedLang, createTranslator } from '@/i18n';
import sigmateLogo from '@images/LOGO_Sigmate.png';
import sigmateLogoDark from '@images/LOGO_Sigmate_Dark.png';
import poolinkLogo from '@images/LOGO_Poolink.png';
import sigmateUIUpcoming from '@images/sigmate/Sigmate_UI_Upcoming.png';
import poolinkCover from '@images/poolink/1-1.png';
import yremsCover from '@images/yrems/cover.png';

export default function ProjectsSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const SIGMATE_DESC = expDict.facade[lang].DESCRIPTION;
  const POOLINK_DESC = expDict.poolink[lang].DESCRIPTION;
  const YREMS_DESC = expDict.yrems[lang].DESCRIPTION;
  return (
    <Section id="projects">
      <Container>
        <SectionH2 className="mb-6" href="#projects">
          {t('Projects', '프로젝트')}
        </SectionH2>
      </Container>
      <ul className="w-full flex flex-col gap-8">
        <ProjectItem
          lang={lang}
          href="/project/sigmate"
          heading={
            <ThemedImage
              src={sigmateLogo}
              darkSrc={sigmateLogoDark}
              alt="Sigmate"
              className="w-auto"
              height={48}
            />
          }
          description={SIGMATE_DESC}
          coverSrc={sigmateUIUpcoming}
          coverAlt="Sigmate UI: Upcoming Mintings View"
        />
        <ProjectItem
          lang={lang}
          href="/project/poolink"
          heading={
            <Image
              src={poolinkLogo}
              alt="Poolink"
              className="w-auto h-10"
              height={40}
            />
          }
          description={POOLINK_DESC}
          coverSrc={poolinkCover}
          coverAlt="Poolink"
        />
        <ProjectItem
          lang={lang}
          href="/project/yrems"
          heading={
            <span className="text-5xl text-[#0A3879] dark:text-blue-100 font-bold">
              YREMS
            </span>
          }
          description={YREMS_DESC}
          coverSrc={yremsCover}
          coverAlt="YREMS"
        />
      </ul>
    </Section>
  );
}

function ProjectItem({
  lang,
  href,
  heading,
  description,
  coverSrc,
  coverAlt,
}: {
  lang: SupportedLang;
  href: string;
  heading: React.ReactNode;
  description: React.ReactNode;
  coverSrc?: StaticImageData | string;
  coverAlt?: string;
}) {
  const t = createTranslator(lang);
  const VIEW_DETAILS = t('View more', '상세정보 보기');

  return (
    <li>
      <Link
        href={href}
        className="group py-12 min-h-[360px] flex justify-between bg-surface"
      >
        <Container className="group-hover:scale-101 flex justify-between items-center transition">
          <div className="z-10 absolute px-2 flex flex-col justify-center">
            <div className="mb-20">
              <h3 className="opacity-95 group-hover:opacity-100">{heading}</h3>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-faded group-hover:text-surface-on">
                {description}
              </p>
            </div>
            <div>
              <p className="text-primary group-hover:underline cursor-pointer">
                {VIEW_DETAILS}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4" />
              </p>
            </div>
          </div>
          <div></div>
          {coverSrc && coverAlt && (
            <Image
              src={coverSrc}
              alt={coverAlt}
              height={320}
              className="w-auto max-h-72 lg:max-h-80 opacity-5 md:opacity-40 lg:opacity-90 lg:group-hover:opacity-100"
            />
          )}
        </Container>
      </Link>
    </li>
  );
}
