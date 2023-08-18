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
import { TimePrecision, experienceItems as items } from '@contents/Home';

export default function WorkExperience() {
  return (
    <Section id="home__section_portfolio">
      <Container className="min-h-screen pt-24 flex flex-col text-background-on">
        <h2 className="text-5xl font-semibold text-gradient mb-4">
          Work Experience
        </h2>
        <p className="mb-6 text-lg font-light leading-relaxed">
          My work experience
        </p>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-20 w-0.5 bg-slate-600"></div>
          <div>
            {items.map((item) => {
              // Format time period
              const startedAt = item.startedAt.toJSDate();
              const endedAt = item.endedAt?.toJSDate();
              const timePrecision: TimePrecision =
                item.timePrecision || 'month';
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
              const dtShortFormat = new Intl.DateTimeFormat(
                'en-US',
                formatOptions
              );
              const fEndedAtShort = endedAt
                ? dtShortFormat.format(endedAt)
                : undefined;

              return (
                <div
                  className="flex"
                  key={`${item.title} ${item.affiliation || ''}`}
                >
                  <p className="mr-12">{fEndedAtShort || 'Current'}</p>
                  <div className="w-full mb-4 rounded px-7 py-6 bg-surface shadow">
                    <div className="flex justify-between items-center">
                      <h3 className="mb-2 flex flex-row-reverse justify-end items-center text-2xl font-semibold">
                        {item.tags?.map((tag, idx) => (
                          <span
                            className={`text-xs font-medium ${tag.color} ${tag.bgColor} ml-3 px-2 py-1 rounded`}
                            key={idx}
                          >
                            {tag.text}
                          </span>
                        ))}
                        {item.title}
                      </h3>
                      {item.logo &&
                        (item.logo.url || item.affiliation?.url ? (
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
                        ))}
                    </div>
                    {item.affiliation && (
                      <IconLabel
                        icon={faBriefcase}
                        label={item.affiliation.text}
                        url={item.affiliation.url}
                        title="Affiliation"
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
                    {item.location && (
                      <IconLabel
                        icon={faLocationDot}
                        label={item.location}
                        title="Location"
                      />
                    )}
                    {item.contents && (
                      <ul className="mt-6 list-disc list-inside leading-relaxed text-slate-600 font-light">
                        {item.contents.map((content, idx) => (
                          <li
                            key={
                              typeof content === 'string'
                                ? content.slice(0, 8)
                                : idx
                            }
                          >
                            {content}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
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
    'flex items-center font-light text-lg text-slate-600 leading-relaxed';
  const iconClassName = 'mr-3 relative w-3';
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
