import { SupportedLang, createTranslator } from '@/i18n';
import Section from '../Section';
import Container from '@/components/Container';

export default function ProjectSection({
  lang,
  heading,
  description,
  title,
  affiliation,
  details,
  children,
}: {
  lang: SupportedLang;
  heading: React.ReactNode;
  description?: React.ReactNode;
  title?: React.ReactNode;
  affiliation?: React.ReactNode;
  details?: React.ReactNode[];
  children?: React.ReactNode;
}) {
  const t = createTranslator(lang);
  return (
    <Section className="relative min-h-screen flex flex-col items-start md:items-end">
      <div className="md:absolute left-0 right-0 md:h-screen">
        <Container className="md:sticky top-0 pt-20 pb-4 bg-background/90">
          <h3 className="mb-3 flex justify-between items-center">{heading}</h3>
          {description && <p className="text-lg font-light">{description}</p>}
        </Container>
      </div>
      <Container className="pt-6 md:pt-48 flex flex-col items-start">
        {title && (
          <>
            <H4>{t('My Title', '직책')}</H4>
            <p className="text-faded">{title}</p>
          </>
        )}
        {affiliation && (
          <>
            <H4>{t('Affiliation', '소속')}</H4>
            <p className="text-faded">{affiliation}</p>
          </>
        )}
        {details && (
          <>
            <H4>{t('Details', '세부사항')}</H4>
            <ul className="mb-8">
              {details.map((d, i) => (
                <li
                  key={i}
                  className="before:ml-0 before:mr-2 before:content-['-'] before:inline-block text-faded leading-relaxed"
                >
                  {d}
                </li>
              ))}
            </ul>
          </>
        )}
        {children}
      </Container>
    </Section>
  );
}

function H4({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <h4
      className={`mt-6 uppercase font-bold text-sm text-secondary leading-relaxed ${
        className || ''
      }`}
    >
      {children}
    </h4>
  );
}
