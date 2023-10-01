import { ExperienceItemName } from '@/components/dict/experiences';
import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

  const clickableLogoClassName = `${logoClassName} hover:shadow-lg hover:scale-102 transition-all`;

  let logoImage: React.ReactNode = null;
  let linkElem: React.ReactNode = null;
  let dividerElem: React.ReactNode = null;
  if (logoSrc && logoAlt) {
    logoImage = <Image src={logoSrc} alt={logoAlt} height={logoHeight || 32} />;

    if (url) {
      const isInternalUrl = url.charAt(0) === '/';
      if (isInternalUrl) {
        linkElem = (
          <Link href={url} className={clickableLogoClassName}>
            {logoImage}
          </Link>
        );
      } else {
        linkElem = (
          <a
            href={url}
            className={clickableLogoClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {logoImage}
          </a>
        );
      }
    } else {
      dividerElem = (
        <div className="mt-6 w-full rounded py-3 flex justify-center items-center bg-white">
          {logoImage}
        </div>
      );
    }
  }

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
            <li key={idx} className="pl-5 -indent-5">
              {content}
            </li>
          ))}
        </ul>
      )}
      {url ? linkElem : dividerElem}
    </motion.div>
  );
}
