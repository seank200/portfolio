import { SupportedLang } from '@/i18n/utils';
import Link from 'next/link';

export default function FooterCta({
  lang,
  children,
}: {
  lang: SupportedLang;
  children: React.ReactNode;
}) {
  return (
    <Link href={`/${lang}`} className="hover:text-underline">
      {children}
    </Link>
  );
}
