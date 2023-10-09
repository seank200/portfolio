import Container from '@/components/Container';
import Section from '@/components/Section';
import SectionH2 from '@/components/SectionH2';
import { SupportedLang, createTranslator } from '@/i18n';
import Image, { StaticImageData } from 'next/image';
import sigmateLogo from '@images/LOGO_Sigmate.png';
import sigmateLogoDark from '@images/LOGO_Sigmate_Dark.png';
import poolinkLogo from '@images/LOGO_Poolink.png';
import sigmateUIUpcoming from '@images/sigmate/Sigmate_UI_Upcoming.png';
import poolinkCover from '@images/poolink/1-1.png';
import ThemedImage from '@/components/ThemedImage';
import { expDict } from '@/components/dict/experiences';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ProjectsSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const SIGMATE_DESC = expDict.facade[lang].DESCRIPTION;
  const POOLINK_DESC = expDict.poolink[lang].DESCRIPTION;
  return (
    <Section>
      <Container>
        <SectionH2 className="mb-6">{t('Projects', '프로젝트')}</SectionH2>
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
          heading={<Image src={poolinkLogo} alt="Poolink" height={40} />}
          description={POOLINK_DESC}
          coverSrc={poolinkCover}
          coverAlt="Poolink"
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
  coverSrc: StaticImageData | string;
  coverAlt: string;
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
          <div className="z-10 absolute flex flex-col justify-center">
            <div className="mb-20">
              <h3 className="opacity-95 group-hover:opacity-100">{heading}</h3>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-faded group-hover:text-surface-on">
                {description}
              </p>
            </div>
            <div>
              <Link href={href} className="text-primary group-hover:underline">
                {VIEW_DETAILS}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4" />
              </Link>
            </div>
          </div>
          <div></div>
          <Image
            src={coverSrc}
            alt={coverAlt}
            height={320}
            className="max-h-72 lg:max-h-80 opacity-10 md:opacity-90 lg:group-hover:opacity-100"
          />
        </Container>
      </Link>
    </li>
  );
}
