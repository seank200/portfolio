import { ExperienceItemName } from '@/components/dict/experiences';
import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

export type ExperienceItemProps = {
  name: ExperienceItemName;
  title: React.ReactNode;
  affiliation?: React.ReactNode;
  division?: React.ReactNode;
  location?: React.ReactNode;
  category?: React.ReactNode;
  contents?: React.ReactNode[];
  period: string;
  logoSrc?: StaticImageData | string;
  logoAlt?: string;
  logoHeight?: number;
  url?: string;
  setCurrentItem: Dispatch<SetStateAction<ExperienceItemName>>;
};

export default function ExperienceItem({
  name,
  title,
  affiliation,
  division,
  location,
  category,
  contents,
  period,
  logoSrc,
  logoAlt,
  logoHeight,
  url,
  setCurrentItem,
}: ExperienceItemProps) {
  const logoClassName =
    'mt-6 w-full rounded py-3 flex justify-center items-center bg-white';
  return (
    <motion.div
      className="py-16 flex flex-col justify-center"
      viewport={{ once: false, amount: 0.75 }}
      onViewportEnter={() => setCurrentItem(name)}
    >
      <p className="mb-2 font-medium text-primary">{period}</p>
      <h3 className="mb-2 flex flex-wrap items-center gap-4 text-2xl font-bold">
        {title}
        {category && (
          <span className="px-2 py-1 bg-primary/10 dark:bg-primary/30 text-sm font-medium">
            {category}
          </span>
        )}
      </h3>
      {division && <p className="text-faded">{division}</p>}
      {affiliation && <p className="text-faded">{affiliation}</p>}
      {location && <p className="text-faded">{location}</p>}
      {contents && (
        <ul className="mt-6 leading-relaxed list-inside list-disc">
          {contents.map((content, idx) => (
            <li key={idx}>{content}</li>
          ))}
        </ul>
      )}
      {logoSrc &&
        logoAlt &&
        (url ? (
          <a
            href={url}
            className={`${logoClassName} hover:shadow-lg hover:scale-102 transition-all`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logoSrc} alt={logoAlt} height={logoHeight || 32} />
          </a>
        ) : (
          <div className="mt-6 w-full rounded py-3 flex justify-center items-center bg-white">
            <Image src={logoSrc} alt={logoAlt} height={logoHeight || 32} />
          </div>
        ))}
    </motion.div>
  );
}
