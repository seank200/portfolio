/* eslint-disable no-fallthrough */

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faBriefcase,
  faClock,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Section from '@/components/Section';
import Container from '@/components/Container';
import {
  experienceDicts,
  ExpItem,
  TimePrecision,
} from '@/components/contents/WorkExperience';
import SectionHeading from '@components/home/SectionHeading';
import ScrollGuide from '@components/ScrollGuide';
import { SupportedLang, createIntlDict } from '@/i18n/utils';

const dict = createIntlDict(
  {
    WORK_EXPERIENCE: 'Work Experience',
    SUBHEADING:
      'I am a fast learner and a natural team player, with experiences to blend in seamlessly with any team or project.',
    CURRENT: 'Current',
  },
  {
    WORK_EXPERIENCE: '업무 경험',
    SUBHEADING:
      '새로운 것을 배움에 즐거움을 느끼고 학습 속도가 빠른 편입니다. 여러 프로젝트 경험을 통해 다양한 팀원과 문화에도 쉽게 적응할 수 있다는 자신감이 있습니다.',
    CURRENT: '현재',
  }
);

export default function WorkExperience({ lang }: { lang: SupportedLang }) {
  const { WORK_EXPERIENCE, SUBHEADING, CURRENT } = dict[lang];
  return (
    <Section id="work-experience" className="relative">
      <Container className="pt-24 flex flex-col">
        <SectionHeading>{WORK_EXPERIENCE}</SectionHeading>
        <p className="mb-8 text-lg leading-relaxed">{SUBHEADING}</p>
      </Container>
      <Container className="pb-24 flex flex-col" mobilePaddingX="px-0">
        {experienceDicts.map((exp) => {
          const { affiliation, logo, startedAt } = exp;
          const { TITLE, AFFILIATION, LOCATION } = exp.dict[lang];
          const TAGS = exp.dict[lang].TAGS as React.ReactNode[] | undefined;
          const CONTENTS = exp.dict[lang].CONTENTS as
            | React.ReactNode[]
            | undefined;
          // Format time period
          const [fStartedAt, fEndedAt] = formatDates(exp, lang);

          return (
            <div
              className="relative w-full mb-8 md:mb-4 md:rounded px-8 py-6 bg-surface text-surface-on shadow"
              key={`${TITLE} ${AFFILIATION || ''}`}
            >
              <div className="mb-8 md:mb-0 pt-14 md:pt-0 flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <h3 className="mb-2 flex flex-col md:flex-row justify-end items-start md:items-center text-2xl font-semibold">
                    {TITLE}
                  </h3>
                  <div className="space-x-2">
                    {TAGS?.map((tag, idx) => (
                      <span
                        className={`text-xs font-medium bg-background-variant text-background-on  px-2 py-1 rounded`}
                        key={idx}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {logo && (
                  <div className="absolute top-0 left-0 right-0 md:static md:rounded-t md:rounded px-8 md:px-2 py-5 md:py-1 bg-white flex items-center">
                    {logo.url || affiliation?.url ? (
                      <a
                        href={logo.url || affiliation?.url}
                        target="_blank"
                        rel="noopenner noreferrer"
                      >
                        <Image
                          src={logo.src}
                          width={logo.width}
                          height={logo.height}
                          alt="Facade.Inc"
                        />
                      </a>
                    ) : (
                      <Image
                        src={logo.src}
                        width={logo.width}
                        height={logo.height}
                        alt="Facade.Inc"
                      />
                    )}
                  </div>
                )}
              </div>
              {AFFILIATION && (
                <IconLabel
                  icon={faBriefcase}
                  label={AFFILIATION}
                  url={affiliation?.url}
                  title="Affiliation"
                />
              )}
              {LOCATION && (
                <IconLabel
                  icon={faLocationDot}
                  label={LOCATION}
                  title="Location"
                />
              )}
              {startedAt && (
                <IconLabel
                  icon={faClock}
                  label={
                    <>
                      <span>{fStartedAt}</span>&nbsp;-&nbsp;
                      <span>{fEndedAt || CURRENT}</span>
                    </>
                  }
                  title="Duration"
                />
              )}
              {CONTENTS && (
                <ul className="mt-6 list-disc list-inside leading-relaxed text-background-on-variant">
                  {CONTENTS.map((content, idx) => (
                    <li
                      key={
                        typeof content === 'string' ? content.slice(0, 8) : idx
                      }
                    >
                      {content}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </Container>
      <ScrollGuide scrollTo="#portfolio">포트폴리오</ScrollGuide>
    </Section>
  );
}

function formatDates(
  item: ExpItem,
  lang: SupportedLang
): [string, string | undefined, string | undefined] {
  const startedAt = item.startedAt.toJSDate();
  const endedAt = item.endedAt?.toJSDate();
  const timePrecision: TimePrecision = item.timePrecision || 'month';
  const formatOptions: Intl.DateTimeFormatOptions = {};
  switch (timePrecision) {
    case 'date':
      formatOptions.day = 'numeric';
    case 'month':
      formatOptions.month = 'short';
    case 'year':
      formatOptions.year = 'numeric';
      break;
  }
  const locale: Record<SupportedLang, string> = {
    en: 'en-US',
    kr: 'ko-KR',
  };
  const dtFormat = new Intl.DateTimeFormat(locale[lang], formatOptions);
  const fStartedAt = dtFormat.format(startedAt);
  const fEndedAt = endedAt ? dtFormat.format(endedAt) : undefined;
  formatOptions.month = 'numeric';
  const dtShortFormat = new Intl.DateTimeFormat(locale[lang], formatOptions);
  const fEndedAtShort = endedAt ? dtShortFormat.format(endedAt) : undefined;

  return [fStartedAt, fEndedAt, fEndedAtShort];
}

function IconLabel({
  icon,
  label,
  title,
  url,
}: {
  icon?: IconDefinition;
  label: React.ReactNode;
  title?: string;
  url?: string;
}) {
  const containerClassName =
    'flex items-start text-background-on-variant leading-relaxed';
  const iconClassName = 'mr-3 relative top-1 w-3';
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${containerClassName} hover:underline`}
      >
        {icon && (
          <FontAwesomeIcon
            title={title}
            icon={icon}
            className={iconClassName}
          />
        )}
        {label}
      </a>
    );
  }
  return (
    <p className={containerClassName}>
      {icon && (
        <FontAwesomeIcon title={title} icon={icon} className={iconClassName} />
      )}
      {label}
    </p>
  );
}
