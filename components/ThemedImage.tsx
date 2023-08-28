'use client';

import Image, { StaticImageData } from 'next/image';

type NumberLike = number | `${number}`;

export default function ThemedImage({
  src,
  darkSrc,
  alt,
  width,
  height,
  className,
}: {
  src: StaticImageData | string;
  darkSrc?: StaticImageData | string;
  alt: string;
  width?: NumberLike;
  height?: NumberLike;
  className?: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`${darkSrc ? 'light-only ' : ''}${className || ''}`}
        width={width}
        height={height}
      />
      {darkSrc && (
        <Image
          src={darkSrc}
          alt={alt}
          className={`dark-only ${className || ''}`}
          width={width}
          height={height}
        />
      )}
    </>
  );
}
