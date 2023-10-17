import Image, { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ThemedImage from '../ThemedImage';

export const listItemImageClassName = 'mb-4 md:mb-0 max-w-full';

export default function ListItem({
  url,
  title,
  icon,
  imgSrc,
  imgDarkSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  contents,
  children,
}: {
  url?: string;
  title: React.ReactNode;
  icon?: IconProp;
  imgSrc?: StaticImageData;
  imgDarkSrc?: StaticImageData;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  contents: React.ReactNode[];
  children?: React.ReactNode;
}) {
  const content = (
    <>
      <div className="md:mr-8">
        <h3 className="mb-2 text-lg md:text-xl font-semibold">
          {icon && (
            <span className="mr-2 hidden md:inline-block">
              <FontAwesomeIcon icon={icon} />
            </span>
          )}
          {title}
        </h3>
        <ul className="list-inside list-disc">
          {contents.map((content, idx) => (
            <li
              key={typeof content === 'string' ? content : idx}
              className="pl-6 -indent-[17px] md:pl-6 md:-indent-5 text-faded leading-relaxed"
            >
              {content}
            </li>
          ))}
        </ul>
      </div>
      {imgSrc &&
        imgAlt &&
        (imgDarkSrc ? (
          <ThemedImage
            src={imgSrc}
            darkSrc={imgDarkSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
            className="mb-2 md:mb-0"
          />
        ) : (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
            className="mb-2 md:mb-0"
          />
        ))}
      {children}
    </>
  );

  const className =
    'mt-6 flex flex-col-reverse md:flex-row md:justify-between items-start md:items-center px-5 py-5 rounded shadow bg-surface transition-all';

  return url ? (
    <ExternalLink
      href={url}
      className={`group hover:shadow-background-on/20 hover:scale-101 ${className}`}
    >
      {content}
    </ExternalLink>
  ) : (
    <div className={className}>{content}</div>
  );
}

function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
