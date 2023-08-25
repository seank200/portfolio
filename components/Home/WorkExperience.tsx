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
  ExperienceItem,
  TimePrecision,
} from '@/components/contents/WorkExperience';
import SectionHeading from './SectionHeading';

export default function WorkExperience({
  contents,
}: {
  contents: ExperienceItem[];
}) {
  return (
    <Section id="home__section_work_experience">
      <Container className="pt-24 flex flex-col">
        <SectionHeading>Work Experience</SectionHeading>
        <p className="mb-8 text-lg font-light leading-relaxed">
          I am a fast learner and a natural team player, with experiences to
          blend in seamlessly with any team or project.
        </p>
        {contents.map((item) => {
          // Format time period
          const [fStartedAt, fEndedAt] = formatDates(item);

          return (
            <div
              className="relative w-full mb-4 rounded px-7 py-6 bg-surface text-surface-on shadow"
              key={`${item.title} ${item.affiliation || ''}`}
            >
              <div className="mb-8 sm:mb-0 pt-14 sm:pt-0 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <h3 className="mb-2 flex flex-col sm:flex-row justify-end items-start sm:items-center text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <div className="space-x-2">
                    {item.tags?.map((tag, idx) => (
                      <span
                        className={`text-xs font-medium ${tag.color} ${tag.bgColor} px-2 py-1 rounded`}
                        key={idx}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
                {item.logo && (
                  <div className="absolute top-0 left-0 right-0 sm:static rounded-t sm:rounded px-7 sm:px-2 py-5 sm:py-1 bg-white flex items-center">
                    {item.logo.url || item.affiliation?.url ? (
                      <a
                        href={item.logo.url || item.affiliation?.url}
                        target="_blank"
                        rel="noopenner noreferrer"
                      >
                        <Image
                          src={item.logo.src}
                          width={item.logo.width}
                          height={item.logo.height}
                          alt="Facade.Inc"
                        />
                      </a>
                    ) : (
                      <Image
                        src={item.logo.src}
                        width={item.logo.width}
                        height={item.logo.height}
                        alt="Facade.Inc"
                      />
                    )}
                  </div>
                )}
              </div>
              {item.affiliation && (
                <IconLabel
                  icon={faBriefcase}
                  label={item.affiliation.text}
                  url={item.affiliation.url}
                  title="Affiliation"
                />
              )}
              {item.location && (
                <IconLabel
                  icon={faLocationDot}
                  label={item.location}
                  title="Location"
                />
              )}
              {item.startedAt && (
                <IconLabel
                  icon={faClock}
                  label={
                    <>
                      <span>{fStartedAt}</span>&nbsp;-&nbsp;
                      <span>{fEndedAt || 'Current'}</span>
                    </>
                  }
                  title="Duration"
                />
              )}
              {item.contents && (
                <ul className="mt-6 list-disc list-inside leading-relaxed text-background-on-variant font-light">
                  {item.contents.map((content, idx) => (
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
    </Section>
  );
}

function formatDates(
  item: ExperienceItem
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
  const dtFormat = new Intl.DateTimeFormat('en-US', formatOptions);
  const fStartedAt = dtFormat.format(startedAt);
  const fEndedAt = endedAt ? dtFormat.format(endedAt) : undefined;
  formatOptions.month = 'numeric';
  const dtShortFormat = new Intl.DateTimeFormat('en-US', formatOptions);
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
    'flex items-start font-light text-lg text-background-on-variant leading-relaxed';
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
