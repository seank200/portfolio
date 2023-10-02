import { SupportedLang } from '@/i18n';
import { usePathname } from 'next/navigation';

export default function useSwitchLang(lang: SupportedLang) {
  const otherLang = lang === 'ko' ? 'en' : 'ko';
  const pathname = usePathname();
  const pathparts = pathname.split('/');
  // const searchParams = useSearchParams();

  // Generate relative URL for language change
  if (pathparts.length > 1) {
    pathparts[1] = otherLang;
  } else {
    pathparts.push(otherLang);
  }
  // const searchParamsStr = searchParams.toString();
  // const href =
  //   pathparts.join('/') + (searchParamsStr ? `?${searchParamsStr}` : '');
  const href = pathparts.join('/');

  return href;
}
