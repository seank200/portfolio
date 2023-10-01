import Image, { StaticImageData } from 'next/image';

type ImageSrc = StaticImageData | string;

export default function ThemedImage({
  src,
  darkSrc,
  alt,
  width,
  height,
  className,
}: {
  src: ImageSrc;
  darkSrc: ImageSrc;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className={`relative block ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="dark__invisible max-w-full"
      />
      <Image
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        className="light__invisible absolute top-0 left-0 max-w-full"
      />
    </div>
  );
}
