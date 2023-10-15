'use client';

import { ExperienceItemName } from '@/components/dict/experiences';
import Image, { StaticImageData } from 'next/image';
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SupportedLang, createTranslator } from '@/i18n';

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
  lang: SupportedLang;
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
  lang,
}: ExperienceItemProps) {
  const t = createTranslator(lang);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const isExpandable = contents && contents.length > 3;

  const handleListClick: MouseEventHandler<
    HTMLUListElement | HTMLButtonElement
  > = (e) => {
    // Prevent anchor tag clicks from toggling expand/hide
    const elem = e.target as HTMLElement;
    if (elem.tagName == 'A') return;
    setIsOpen((p) => !p);
  };

  return (
    <motion.div
      className="py-16 first:pt-0 md:first:pt-16 flex flex-col justify-center"
      viewport={{ once: false, amount: 0.5 }}
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
        <ul
          className={`group mt-6 list-inside list-disc ${
            isExpandable && !isOpen ? 'cursor-pointer' : ''
          }`}
          onClick={isExpandable && !isOpen ? handleListClick : undefined}
        >
          {contents
            .slice(0, isOpen ? contents.length : 3)
            .map((content, idx) => (
              <li
                key={idx}
                className="before:content-['•'] before:block before:w-5 md:before:w-6 before:shrink-0 mb-1 flex"
              >
                <span>{content}</span>
              </li>
            ))}
          {contents && contents.length > 3 ? (
            <button
              className={`mt-1 pl-5 md:pl-6 text-primary font-semibold hover:underline ${
                isOpen ? 'hover:underline' : 'group-hover:underline'
              }`}
              onClick={isExpandable && isOpen ? handleListClick : undefined}
            >
              {t(
                isOpen ? `View less` : `View more..`,
                isOpen ? `숨기기` : `더 보기..`
              )}
            </button>
          ) : null}
        </ul>
      )}
      {url ? linkElem : dividerElem}
    </motion.div>
  );
}
