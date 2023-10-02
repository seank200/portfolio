import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function SectionH2({
  className,
  children,
  href,
}: {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}) {
  const gradientText =
    'bg-clip-text bg-gradient-to-r from-primary to-secondary';
  return (
    <h2
      className={`group mb-3 flex text-3xl md:text-[2.125rem] font-semibold ${className}`}
    >
      {href ? (
        <Link
          href={href}
          className={`${gradientText} group-hover:text-transparent transition-all`}
        >
          {children}
        </Link>
      ) : (
        <span className={`${gradientText}`}>{children}</span>
      )}
      {href && (
        <Link href={href} className="flex items-center">
          <FontAwesomeIcon
            icon={faLink}
            className="ml-4 h-5 opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 text-faded transition-all"
          />
        </Link>
      )}
    </h2>
  );
}
