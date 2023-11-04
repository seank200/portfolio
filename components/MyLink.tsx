import { MyLang, navpath } from "@lib/i18n";
import Link from "next/link";

export default function MyLink<T extends string>({
  href,
  children,
  className,
  lang,
}: {
  href: T;
  children?: React.ReactNode;
  className?: string;
} & (T extends `/${string}` ? { lang: MyLang } : { lang?: MyLang })) {
  if (href.charAt(0) === "/") {
    return (
      <Link href={navpath(href, lang)} className={className}>
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={className}
      >
        {children}
      </a>
    );
  }
}
