import Image, { StaticImageData } from "next/image";

type ImageSrc = StaticImageData | string;

export default function ThemedImage({
  src,
  darkSrc,
  alt,
  width,
  height,
  className,
  imageClassName,
  reverse,
}: {
  src: ImageSrc;
  darkSrc: ImageSrc;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  reverse?: boolean;
}) {
  return (
    <div className={`relative block ${className || ""}`}>
      <Image
        src={reverse ? darkSrc : src}
        alt={alt}
        width={width}
        height={height}
        className={`light-only max-w-full ${imageClassName || ""}`}
      />
      <Image
        src={reverse ? src : darkSrc}
        alt={alt}
        width={width}
        height={height}
        className={`dark-only absolute top-0 left-0 max-w-full ${
          imageClassName || ""
        }`}
      />
    </div>
  );
}
