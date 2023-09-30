import Container from '@/components/Container';
import Section from '../../Section';
import SectionH2 from '../../SectionH2';
import { SupportedLang, createTranslator, formatTimePeriod } from '@/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { expLink, expPeriod } from '@/components/dict/experiences';
import {
  yonseiBCDict,
  yonseiCSDict,
} from '@/components/dict/experiences/yonsei';
import Image, { StaticImageData } from 'next/image';
import yonseiLogo from '@images/LOGO_Yonsei.jpg';

export default function EducationSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const yonseiBC = yonseiBCDict[lang];
  const yonseiCS = yonseiCSDict[lang];

  return (
    <Section>
      <Container>
        <SectionH2>{t('Education', '교육')}</SectionH2>
        <EducationItem
          title={yonseiBC.TITLE}
          url={expLink.yonseiBC}
          contents={[
            yonseiBC.DIVISION,
            yonseiBC.AFFILIATION,
            formatTimePeriod(
              lang,
              expPeriod.yonseiBC.start,
              expPeriod.yonseiBC.end
            ),
          ]}
          imgSrc={yonseiLogo}
          imgAlt={t('Yonsei University', '연세대학교 신촌캠퍼스')}
        />
        <EducationItem
          title={yonseiCS.TITLE}
          url={expLink.yonseiCS}
          contents={[
            yonseiCS.DIVISION,
            yonseiCS.AFFILIATION,
            formatTimePeriod(
              lang,
              expPeriod.yonseiCS.start,
              expPeriod.yonseiCS.end
            ),
          ]}
          imgSrc={yonseiLogo}
          imgAlt={t('Yonsei University', '연세대학교 신촌캠퍼스')}
        />
      </Container>
    </Section>
  );
}

function EducationItem({
  url,
  title,
  imgSrc,
  imgAlt,
  contents,
}: {
  url: string;
  title: React.ReactNode;
  imgSrc: StaticImageData;
  imgAlt: string;
  contents: React.ReactNode[];
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 hover:scale-101 flex flex-col-reverse md:flex-row md:justify-between items-start md:items-center px-4 md:px-5 py-5 rounded shadow hover:shadow-background-on/20 bg-surface transition-all"
    >
      <div className="mr-8">
        <h3 className="mb-2 text-lg md:text-xl font-semibold">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="mr-2 hidden md:inline-block"
          />
          {title}
        </h3>
        {contents.map((content, idx) => (
          <p
            key={typeof content === 'string' ? content : idx}
            className="text-faded leading-relaxed"
          >
            {content}
          </p>
        ))}
      </div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        className="mb-4 md:mb-0 max-w-full"
        width={96}
      />
    </a>
  );
}
