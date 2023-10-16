import { SUPPORTED_LANGS, SupportedLang } from '@/i18n';
import { usePathname, useSearchParams } from 'next/navigation';

export default function useSwitchLang(lang: SupportedLang) {
  const otherLang = lang === 'ko' ? 'en' : 'ko';
  const pathname = usePathname();
  const pathparts: string[] = pathname.split('/');
  const searchParams = useSearchParams();

  // Generate relative URL for language change
  if (pathparts.length > 1) {
    // pathparts[1] = otherLang;
    pathparts.splice(
      1,
      SUPPORTED_LANGS.includes(pathparts[1]) ? 1 : 0,
      otherLang
    );
  } else {
    pathparts.push(otherLang);
  }
  const searchParamsStr = searchParams.toString();
  const href =
    pathparts.join('/') + (searchParamsStr ? `?${searchParamsStr}` : '');

  return href;
}
