import Image, { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const listItemImageClassName = 'mb-4 md:mb-0 max-w-full';

export default function ListItem({
  url,
  title,
  icon,
  imgSrc,
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
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  contents: React.ReactNode[];
  children?: React.ReactNode;
}) {
  const content = (
    <>
      <div className="mr-8">
        <h3 className="mb-2 text-lg md:text-xl font-semibold group-hover:text-primary">
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className="mr-2 hidden md:inline-block"
            />
          )}
          {title}
        </h3>
        <ul className="list-inside list-disc">
          {contents.map((content, idx) => (
            <li
              key={typeof content === 'string' ? content : idx}
              className="pl-5 -indent-5 text-faded leading-relaxed"
            >
              {content}
            </li>
          ))}
        </ul>
      </div>
      {imgSrc && imgAlt && (
        <Image
          src={imgSrc}
          alt={imgAlt}
          className={listItemImageClassName}
          width={imgWidth}
          height={imgHeight}
        />
      )}
      {children}
    </>
  );

  const className =
    'mt-6 flex flex-col-reverse md:flex-row md:justify-between items-start md:items-center px-4 md:px-5 py-5 rounded shadow bg-surface transition-all';

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
