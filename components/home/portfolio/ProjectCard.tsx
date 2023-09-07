'use client';

import ThemedImage from '@/components/ThemedImage';
import Image, { StaticImageData } from 'next/image';
import { MouseEventHandler } from 'react';

export default function ProjectCard({
  logoSrc,
  logoDarkSrc,
  logoWidth,
  logoHeight,
  title,
  hideTitle,
  onMouseEnter,
}: {
  logoSrc?: StaticImageData | string;
  logoDarkSrc?: StaticImageData | string;
  logoWidth?: number | `${number}`;
  logoHeight?: number | `${number}`;
  title: string;
  hideTitle?: boolean;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="rounded p-6 bg-surface flex justify-center items-center space-x-2"
    >
      {logoSrc &&
        (logoDarkSrc ? (
          <ThemedImage
            src={logoSrc}
            darkSrc={logoDarkSrc}
            alt={title}
            width={logoWidth}
            height={logoHeight}
          />
        ) : (
          <Image
            src={logoSrc}
            alt={title}
            width={logoWidth}
            height={logoHeight}
          />
        ))}
      {hideTitle ? null : (
        <span className="text-3xl font-semibold">{title}</span>
      )}
    </div>
  );
}
